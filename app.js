function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotive()
// --------------play animation-----------------------------
let video = document.querySelector('.video video');
let play = document.querySelector('.play');
video.addEventListener('mousemove',function (decs) {
    gsap.to(play, {
        left: decs.x - 50,
        top: decs.y - 70,
      });
})
video.addEventListener('mouseenter',function () {
    gsap.to(play, {
        opacity:1,
        scale:1.2,
        });
})
video.addEventListener('mouseleave',function () {
    gsap.to(play, {
        opacity:0,
        scale:0,
        });
})
video.muted = true
video.addEventListener('click',function(){
    if (video.muted ===  true) {
        video.muted = false;
    }
     else {
        video.muted = true;
    }
})

// -----------------------Product-Cursor---------------------------
let cursor = document.querySelector('.cursor');
document.addEventListener('mousemove',function (dets) {
    gsap.to(cursor, {
        left: dets.x - 90,
        top: dets.y - 90,
      });
})
let products = document.querySelectorAll('.products');
products.forEach(function(product) {
    product.addEventListener('mousemove',function(){
        gsap.to(cursor, {
            transition: 'all ease 0.1s',
            scale: 1,
            opacity: 1
          });
    })
    product.addEventListener('mouseleave',function(){
        gsap.to(cursor, {
            transition: 'all ease 0.1s',
            scale: 0,
            opacity: 0
          });
    })
});

// -----------------------Product-Cursor-Colors---------------------------

let product1 = document.querySelector('#product1');
product1.addEventListener('mousemove',function(){
    gsap.to(cursor, {
        backgroundColor :'#f7f2ec',
      });
})

let product2 = document.querySelector('#product2');
product2.addEventListener('mousemove',function(){
    gsap.to(cursor, {
        backgroundColor :'#ecececc',
      });
})

let product3 = document.querySelector('#product3');
product3.addEventListener('mousemove',function(){
    gsap.to(cursor, {
        backgroundColor :'#EDE6E6',
      });
})

let product4 = document.querySelector('#product4');
product4.addEventListener('mousemove',function(){
    gsap.to(cursor, {
        backgroundColor :'#d6e0e0',
      });
})

// ----------------------------------------------------------



// -------------------------navbar-Animate---------------------------------

gsap.to('.logo img', {
    transform:'translate(0%,-100%)',
    scrollTrigger: {
        trigger: ".logo", 
        scroller: ".main",
        start: "top 5%",
      end: "top -100%",
      scrub: true,
    //   markers:true,
    }
})
gsap.to('.links', {
    transform:'translate(0%,-10vw)',
    scrollTrigger: {
        trigger: ".course", 
        scroller: ".main",
        start: "top 32%",
      scrub: true,
    }
})

// ----------------------------Gsap-Timeline------------------------------
let tl = gsap.timeline({
    delay:0.3,
})
tl
.from('.change', {
    y:170,
    opacity:0,
    duration:.4,
})
.from('.head', {
    y:160,
    opacity:0,
    duration:.3,
    stagger: 0.2,
})
.from('.head1', {
    y:160,
    opacity:0,
    duration:.4,
    stagger: 0.2,
})
.from('.video video', {
    y:100,
    opacity:0,
    duration:.3,
})


// ----------------------------Gsap-scroll------------------------------
gsap.from('.shop', {
    opacity:0,
    scale:1.1,
    duration:.3,
    scrollTrigger: {
        trigger: ".video video", 
        scroller: ".main",
        start: "center 25%",
    }
})
gsap.from('.tags', {
    opacity:0,
    y:10,
    duration:.3,
    scrollTrigger: {
        trigger: ".shop", 
        scroller: ".main",
        start: "top 25%",
    }

})
gsap.from('.bel-h2', {
    opacity:0,
    y:100,
    duration:.3,
    scrollTrigger: {
        trigger: ".shop", 
        scroller: ".main",
        start: "center 20%",
    }
})
gsap.from('.bel-p p', {
    opacity:0,
    y:100,
    stagger:0.3,
    duration:.3,
    scrollTrigger: {
        trigger: ".shop", 
        scroller: ".main",
        start: "center 20%",
    }
})
gsap.from('.products', {
    opacity:0,
    scale:0,
    stagger:0.2,
    ease:'power2.inout',
    duration:.4,
    scrollTrigger: {
        trigger: ".believe", 
        scroller: ".main",
        start: "top 20%",
    }
})
gsap.from('.test-q h1', {
    opacity:0,
    y:100,
    duration:.4,
    scrollTrigger: {
        trigger: ".gap0", 
        scroller: ".main",
        start: "top 60%",
    }
})
gsap.from('.test-button button', {
    opacity:0,
    duration:.4,
    scrollTrigger: {
        trigger: ".gap0", 
        scroller: ".main",
        start: "bottom 35%",
    }
})
gsap.from('.test-text p', {
    opacity:0,
    y:150,
    duration:.4,
    scrollTrigger: {
        trigger: ".gap0", 
        scroller: ".main",
        start: "bottom 22%",
    }
})
gsap.from('.impact-img', {
    opacity:0,
    scale:1.15,
    duration:.3,
    scrollTrigger: {
        trigger: ".testamonial", 
        scroller: ".main",
        start: "center 25%",
    }
})
gsap.from('.impact-text h3', {
    opacity:0,
    scale:1.1,
    duration:.3,
    scrollTrigger: {
        trigger: ".testamonial", 
        scroller: ".main",
        start: "center 25%",
    }
})
gsap.from('.impact-p p', {
    opacity:0,
    y:100,
    duration:.3,
    stagger:0.2,
    scrollTrigger: {
        trigger: ".testamonial", 
        scroller: ".main",
        start: "center 15%",
    }
})
