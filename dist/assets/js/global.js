window.addEventListener("DOMContentLoaded", function () {

    //1日目導入まで
    // Gulp一から導入
    //2日目


    // gsap.to(".box",{x:100,delay: .5});
    // gsap.fromTo(".box , .box2",{x:600},{x:500, delay:1})
    const tl = gsap.timeline({
        defaults:{
            duration:1,
        }
    });
        tl
            .to(".box", { x: 0, delay: .5 })
            .to(".box", { y: 500 })
            .to(".box", { x: 500 })
            .to(".box", { y: 200 })
            .add(function(){
                console.log("ok");

            })
    



    //３日目



    //4日目




    //5日目




    //6日目



    //7日目



    //8日目




    //9日目



    //10日目
});