var x = window.screen.width > 512 ? 160 : 80;

var controller = new ScrollMagic.Controller();

var hero = new TweenMax.from("#hero", 1, {
    x: this.x,
    ease: Power1.easeOut
});

var heroScene = new ScrollMagic.Scene({
    triggerElement: "#start",
    triggerHook: 0,
    duration: 320
})
.setTween(hero)
.addTo(controller);

