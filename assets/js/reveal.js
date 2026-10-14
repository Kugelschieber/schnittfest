let observer = null;

function getObserver() {
    if (!observer) {
        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    }

    return observer;
}

export function initReveal(el) {
    if (!("IntersectionObserver" in window)) {
        el.classList.add("is-visible");
        return;
    }

    getObserver().observe(el);
}
