const hoody = document.querySelector(".right_wrap");
const hodHei = hoody.offsetTop;
const video = document.querySelector(".video");
const videoHei = video.offsetTop;
const model = document.querySelector(".model");
const modelHei = model.offsetTop;
const items = document.querySelector(".items");
const items_Hei = items.offsetTop;
window.addEventListener('DOMContentLoaded',function(){
    ScrollTrigger.name = "ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);

    // 로드 bg
    let hood = gsap.timeline({
        scrollTrigger: {
            trigger: ".main",
            scrub: true,
            pin: false,
            start: `${hodHei}`,
            end: "3000",
            ease: "power3", 
            markers:false
        }
    });
    hood.to(".hoody_item", {
        rotation:0,x:0 ,y:0,width:322, duration:1, scale:1.7
    },0);
    hood.to(".hoody_shadow", {
        rotation:0,x:0 ,y:0,width:322, duration:1, scale:1.7
    },0);

    let video = gsap.timeline({
        scrollTrigger: {
            trigger: ".main",
            scrub: true,
            pin: false,
            start: `${videoHei - 600}`,
            end: `${modelHei - 600}`,
            ease: "power3", 
            markers:false
        }
    });
    video.to(".video_1", {
        rotation:0,x:0 ,y:0, duration:1, scale:1
    },0);
    video.to(".video_2", {
        rotation:0,x:0 ,y:0, duration:1, scale:1
    },0);
    video.to(".video_3", {
        rotation:0,x:0 ,y:0, duration:1, scale:1
    },0);

    let line = gsap.timeline({
        scrollTrigger: {
            trigger: "items",
            scrub: true,
            pin: false,
            start: `${items_Hei - 550}`,
            end: `${items_Hei + 1000}`,
            ease: "power3", 
            markers:false
        }
    });
    line.to(".line_text div", {
        rotation:0,x:-1500 ,y:300, duration:2
    },0);
    

    const intro_1 = document.querySelector(".intro_1");
    const intro_2 = document.querySelector(".intro_2");
    const intro_3 = document.querySelector(".intro_3");
    
    const invisi = document.querySelector(".txt_2 .invisi");
    const invisiHei = invisi.offsetTop;


    window.addEventListener("scroll",function(){
        if(window.scrollY > invisiHei - 200){
            intro_1.classList.add('active');
            intro_2.classList.add('active');
            intro_1.classList.remove('remove1');
            intro_2.classList.remove('remove1');
        }else if(window.scrollY < invisiHei - 200 && intro_1.classList[1] == 'active'){
            intro_1.classList.add('remove1');
            intro_2.classList.add('remove1');
            intro_1.classList.remove('active');
            intro_2.classList.remove('active');
            intro_2.classList.remove('active2');
            intro_2.classList.remove('remove2');
        }
     
        if(window.scrollY > invisiHei+window.innerHeight/1.2){
            intro_3.classList.add('active');
            intro_3.classList.remove('remove1')
            intro_2.classList.add('remove2');
            intro_2.classList.remove('active2');
        }else if(intro_3.classList[1] == 'active'){
            intro_3.classList.remove('active');
            intro_3.classList.add('remove1');
            intro_2.classList.remove('remove2');
            intro_2.classList.add('active2');
        }
    })
    

})
