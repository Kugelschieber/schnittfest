import { initNav } from "./nav.js";
import { initReveal } from "./reveal.js";
import { initTimecode } from "./timecode.js";

document.documentElement.classList.add("js");

const components = {
    nav: initNav,
    reveal: initReveal,
    timecode: initTimecode,
};

function init(root = document) {
    root.querySelectorAll("[data-component]").forEach((el) => {
        if (el.dataset.componentReady) {
            return;
        }

        const fn = components[el.dataset.component];

        if (fn) {
            fn(el);
            el.dataset.componentReady = "true";
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
} else {
    start();
}

function start() {
    init();
    // the admin UI swaps element HTML in place after edits
    new MutationObserver(() => init()).observe(document.body, { childList: true, subtree: true });
}
