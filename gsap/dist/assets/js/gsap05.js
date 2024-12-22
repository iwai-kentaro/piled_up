window.addEventListener("DOMContentLoaded", function () {
    gsap.config({nullTargetWarn: false})
    // 擬似要素動かしたい
    // 擬似要素はDOM要素ではない
    // カスタムプロパティを作成し使う

    gsap.to(".day2__17", { "--scaleX": 1, delay: 1, duration: 1, yoyo: true, repeat: -1, ease: "power1.inOut" })
});