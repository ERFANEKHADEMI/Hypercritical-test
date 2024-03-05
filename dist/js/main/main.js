import MouseFollower from"mouse-follower";import Lenis from"@studio-freight/lenis";import"splitting/dist/splitting.css";import"splitting/dist/splitting-cells.css";import Splitting from"splitting";import{initializeApp}from"firebase/app";import{getDatabase,ref,push,set}from"firebase/database";let midmoon=document.querySelector(".mid-moon"),menuclose=document.querySelector(".action--close"),menuopen=document.querySelector(".action--menuUzi");function open(){midmoon.classList.add("mid-moon--light"),midmoon.classList.remove("mid-moon--dark")}function close(){midmoon.classList.add("mid-moon--dark"),midmoon.classList.remove("mid-moon--light")}function assignLinks(e){for(const t in e)if(e.hasOwnProperty(t)){document.querySelectorAll(t).forEach((o=>{o?o.href=e[t]:console.error(`Elements matching selector ${t} not found.`)}))}}menuopen.addEventListener("click",open),menuclose.addEventListener("click",close),new Promise(((e,t)=>{document.addEventListener("DOMContentLoaded",(function(){fetch("includes/config.json").then((e=>e.json())).then((t=>{assignLinks(t),e()})).catch((e=>{console.error("Error loading config:",e),t(e)}))}))})).then((()=>{})).catch((e=>{console.error("Failed to load configuration or assign links:",e)})),document.addEventListener("DOMContentLoaded",(()=>{let e=document.querySelector(".menuUzi__item-link"),t=e.querySelector(".contact-emoji"),o=gsap.timeline();e.addEventListener("mouseover",(()=>{o.to(t,{duration:1,rotation:-360,repeat:-1,ease:"linear"})})),e.addEventListener("mouseout",(()=>{o.kill()}))}));const lenis=new Lenis({duration:3,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:2,infinite:!1,autoResize:!0});function raf(e){lenis.raf(e),requestAnimationFrame(raf)}lenis.on("scroll",(e=>{})),requestAnimationFrame(raf),gsap.registerPlugin(ScrollTrigger),gsap.registerPlugin(ScrollToPlugin);let select=e=>document.querySelector(e),selectAll=e=>document.querySelectorAll(e);const herolargelogo=select(".hero-largelogo"),heroText=Splitting({target:herolargelogo,by:"words"}),splitchars=selectAll(".split-chars");splitchars.forEach((e=>{Splitting({target:e,by:"chars"})}));let herowords=selectAll(".hero-largelogo [data-word]"),heroSeparator=select(".below-line"),heroMedia=select(".hero-image"),heroimageWrapper=select(".parallax-hero");const showHero=()=>{gsap.timeline({defaults:{ease:"expo.out",delay:.5}}).set(heroimageWrapper,{y:"-60vh"}).addLabel("start").fromTo(heroSeparator,{width:0},{duration:1.75,width:"100%",stagger:.095},"start").fromTo(herowords,{y:"110%"},{delay:0,duration:2.3,y:"0",stagger:.17,ease:"expo.inOut"},"start+=0.28").fromTo(heroMedia,{width:0},{width:"100%",duration:1.5,ease:"expo.inOut",transformOrigin:"50% 50% 0"},"start+=0.7")};function initParallax(){selectAll(".slide").forEach(((e,t)=>{let o=e.querySelector(".parallax-image");gsap.fromTo(o,{y:"-60vh"},{y:"60vh",scrollTrigger:{trigger:e,scrub:!0,start:"top bottom",end:"bottom top",markers:!1},ease:"none"})}))}function scrollTop(){gsap.to(window,{duration:2,scrollTo:{y:"nav"},ease:"power2.inOut"})}function lineTimeline(e){const t=gsap.timeline({defaults:{duration:3,ease:"power3.out"}});return t.fromTo(e,{scaleX:0,opacity:0,transformOrigin:"left left"},{scaleX:1,opacity:1}),t}document.addEventListener("DOMContentLoaded",(function(){showHero(),setTimeout((()=>{initParallax(),scrollTop()}),3e3)})),document.querySelectorAll("[line-trigger]").forEach((function(e){const t=e.getAttribute("line-trigger"),o=lineTimeline(e);ScrollTrigger.create({trigger:t,start:"top 92%",animation:o,onEnter:()=>o.play(),onLeaveBack:()=>o.reverse({duration:6.5})})})),document.addEventListener("DOMContentLoaded",(function(){let e=document.querySelector("#toTop");function t(){(window.scrollY||document.documentElement.scrollTop)>1.2*window.innerHeight?e.style.display="block":e.style.display="none"}t(),window.addEventListener("scroll",t),e.addEventListener("click",(function(){gsap.to(window,{duration:2,delay:0,scrollTo:{y:".hero-main"},ease:e=>Math.min(1,1.001-Math.pow(2,-10*e))})}))})),document.addEventListener("DOMContentLoaded",(function(){function e(){if(innerWidth>767){new MouseFollower}}e(),window.addEventListener("res",e)}));const accordionItems=document.querySelectorAll("details");accordionItems.forEach((e=>{e.addEventListener("click",(t=>{accordionItems.forEach((t=>{t!=e&&t.removeAttribute("open")}))}))}));let elephant=select(".c-elephant_himself"),elephant_wrapper=select(".elephant-boundary");elephant_wrapper.addEventListener("mouseenter",(()=>{new MouseFollower({el:elephant,container:elephant_wrapper,speed:22.5})})),document.addEventListener("DOMContentLoaded",(()=>{gsap.registerPlugin(ScrollTrigger);const e=gsap.utils.toArray(".white-section");var t=document.querySelector(".top-arrow-wrapper"),o=document.querySelector(".top-arrow-path");function r(){o.style.stroke="var(--color-bg)",t.style.fill="var(--color-black)"}function n(){o.style.stroke="var(--color-black)",t.style.fill="var(--color-bg)"}e.forEach(((e,t)=>{gsap.timeline({scrollTrigger:{trigger:e,id:t+1,start:"top 40%",endtrigger:e,end:"bottom 10%",scrub:!0,onEnter:()=>n(),onLeave:()=>r(),onEnterBack:()=>n(),onLeaveBack:()=>r()}})}))}));import{Item}from"./code-anime/item";[...document.querySelectorAll(".grid-itemz > .grid__item-img")].forEach((e=>new Item(e)));let worldvideoWrapper=select(".global-video"),worldvideo=select("#video-background");gsap.registerPlugin(ScrollTrigger);const animateVideo=gsap.timeline({scrollTrigger:{trigger:worldvideoWrapper,start:"top bottom",end:"top top",scrub:!0,markers:!1,toggleActions:"play none none reverse"}});animateVideo.fromTo(worldvideo,{scaleX:.9,borderRadius:"45px"},{scaleX:1,borderRadius:"0px"});const playvideotl=gsap.timeline({scrollTrigger:{trigger:worldvideo,start:"top bottom",end:"bottom bottom",scrub:!0,onEnter:()=>{worldvideo.paused&&worldvideo.play().catch((e=>{"NotAllowedError"===e.name?console.log("Play request was interrupted by a pause call."):console.error("An unexpected error occurred:",e)}))},onLeave:()=>{worldvideo.paused||worldvideo.pause()},onEnterBack:()=>{worldvideo.paused&&worldvideo.play().catch((e=>{"NotAllowedError"===e.name?console.log("Play request was interrupted by a pause call."):console.error("An unexpected error occurred:",e)}))},onLeaveBack:()=>{worldvideo.paused||worldvideo.pause()}}});document.addEventListener("DOMContentLoaded",(function(){const e=select(".carousel"),t=select(".-prev"),o=select(".-next");let r=0;function n(t){const o=e.children[0].offsetWidth,n=(e.offsetWidth,e.children.length);"next"===t?r=(r+1)%n:"back"===t&&(r=(r-1+n)%n),e.style.transform=`translateX(-${r*o}px)`}t.addEventListener("click",(function(){n("back")})),o.addEventListener("click",(function(){n("next")}))}));const firebaseConfig={apiKey:process.env.FIREBASE_API_KEY,authDomain:process.env.FIREBASE_AUTH_DOMAIN,databaseURL:process.env.FIREBASE_DATABASE_URL,projectId:process.env.FIREBASE_PROJECT_ID,storageBucket:process.env.FIREBASE_STORAGE_BUCKET,messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID,appId:process.env.FIREBASE_APP_ID,measurementId:process.env.FIREBASE_MEASUREMENT_ID},app=initializeApp(firebaseConfig),database=getDatabase(app);document.getElementById("consultationForm").addEventListener("submit",(function(e){e.preventDefault();var t=document.getElementById("message").value,o=document.getElementById("budget").value,r=document.getElementById("consultationType").value,n=document.getElementById("email").value,a=document.getElementById("yourname").value,i=push(ref(database,"consultations"));set(i,{name:a,message:t,budget:o,consultationType:r,email:n,date:(new Date).toISOString()}),alert("Your information has been submitted successfully!")}));let checkboxes=document.querySelectorAll('input[type="checkbox"]');const changeColor=e=>{e.target.parentNode.querySelector(".checkbox-input").classList.toggle("clicked-color"),e.target.parentNode.querySelector(".checkbox-text").classList.toggle("clicked-text")};checkboxes.forEach((e=>{e.addEventListener("change",changeColor)}));let checkradios=document.querySelectorAll('input[type="radio"]');const changeColorr=e=>{let t=e.target.parentNode.querySelector(".radio-text");document.querySelectorAll(".radio-text").forEach((e=>e.parentElement.classList.remove("clicked"))),t.parentElement.classList.add("clicked")};checkradios.forEach((e=>{e.addEventListener("change",changeColorr)}));