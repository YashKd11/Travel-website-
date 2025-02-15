const tl = gsap.timeline();
const exp_right_btn = document.querySelector('.page3 .right-btn');
const exp_left_btn = document.querySelector('.page3 .left-btn');
const b_image = document.querySelector(".page1 img");
const mask = document.querySelector('.page1 .landing_page');
const innerDisk = document.querySelector('.disk .innerDisk');
const logo = document.querySelector('.nav img');
const slider = [...document.querySelectorAll('.card-item')];
const reviews = [...document.querySelectorAll('.review-card')];
var cnt = 1;
var exp_cnt = 1;


function prevbutton(){
    if( cnt <= 1) return;
    cnt--;
    for( let i = 0; i < reviews.length ; i++){
        gsap.to(reviews[i],{
            x: "+=104%",
            duration: 0.5
        })
    }
}

function nxtbutton(){
    if( cnt >= reviews.length) return;
    cnt++;
    for( let i = reviews.length; i >= 0 ; i--){
        gsap.to(reviews[i],{
            x: "-=104%",
            duration: 0.5
        })
    }
}

exp_left_btn.addEventListener('click',()=>{
    if( exp_cnt <= 1) return;
    exp_cnt--;
    for(let i = 0; i <= slider.length; i++){
        gsap.to(slider[i],{
            x: "+=100%",
            duration: 0.1,
            ease: "power0.in"
        })
    }
})

exp_right_btn.addEventListener('click',()=>{
    if( exp_cnt >= 4) return;
    exp_cnt++;
    for(let i = 0; i <= slider.length; i++){
        gsap.to(slider[i],{
            x: "-=100%",
            duration: 0.1,
            ease: "power0.in"
        })
    }
})


gsap.from('.clouds-mask',{
    y: "25%",
    ease: "power0.out",
    duration: 0.8,
    scrollTrigger: {
        trigger: ".clouds-mask",
        scroller: "body",
        start : "top 70%",
        end: "top 30%",
        scrub: 1.2
    }
})

gsap.from('.form em h1',{
    scale: 1.4,
    opacity : 0.3,
    duration : 0.5,
    scrollTrigger : {
        scroller: "body",
        trigger : ".form",
        scrub : 0.7,
        start : "top 70%",
        end : "top 30%"
    }
})

mask.addEventListener('mousemove',(e)=>{
    let x = e.clientX;
    let y = e.clientY;
    
    b_image.style.transform = `translate(${x/1500}%,${y/1500}%)`;
})

window.addEventListener('scroll',()=>{
    var nav = document.querySelector('.page1 .landing_page .nav');
    nav.classList.toggle('sticky',window.scrollY > 200);

    (window.scrollY > 200 ? logo.src = "images/logo2.png" : logo.src = "images/logo.png")
})

gsap.to('.disk',{
    opacity: 0,
    ease: "bounce.out",
    scrollTrigger:{
        trigger: ".disk",
        scroller: "body",
        start: "top 50%",
        end: "top 10%",
        scrub: 1
    }
})

gsap.from('.content,.disk,.innerDisk,.innerDisk2',{
    opacity: 0,
    scale: 1.5,
    duration: 0.5,
    delay: 0.2, 
    stagger: 0.2
})

gsap.to('.frontLayer',{
    y:"10%",
    scrollTrigger: {
        scroller: "body",
        trigger: ".frontLayer",
        start: "top 15%",
        end: "top 0%",
        scrub: 1.2
    }
})
