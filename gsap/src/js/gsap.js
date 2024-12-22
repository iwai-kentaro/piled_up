window.addEventListener("DOMContentLoaded", function () {
    gsap.config({nullTargetWarn: false})
    gsap.to(".box",{x:100,delay: .5});
    gsap.fromTo(".box , .box2",{x:600},{x:500, delay:1})
    const tl = gsap.timeline({
        defaults: {
            duration: 1,
        }
    });
    tl
        .to(".day1", { x: 0, delay: .5 })
        .to(".day1", { y: 500 })
        .to(".day1", { x: 500 })
        .to(".day1", { y: 200 })
        .add(function () {
            console.log("ok");

        })




 

  

  




   

   
  



    //5日目




    //6日目



    //7日目



    //8日目




    //9日目



    //10日目
});