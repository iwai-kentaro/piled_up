window.addEventListener("DOMContentLoaded", function () {
    //scrollTriggerの設定
    //matchMedia
    //.add
    const mm = gsap.matchMedia();

    //768px以上
    mm.add("(min-width:768px)", () => {
        //３つのカードを出現させる
        gsap.fromTo(".card", { autoAlpha: 0, y: 20 }, {
            autoAlpha: 1, y: 0, stagger: .05,
            scrollTrigger: {
                trigger: ".cardox",
                markers: true,
                start: "center bottom",
            }
        })


    });
    //767pxのとき
    mm.add("(max-width:767px)", () => {
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
            gsap.fromTo(card, { autoAlpha: 0, y: 20 }, {
                y: 0, autoAlpha: 1,
                scrollTrigger: {
                    trigger: card,
                    markers: true,
                    start: "center bottom",
                }
            })
        });
    })

    const markers = document.querySelectorAll(".js-marker");
    // markers.forEach((marker) => {
    //     gsap.to(marker, {
    //         backgroundSize: "100% 100%",
    //         scrollTrigger: {
    //             trigger: marker,
    //             start: "center 80%",
    //         }
    //     })
    // });

    //registerEffect
    //アニメーションを登録しただけ
    gsap.registerEffect({
        name:"markerAnimation",
        effect: (target,config)=>{
            gsap.to(target,{
                backgroundSize:config.backgroundSize,
                duration:config.duration,
                scrollTrigger:{
                    trigger:target,
                    start:config.start,
                }
            })
        },
        //初期状態
        defaults:{
            backgroundSize:"100% 100%",
            duration:1,
            start:"center 80%"
        }
    })
    markers.forEach((marker,i)=>{
        if(i ==1 || i ==2){
            gsap.effects.markerAnimation(marker,{backgroundSize:"100% 80%"})
        }else{
            gsap.effects.markerAnimation(marker,{})
        }
    })
});