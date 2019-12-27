package pages

import (
	"github.com/Kugelschieber/schnittfest/util"
	"github.com/emvi/logbuch"
	"os"
	"path/filepath"
	"strings"
)

const (
	defaultTemplateBase  = "template"
	landingPageTemplate  = "landing_page"
	notfoundPageTemplate = "notfound_page"
)

var (
	tplCache *util.TemplateCache
)

func LoadTemplates() {
	tplCache = util.NewTemplateCache(strings.ToLower(os.Getenv("SCHNITTFEST_HOT_RELOAD")) == "true")
	templateBase := os.Getenv("SCHNITTFEST_TEMPLATE_BASE")

	if templateBase == "" {
		templateBase = defaultTemplateBase
	}

	if _, err := tplCache.ParseFiles(landingPageTemplate, filepath.Join(templateBase, "landing_page.html"),
		filepath.Join(templateBase, "head.html"),
		filepath.Join(templateBase, "end.html"),
		filepath.Join(templateBase, "navbar.html"),
		filepath.Join(templateBase, "footer.html")); err != nil {
		logbuch.Fatal("Error loading landing page template", logbuch.Fields{"err": err})
	}

	if _, err := tplCache.ParseFiles(notfoundPageTemplate, filepath.Join(templateBase, "404_page.html"),
		filepath.Join(templateBase, "head.html"),
		filepath.Join(templateBase, "end.html"),
		filepath.Join(templateBase, "navbar.html"),
		filepath.Join(templateBase, "footer.html")); err != nil {
		logbuch.Fatal("Error loading 404 page template", logbuch.Fields{"err": err})
	}
}
