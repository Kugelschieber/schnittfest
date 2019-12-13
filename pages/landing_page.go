package pages

import (
	"github.com/Kugelschieber/schnittfest/util"
	"github.com/emvi/logbuch"
	"net/http"
)

var landingPageI18n = map[string]map[string]string{
	"de": {},
}

func LandingPageHandler(w http.ResponseWriter, r *http.Request) {
	tpl := tplCache.GetTemplate(landingPageTemplate)

	if tpl == nil {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	langCode := util.GetLangCode(r)
	data := struct {
		Vars       map[string]string
		NavbarVars map[string]string
		FooterVars map[string]string
	}{
		landingPageI18n[langCode],
		navbarComponentI18n[langCode],
		footerComponentI18n[langCode],
	}

	if err := tpl.Execute(w, &data); err != nil {
		logbuch.Error("Error rendering landing page", logbuch.Fields{"err": err})
		w.WriteHeader(http.StatusInternalServerError)
	}
}
