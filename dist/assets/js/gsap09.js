window.addEventListener("DOMContentLoaded", function () {
    gsap.config({nullTargetWarn: false})
    //scrollTriggerの設定
    //matchMedia
    //.add
    const mm = gsap.matchMedia();

    //768px以上
    mm.add("(min-width:768px)",()=>{
        //３つのカードを出現させる
        gsap.fromTo(".card",{autoAlpha:0,y:20},{autoAlpha:1,y:0,stagger:.05,
            scrollTrigger:{
                trigger:".cardox",
                markers:true,
                start:"center bottom",
            }
        })
    });
    //767pxのとき
    mm.add("(max-width:767px)",()=>{
        const cards = document.querySelectorAll(".card");
        cards.forEach((card)=> {
            gsap.fromTo(card,{autoAlpha:0,y:20},{y:0,autoAlpha:1,
                scrollTrigger:{
                    trigger:card,
                    markers:true,
                    start:"center bottom",
                }
            })
        });
    })
});