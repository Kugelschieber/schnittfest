package util

import (
	"github.com/emvi/logbuch"
	"html/template"
	"sync"
)

type cachedTemplate struct {
	tpl   *template.Template
	files []string
}

// TemplateCache caches templates.
type TemplateCache struct {
	templates map[string]cachedTemplate
	disabled  bool
	mutex     sync.RWMutex
}

// NewTemplateCache creates a new template cache.
// If disabled is set to true, the templates are reloaded on each call.
func NewTemplateCache(disabled bool) *TemplateCache {
	return &TemplateCache{templates: make(map[string]cachedTemplate), disabled: disabled}
}

// ParseFiles parses the given template files and stores them as one template called name.
func (tplcache *TemplateCache) ParseFiles(name string, files ...string) (*template.Template, error) {
	if _, ok := tplcache.templates[name]; ok && !tplcache.disabled {
		tplcache.mutex.RLock()
		defer tplcache.mutex.RUnlock()
		return tplcache.templates[name].tpl, nil
	}

	tplcache.mutex.Lock()
	defer tplcache.mutex.Unlock()
	logbuch.Debug("Caching template", logbuch.Fields{"name": name})
	tpl, err := template.ParseFiles(files...)

	if err != nil {
		return nil, err
	}

	tplcache.templates[name] = cachedTemplate{tpl, files}
	return tpl, nil
}

// GetTemplate returns a cached template by name or nil if not found.
func (tplcache *TemplateCache) GetTemplate(name string) *template.Template {
	tpl, ok := tplcache.templates[name]

	if ok && tplcache.disabled {
		newTpl, err := tplcache.ParseFiles(name, tpl.files...)

		if err != nil {
			logbuch.Error("Error parsing file on cache rebuild", logbuch.Fields{"err": err, "name": name})
			return nil
		}

		return newTpl
	} else if ok {
		tplcache.mutex.RLock()
		defer tplcache.mutex.RUnlock()
		return tplcache.templates[name].tpl
	}

	return nil
}

// Clear clears the template cache.
func (tplcache *TemplateCache) Clear() {
	tplcache.templates = make(map[string]cachedTemplate)
}

// Enable enables the cache, so that each template is loaded from cache.
func (tplcache *TemplateCache) Enable() {
	tplcache.disabled = false
}

// Disable disables the cache, so that each template is reloaded on each call.
func (tplcache *TemplateCache) Disable() {
	tplcache.disabled = true
}
