window.addEventListener("DOMContentLoaded", function () {
    gsap.config({nullTargetWarn: false})

    // ドロワーメニュー
    // コツ
    // 必要なのは今まで習ったもの
    // 逆算して考える
    // 何を実現させたいのか？必要な機能を考える　叶えるための記述
    // クリック判定
    // 文字をしたから登場
    // ストライプはspanで
    const btn = document.querySelector(".btn");
    btn.addEventListener("click",function(){
        console.log("click");
        
    })
});