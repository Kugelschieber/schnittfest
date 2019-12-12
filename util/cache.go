package util

import (
	"github.com/emvi/logbuch"
	"html/template"
	"sync"
)

// TemplateCache caches templates.
type TemplateCache struct {
	templates map[string]*template.Template
	mutex     sync.RWMutex
}

// NewTemplateCache creates a new template cache.
func NewTemplateCache() *TemplateCache {
	return &TemplateCache{templates: make(map[string]*template.Template)}
}

// ParseFiles parses the given template files and stores them as one template called name.
func (tplcache *TemplateCache) ParseFiles(name string, files ...string) (*template.Template, error) {
	if tplcache.templates[name] != nil {
		tplcache.mutex.RLock()
		defer tplcache.mutex.RUnlock()
		return tplcache.templates[name], nil
	}

	tplcache.mutex.Lock()
	defer tplcache.mutex.Unlock()
	logbuch.Debug("Caching template", logbuch.Fields{"name": name})
	tpl, err := template.ParseFiles(files...)

	if err != nil {
		return nil, err
	}

	tplcache.templates[name] = tpl
	return tpl, nil
}

// GetTemplate returns a cached template by name or nil if not found.
func (tplcache *TemplateCache) GetTemplate(name string) *template.Template {
	if tplcache.templates[name] != nil {
		tplcache.mutex.RLock()
		defer tplcache.mutex.RUnlock()
		return tplcache.templates[name]
	}

	return nil
}

// Clear clears the template cache.
func (tplcache *TemplateCache) Clear() {
	tplcache.templates = make(map[string]*template.Template)
}
