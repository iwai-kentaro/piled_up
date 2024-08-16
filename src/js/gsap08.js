window.addEventListener("DOMContentLoaded", function () {
    //スクロールトリガープラグインを読み込んでおく
    //trigger
    //marker
    //scrub true
    //ピン留め
    //endTrigger
    //coleバック関数
    //同じクラスを操作
    //start end デフォルト値
    //timeline
    //animation
    //この機能があったらいいなってものは調べると意外とある
    gsap.to(".box",{
        x:300,
        duration:.5,
        // rotation:360,
        scrollTrigger:{
            trigger:".box", // 引き金
            start:"top 70%",//[target][window]
            end:"top 30%",
            // pin:true,
            // once:true,
            // toggleActions: "play none none reverse",
            // scrub:true ,
            // toggleClass:{
            //     targets:".box,.box2",
            //     className: "is-active",
            // } ,
            scrub:true,
            endTrigger:".box2" ,
            onUpdate:(self)=>{
                console.log(self.direction);//アニメーションの進捗りつ
                // if(self.direction === 1){
                // }                
            },
            markers: {
                startColor:"black",

            },
        }
    });
    //一つ一つの要素に対して
    const boxes = document.querySelectorAll('.box3');
    console.log(boxes);
    boxes.forEach((box)=>{
        console.log(box);
        
        gsap.to(box,{autoAlpha:0,
            scrollTrigger:{
                trigger:box,
                start:"top center",
                markers:true,
            }
        })
    })

    //timeline
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:".box4",
            start:"top center",
            end:"bottom 20%",
            markers:true,
            scrub:true
        }
    });
    tl
    .to(".box4",{x:200})
    .to(".box4",{y:200})
    .to(".box4",{x:-200})
    .to(".box4",{y:0})
    .to(".box4",{x:0})
});