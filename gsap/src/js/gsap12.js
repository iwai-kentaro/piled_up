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

    //開いているときに閉じている時の条件分岐
    const btn = document.querySelector(".btn");
    const menuTL = gsap.timeline();
    btn.addEventListener("click",function(){
        // 閉じている時
        if(!btn.classList.contains("is-active")){
            menuTL
            .fromTo(".stripe",{y:"-100%"},{y:"0%",stagger:.05})
            .fromTo(".menu__item > a",{y:"100%"},{y:"0%"},"-=.5")
            add(()=>{
                btn.classList.add("is-active");
            })
        }else{
            gsap.fromTo(".menu__item > a",{y:"0%"},{y:"100%"}),
            gsap.fromTo(".stripe",{y:"0%"},{y:"100%",stagger:.05})
            btn.classList.remove("is-active");
        }
    })
});