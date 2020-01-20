var offset = window.screen.width > 512 ? 20 : 10;

var controller = new ScrollMagic.Controller();

var part2 = new TweenMax.from("#part2", 1, {
    x: "-100vw",
    ease: Power2.easeOut
});

var part2Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
})
.setTween(part2)
.addTo(controller);

var part3 = new TweenMax.from("#part3", 1, {
    x: "-100vw",
    ease: Power2.easeOut
});

var part3Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: this.offset
})
.setTween(part3)
.addTo(controller);

var part4 = new TweenMax.from("#part4", 1, {
    x: "-100vw",
    y: "100%",
    rotation: 2,
    ease: Power2.easeOut
});

var part4Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 2*this.offset
})
.setTween(part4)
.addTo(controller);

var part5 = new TweenMax.from("#part5", 1, {
    x: "100vw",
    ease: Power2.easeOut
});

var part5Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250
})
.setTween(part5)
.addTo(controller);

var part6 = new TweenMax.from("#part6", 1, {
    x: "100vw",
    ease: Power2.easeOut
});

var part6Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 3*this.offset
})
.setTween(part6)
.addTo(controller);

var part7 = new TweenMax.from("#part7", 1, {
    x: "100vw",
    ease: Power2.easeOut
});

var part7Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 4*this.offset
})
.setTween(part7)
.addTo(controller);

var part8 = new TweenMax.from("#part8", 1, {
    x: "-100vw",
    y: "200%",
    rotation: 4,
    ease: Power2.easeOut
});

var part8Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 5*this.offset
})
.setTween(part8)
.addTo(controller);

var part9 = new TweenMax.from("#part9", 1, {
    x: "-100vw",
    y: "300%",
    rotation: 4,
    ease: Power2.easeOut
});

var part9Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 5*this.offset
})
.setTween(part9)
.addTo(controller);

var part10 = new TweenMax.from("#part10", 1, {
    x: "100vw",
    y: "600%",
    rotation: -12,
    ease: Power2.easeOut
});

var part10Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 6*this.offset
})
.setTween(part10)
.addTo(controller);

var part11 = new TweenMax.from("#part11", 1, {
    x: "-100vw",
    y: "800%",
    rotation: 12,
    ease: Power2.easeOut
});

var part11Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 7*this.offset
})
.setTween(part11)
.addTo(controller);

var part12 = new TweenMax.from("#part12", 1, {
    x: "100vw",
    y: "500%",
    rotation: -16,
    ease: Power2.easeOut
});

var part12Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 8*this.offset
})
.setTween(part12)
.addTo(controller);

var part13 = new TweenMax.from("#part13", 1, {
    x: "100vw",
    y: "400%",
    rotation: -24,
    ease: Power2.easeOut
});

var part13Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 9*this.offset
})
.setTween(part13)
.addTo(controller);

var part14 = new TweenMax.from("#part14", 1, {
    x: "-100vw",
    y: "400%",
    rotation: 24,
    ease: Power2.easeOut
});

var part14Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 10*this.offset
})
.setTween(part14)
.addTo(controller);

var part15 = new TweenMax.from("#part15", 1, {
    x: "-100vw",
    y: "400%",
    rotation: 24,
    ease: Power2.easeOut
});

var part15Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 11*this.offset
})
.setTween(part15)
.addTo(controller);

var part16 = new TweenMax.from("#part16", 1, {
    x: "100vw",
    y: "400%",
    rotation: 24,
    ease: Power2.easeOut
});

var part16Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 12*this.offset
})
.setTween(part16)
.addTo(controller);

var part17 = new TweenMax.from("#part17", 1, {
    x: "-100vw",
    y: "400%",
    rotation: 24,
    ease: Power2.easeOut
});

var part17Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 13*this.offset
})
.setTween(part17)
.addTo(controller);

var part181 = new TweenMax.from("#part18-1", 1, {
    x: "100vw",
    y: "800%",
    rotation: -32,
    ease: Power2.easeOut
});

var part181Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 14*this.offset
})
.setTween(part181)
.addTo(controller);

var part182 = new TweenMax.from("#part18-2", 1, {
    x: "100vw",
    y: "800%",
    rotation: -32,
    ease: Power2.easeOut
});

var part182Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 15*this.offset
})
.setTween(part182)
.addTo(controller);

var part191 = new TweenMax.from("#part19-1", 1, {
    x: "-100vw",
    y: "800%",
    rotation: 32,
    ease: Power2.easeOut
});

