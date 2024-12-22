window.addEventListener("DOMContentLoaded", function () {
    //スクロールトリガー関連
    //scrollTo:{x:目的地,y:目的地}
    //目的地には数値もオブジェクトも指定できる
    // 
    //注意点:scroll-behaviorと併用しない
    //ヘッダーの高さも考慮できる
    //要点
    //aタグの範囲
    //通常のJSでも同じようなことが実はできる
    //e.preventDefault();
    // →デフォルトのブラウザスクロールアニメーションを実行するためです
    //document window
    //まずは素のJSでスムーススクロールをしてみる

    const day3List = document.querySelector(".day3-list"); const anchors = document.querySelectorAll(".day3-list li a");

    anchors.forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            // window.scrollTo();
            e.preventDefault();
            // let element = document.querySelector(anchor.getAttribute("href"));
            // console.log(element.offsetTop);
            // window.scrollTo({
            //     top:element.offsetTop,
            //     behavior:"smooth",
            // })
            //GSAP
            gsap.to(window, {
                duration: 1,
                ease: "power2.out",
                scrollTo: {
                    y: anchor.getAttribute("href"),
                    autoKill:true
                }
            })
        });
    });

});