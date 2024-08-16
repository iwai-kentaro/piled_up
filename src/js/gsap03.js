window.addEventListener("DOMContentLoaded", function () {
       //   ease
       gsap.to(".day2__12", {
        x: 200,
        repeat: -1,
        yoyo: true,
        repeatDelay: 1,
        ease: "bounce.out",
        duration: 1,
        delay: .3
    });
    // stagger
    gsap.to(".day2__13", {
        x: 300,
        stagger: {
            each: .5,
            from: "end",
        },
        repeat: -1,
        yoyo: true,
        duration: 1,
        delay: 1
    });
});