var part191Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 16*this.offset
})
.setTween(part191)
.addTo(controller);

var part192 = new TweenMax.from("#part19-2", 1, {
    x: "-100vw",
    y: "800%",
    rotation: 32,
    ease: Power2.easeOut
});

var part192Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 18*this.offset
})
.setTween(part192)
.addTo(controller);

var part20 = new TweenMax.from("#part20", 1, {
    x: "100vw",
    y: "800%",
    rotation: -32,
    ease: Power2.easeOut
});

var part20Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 19*this.offset
})
.setTween(part20)
.addTo(controller);

var part21 = new TweenMax.from("#part21", 1, {
    x: "-100vw",
    y: "800%",
    rotation: 32,
    ease: Power2.easeOut
});

var part21Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 20*this.offset
})
.setTween(part21)
.addTo(controller);

var part22 = new TweenMax.from("#part22", 1, {
    x: "100vw",
    y: "800%",
    rotation: -32,
    ease: Power2.easeOut
});

var part22Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 21*this.offset
})
.setTween(part22)
.addTo(controller);

var part23 = new TweenMax.from("#part23", 1, {
    x: "-100vw",
    y: "2400%",
    rotation: 32,
    ease: Power2.easeOut
});

var part23Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 22*this.offset
})
.setTween(part23)
.addTo(controller);

var part24 = new TweenMax.from("#part24", 1, {
    x: "100vw",
    y: "1000%",
    rotation: -32,
    ease: Power2.easeOut
});

var part24Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 23*this.offset
})
.setTween(part24)
.addTo(controller);

var part25 = new TweenMax.from("#part25", 1, {
    x: "-100vw",
    y: "1000%",
    rotation: 32,
    ease: Power2.easeOut
});

var part25Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 24*this.offset
})
.setTween(part25)
.addTo(controller);

var part26 = new TweenMax.from("#part26", 1, {
    x: "100vw",
    y: "1000%",
    rotation: -32,
    ease: Power2.easeOut
});

var part26Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 25*this.offset
})
.setTween(part26)
.addTo(controller);

var part27 = new TweenMax.from("#part27", 1, {
    x: "-100vw",
    y: "1600%",
    rotation: 32,
    ease: Power2.easeOut
});

var part27Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 26*this.offset
})
.setTween(part27)
.addTo(controller);

var part28 = new TweenMax.from("#part28", 1, {
    x: "100vw",
    y: "1600%",
    rotation: -32,
    ease: Power2.easeOut
});

var part28Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 33*this.offset
})
.setTween(part28)
.addTo(controller);

var part291 = new TweenMax.from("#part29-1", 1, {
    x: "-100vw",
    y: "1600%",
    rotation: 32,
    ease: Power2.easeOut
});

var part291Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 32*this.offset
})
.setTween(part291)
.addTo(controller);

var part292 = new TweenMax.from("#part29-2", 1, {
    x: "-100vw",
    y: "1600%",
    rotation: 32,
    ease: Power2.easeOut
});

var part292Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 31*this.offset
})
.setTween(part292)
.addTo(controller);

var part30 = new TweenMax.from("#part30", 1, {
    x: "100vw",
    y: "1600%",
    rotation: -32,
    ease: Power2.easeOut
});

var part30Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 34*this.offset
})
.setTween(part30)
.addTo(controller);

var part311 = new TweenMax.from("#part31-1", 1, {
    x: "-100vw",
    y: "3200%",
    rotation: 32,
    ease: Power2.easeOut
});

var part311Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 30*this.offset
})
.setTween(part311)
.addTo(controller);

var part312 = new TweenMax.from("#part31-2", 1, {
    x: "-100vw",
    y: "3200%",
    rotation: 32,
    ease: Power2.easeOut
});

var part312Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 29*this.offset
})
.setTween(part312)
.addTo(controller);

var part321 = new TweenMax.from("#part32-1", 1, {
    x: "-100vw",
    y: "3200%",
    rotation: 32,
    ease: Power2.easeOut
});

var part321Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 28*this.offset
})
.setTween(part321)
.addTo(controller);

var part322 = new TweenMax.from("#part32-2", 1, {
    x: "-100vw",
    y: "3200%",
    rotation: 32,
    ease: Power2.easeOut
});

var part322Scene = new ScrollMagic.Scene({
    triggerElement: "#parts",
    duration: 250,
    offset: 27*this.offset
})
.setTween(part322)
.addTo(controller);

