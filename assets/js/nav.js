export function initNav(el) {
    const toggle = el.querySelector(".nav__toggle");

    if (!toggle) {
        return;
    }

    const setOpen = (open) => {
        el.classList.toggle("nav--open", open);
        toggle.setAttribute("aria-expanded", String(open));
    };

    toggle.addEventListener("click", () => setOpen(!el.classList.contains("nav--open")));
    el.querySelectorAll(".nav__link").forEach((link) => link.addEventListener("click", () => setOpen(false)));
    el.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            setOpen(false);
            toggle.focus();
        }
    });
}
