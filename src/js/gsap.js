window.addEventListener("DOMContentLoaded", function () {
    // gsap.to(".box",{x:100,delay: .5});
    // gsap.fromTo(".box , .box2",{x:600},{x:500, delay:1})
    const tl = gsap.timeline({
        defaults:{
            duration:1,
        }
    });
        tl
            .to(".day1", { x: 0, delay: .5 })
            .to(".day1", { y: 500 })
            .to(".day1", { x: 500 })
            .to(".day1", { y: 200 })
            .add(function(){
                console.log("ok");
                
            })




    //３日目


    gsap.to(".day2__00",{rotateX:180, duration:10, delay:.3});
    gsap.to(".day2__01",{rotateY:180, duration:10, delay:.3});
    gsap.to(".day2__02",{rotateZ:180, duration:10, delay:.3});
    gsap.to(".day2__03",{scale:2, duration:10, delay:.3});
    gsap.to(".day2__04",{clipPath:"inset(0 100% 0 0)", duration:10, delay:.3});

    gsap.to(".day2__05",{filter:"blur(16px)", duration:10, delay:.3});

    const hako =["blur(15px)","grayscale(1)"]
    gsap.to(".day2__06",{filter:hako[1], duration:10, delay:.3});

    gsap.to(".day2__07",{display:"none" , duration:10, delay:.3});
    gsap.to(".day2__08",{backgroundColor:"red", duration:10, delay:.3});
    gsap.to(".day2__09",{autoAlpha:0.5, duration:10, delay:.3});
    // transitionは使わない
    gsap.to(".day2__10",{autoAlpha:0,repeat:1, yoyo: true , duration:1, delay:.3});
    // yoyo
    gsap.to(".day2__11",{
        autoAlpha:0,
        repeat:-1, 
        yoyo: true ,
        repeatDelay:1, 
        duration:1, 
        delay:.3
    });
    // ease
    gsap.to(".day2__12",{
        x:200,
        repeat:-1, 
        yoyo: true ,
        repeatDelay:1, 
        ease:"bounce.out",
        duration:1, 
        delay:.3
    });
    // stagger
    gsap.to(".day2__13",{
        x:300,
        stagger:{
            each:.5,
            from:"end",
        },
        repeat: -1, 
        yoyo: true,
        duration:1,
        delay:1
    });

    // 自己帰属感
    // 自分で操作で聞いている感覚
    // 自然の動き　最初早くて、あとゆっくり
    // easeInOut
    // 
    const custom = CustomEase.create("custom", "0,.1,1,.1");
    gsap.to(".day2__14",{
        x:500,
        ease:custom,
        repeat: -1, 
        yoyo: true,
        duration:1,
        delay:1
    });

    // 知ってたら便利
    //utils関数の使い方

    let translateX = gsap.utils.random(0,500,true);
    gsap.to(".day2__15",{
        x:translateX,
        repeat:-1,
        yoyo:true,
        duration:1,
        delay:1
    });

    // toArray
    // let boxes = gsap.utils.toArray(".day2__16");
    // console.log(boxes);
    gsap.utils.toArray(".day2__16").forEach((target)=>{
        gsap.to(target,{x:translateX(),delay: 1,yoyo:true,repeat:-1});
    });


    // 擬似要素動かしたい
    // 擬似要素はDOM要素ではない
    // カスタムプロパティを作成し使う

    gsap.to(".day2__17",{"--scaleX":1 ,delay:1,duration:1,yoyo:true,repeat:-1,ease:"power1.inOut"})

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

    const animation = gsap.to(".day2__18",{rotate:360,duration:2})
    animation.pause();
    
    list00.addEventListener("click",function(){
        animation.play();
    })
    list01.addEventListener("click",function(){
        animation.pause();
    })
    list02.addEventListener("click",function(){
        animation.resume();
    })
    list03.addEventListener("click",function(){
        animation.reverse();
    })
    list04.addEventListener("click",function(){
        animation.restart();
    })
    list05.addEventListener("click",function(){
        animation.kill();
    })

    //4日目




    //5日目




    //6日目



    //7日目



    //8日目




    //9日目



    //10日目
});