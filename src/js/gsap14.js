window.addEventListener("DOMContentLoaded", function () {
    gsap.config({nullTargetWarn: false})

    let btn = document.querySelector(".header-menu-trigger");
    let headerMenu = document.querySelector(".header-menu");
    let windowHeight = window.innerHeight;
    let menuTL = gsap.timeline();
    let scale = windowHeight;

    btn.addEventListener("click",function(){
        // 開いている時
        if(btn.classList.contains("is-active")){
            menuTL
            .to(".circle-bg",{scale:0})
            .add(()=>{
                btn.classList.remove("is-active")
                headerMenu.classList.remove("is-active")
            })
        }else{
            menuTL
            .add(()=>{
                headerMenu.classList.add("is-active")
                btn.classList.add("is-active")
            })
            .to(".circle-bg",{scale:30})
            .fromTo(".header-lists li",{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:0.05,stagger:.025},"+=.3")
        }
        
    })
});