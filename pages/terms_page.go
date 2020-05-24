package pages

import (
	"github.com/Kugelschieber/schnittfest/util"
	"github.com/emvi/logbuch"
	"net/http"
)

var termsPageI18n = map[string]map[string]string{
	"de": {},
}

func TermsPageHandler(w http.ResponseWriter, r *http.Request) {
	tpl := tplCache.GetTemplate(termsPageTemplate)

	if tpl == nil {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	langCode := util.GetLangCode(r)
	data := struct {
		Vars       map[string]string
		FooterVars map[string]string
	}{
		termsPageI18n[langCode],
		footerComponentI18n[langCode],
	}

	if err := tpl.Execute(w, &data); err != nil {
		logbuch.Error("Error rendering terms page", logbuch.Fields{"err": err})
		w.WriteHeader(http.StatusInternalServerError)
	}
}
