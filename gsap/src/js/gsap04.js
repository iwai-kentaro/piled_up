window.addEventListener("DOMContentLoaded", function () {
    gsap.config({nullTargetWarn: false})
    // 知ってたら便利
    //utils関数の使い方

    let translateX = gsap.utils.random(0, 500, true);
    gsap.to(".day2__15", {
        x: translateX,
        repeat: -1,
        yoyo: true,
        duration: 1,
        delay: 1
    });

    // toArray
    let boxes = gsap.utils.toArray(".day2__16");
    console.log(boxes);
    gsap.utils.toArray(".day2__16").forEach((target) => {
        gsap.to(target, { x: translateX(), delay: 1, yoyo: true, repeat: -1 });
    });
});