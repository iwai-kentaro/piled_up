window.addEventListener("DOMContentLoaded", function () {
     //アニメーション制御
    // ボタンあり
    // 必要なクリック判定→javascript
    // 押されたボタンに応じてアニメーション
    // GSAP
    // 特定のタイミングで
    // addEventListener()
    // var let const を使う
    // DOMContentLoaded
    const list00 = document.querySelector(".list__00");
    const list01 = document.querySelector(".list__01");
    const list02 = document.querySelector(".list__02");
    const list03 = document.querySelector(".list__03");
    const list04 = document.querySelector(".list__04");
    const list05 = document.querySelector(".list__05");

    console.log(list00);

    const animation = gsap.to(".day2__18", { rotate: 360, duration: 2 })
    animation.pause();

    list00.addEventListener("click", function () {
        animation.play();
    })
    list01.addEventListener("click", function () {
        animation.pause();
    })
    list02.addEventListener("click", function () {
        animation.resume();
    })
    list03.addEventListener("click", function () {
        animation.reverse();
    })
    list04.addEventListener("click", function () {
        animation.restart();
    })
    list05.addEventListener("click", function () {
        animation.kill();
    })

});