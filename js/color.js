var controller = new ScrollMagic.Controller();

var backgroundColor = new TweenMax.to(".bg-beige-to-black", 1, {
    backgroundColor: "#000",
    ease: Power1.easeOut
});

var backgroundColorScene = new ScrollMagic.Scene({
    triggerElement: "#work",
    duration: 256
})
.setTween(backgroundColor)
.addTo(controller);

var textColor = new TweenMax.to(".black-to-beige", 1, {
    color: "#f7eee0",
    ease: Power1.easeOut
});

var textColorScene = new ScrollMagic.Scene({
    triggerElement: "#work",
    duration: 256
})
.setTween(textColor)
.addTo(controller);


var reverseBackgroundColor = new TweenMax.to(".bg-beige-to-black", 1, {
    backgroundColor: "#f7eee0",
    ease: Power1.easeOut
});

var reverseBackgroundColorScene = new ScrollMagic.Scene({
    triggerElement: "#rental",
    duration: 256
})
.setTween(reverseBackgroundColor)
.addTo(controller);

var reverseTextColor = new TweenMax.to(".black-to-beige", 1, {
    color: "#000",
    ease: Power1.easeOut
});

var reverseTextColorScene = new ScrollMagic.Scene({
    triggerElement: "#rental",
    duration: 256
})
.setTween(reverseTextColor)
.addTo(controller);

