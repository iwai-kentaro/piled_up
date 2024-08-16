window.addEventListener("DOMContentLoaded", function () {

    gsap.to(".day2__02", { rotateZ: 180, duration: 10, delay: .3 });
    gsap.to(".day2__03", { scale: 2, duration: 10, delay: .3 });
    gsap.to(".day2__04", { clipPath: "inset(0 100% 0 0)", duration: 10, delay: .3 });

    gsap.to(".day2__05", { filter: "blur(16px)", duration: 10, delay: .3 });

    const hako = ["blur(15px)", "grayscale(1)"]
    gsap.to(".day2__06", { filter: hako[1], duration: 10, delay: .3 });

    gsap.to(".day2__07", { display: "none", duration: 10, delay: .3 });
    gsap.to(".day2__08", { backgroundColor: "red", duration: 10, delay: .3 });
    gsap.to(".day2__09", { autoAlpha: 0.5, duration: 10, delay: .3 });
    transitionは使わない
    gsap.to(".day2__10", { autoAlpha: 0, repeat: 1, yoyo: true, duration: 1, delay: .3 });
    yoyo
    gsap.to(".day2__11", {
        autoAlpha: 0,
        repeat: -1,
        yoyo: true,
        repeatDelay: 1,
        duration: 1,
        delay: .3
    });
});