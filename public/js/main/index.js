import MouseFollower from"mouse-follower";import{initializeApp}from"firebase/app";import{getDatabase,ref,push,set}from"firebase/database";import lozad from"lozad";import{v4 as uuidv4}from"uuid";let select=e=>document.querySelector(e),selectAll=e=>document.querySelectorAll(e);document.addEventListener("DOMContentLoaded",(function(){lozad(".lozad",{rootMargin:"100px 0px",loaded:function(e){}}).observe()})),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("hypercritical-worker.js").catch((e=>console.log("Error:",e)))}));let midmoon=select(".mid-moon"),menuclose=select(".action--close"),menuopen=select(".action--menuUzi");function open(){midmoon.classList.add("mid-moon--light"),midmoon.classList.remove("mid-moon--dark")}function close(){midmoon.classList.add("mid-moon--dark"),midmoon.classList.remove("mid-moon--light")}function assignLinks(e){for(const t in e)if(e.hasOwnProperty(t)){selectAll(t).forEach((o=>{o?o.href=e[t]:console.error(`Elements matching selector ${t} not found.`)}))}}function assignExp(e){for(const t in e)if(e.hasOwnProperty(t)){selectAll(t).forEach((o=>{o?o.innerHTML=e[t]:console.error(`Elements matching selector ${t} not found.`)}))}}function smoother(){ScrollSmoother.create({smooth:1,effects:!0,smoothTouch:.1})}menuopen.addEventListener("click",open),menuclose.addEventListener("click",close),new Promise(((e,t)=>{document.addEventListener("DOMContentLoaded",(function(){fetch("includes/config.json").then((e=>e.json())).then((t=>{assignLinks(t),e()})).catch((e=>{console.error("Error loading config:",e),t(e)}))}))})).then((()=>{console.log("%c Greetings from Hypercritical","color:white;background:#c389e1; font-size: 26px;font-family:sans-serif")})).catch((e=>{console.error("Failed to load configuration or assign links:",e)})),new Promise(((e,t)=>{document.addEventListener("DOMContentLoaded",(function(){fetch("includes/config-data.json").then((e=>e.json())).then((t=>{assignExp(t),e()})).catch((e=>{console.error("Error loading config:",e),t(e)}))}))})).then((()=>{})).catch((e=>{console.error("Failed to load configuration or assign data:",e)})),assignExp(),document.addEventListener("DOMContentLoaded",(()=>{let e=select(".menuUzi__item-link"),t=e.querySelector(".contact-emoji"),o=gsap.timeline();e.addEventListener("mouseover",(()=>{o.to(t,{duration:1,rotation:-360,repeat:-1,ease:"linear"})})),e.addEventListener("mouseout",(()=>{o.kill()}))})),gsap.registerPlugin(ScrollTrigger,ScrollSmoother),window.innerWidth>767&&smoother(),window.addEventListener("resize",smoother),gsap.registerPlugin(ScrollTrigger),gsap.registerPlugin(ScrollToPlugin),gsap.registerPlugin(SplitText);const herolargelogo=select(".hero-largelogo");let herotext=new SplitText(herolargelogo,{type:"words",wordsClass:"hero-words"});const splitchars=selectAll(".split-chars");splitchars.forEach((e=>{new SplitText(e,{type:"chars",charsClass:"otherchars"})}));let herowords=selectAll(".hero-words"),heroSeparator=select(".below-line"),heroMedia=select(".parallax-hero"),heroimageWrapper=select(".hero-image");const showHero=()=>{gsap.timeline({defaults:{ease:"expo.out",delay:.5}}).addLabel("start").fromTo(heroSeparator,{width:0},{duration:1.75,width:"100%",stagger:.095},"start").fromTo(herowords,{y:"110%"},{delay:0,duration:2.3,y:"0",stagger:.17,ease:"expo.inOut"},"start+=0.28").fromTo(heroimageWrapper,{width:0},{width:"100%",duration:1.5,ease:"expo.inOut",transformOrigin:"50% 50% 0"},"start+=0.7")};function initParallax(){selectAll(".slide").forEach(((e,t)=>{let o=e.querySelector(".parallax-image");function r(){gsap.fromTo(o,{y:innerWidth>767?"-60vh":"-30vh"},{y:innerWidth>767?"60vh":"30vh",scrollTrigger:{trigger:e,scrub:!0,start:"top bottom",end:"bottom top",markers:!1},ease:"none"})}r(),window.addEventListener("resize",r)}))}function scrollTop(){gsap.to(window,{duration:2,scrollTo:{y:"nav"},ease:"power2.inOut"})}function lineTimeline(e){const t=gsap.timeline({defaults:{duration:3,ease:"power3.out"}});return t.fromTo(e,{scaleX:0,opacity:0,transformOrigin:"left left"},{scaleX:1,opacity:1}),t}document.addEventListener("DOMContentLoaded",(function(){showHero(),initParallax(),setTimeout((()=>{scrollTop()}),3e3)})),selectAll("[line-trigger]").forEach((function(e){const t=e.getAttribute("line-trigger"),o=lineTimeline(e);ScrollTrigger.create({trigger:t,start:"top 92%",animation:o,onEnter:()=>o.play(),onLeaveBack:()=>o.reverse({duration:6.5})})})),document.addEventListener("DOMContentLoaded",(function(){let e=select("#toTop");function t(){(window.scrollY||document.documentElement.scrollTop)>1.2*window.innerHeight?e.style.display="block":e.style.display="none"}t(),window.addEventListener("scroll",t),e.addEventListener("click",(function(){gsap.to(window,{duration:2,delay:0,scrollTo:{y:".hero-main"},ease:e=>Math.min(1,1.001-Math.pow(2,-10*e))})}))})),document.addEventListener("DOMContentLoaded",(function(){function e(){if(innerWidth>767){new MouseFollower}}e(),window.addEventListener("res",e)})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".col__content-txt").forEach((e=>{const t=e.querySelector(".details-content"),o=e.querySelector("summary");gsap.set(t,{height:0,overflow:"hidden"}),o.addEventListener("click",(function(o){e.hasAttribute("open")?gsap.to(t,{height:0,duration:.5,onComplete:()=>{e.removeAttribute("open")}}):function(){const o=t.scrollHeight;e.setAttribute("open",""),gsap.fromTo(t,{height:0},{height:o,duration:.5})}(),o.preventDefault()}))}));const e=document.querySelectorAll("details");e.forEach((t=>{t.addEventListener("click",(o=>{e.forEach((e=>{e!=t&&e.removeAttribute("open")}))}))}))}));let elephant=select(".c-elephant_himself"),elephant_wrapper=select(".elephant-boundary");const elephantcursor=new MouseFollower({el:elephant,container:elephant_wrapper,speed:22.5,hideTimeout:3e4});let peanutWrapper=select(".ourservices");const peanutcursor=new MouseFollower;peanutWrapper.addEventListener("mouseenter",(()=>{peanutcursor.setImg("./../../assets/images/peanut.webp")})),peanutWrapper.addEventListener("mouseleave",(()=>{peanutcursor.removeImg()})),document.addEventListener("DOMContentLoaded",(()=>{gsap.registerPlugin(ScrollTrigger);const e=gsap.utils.toArray(".white-section");var t=select(".top-arrow-wrapper"),o=select(".top-arrow-path"),r=select(".menu-name"),n=selectAll(".menu-dot-line");function a(){o.style.stroke="var(--color-bg)",t.style.fill="var(--color-black)",n.forEach((e=>{e.style.background="var(--color-black)"})),r.style.color="var(--color-black)"}function i(){o.style.stroke="var(--color-black)",t.style.fill="var(--color-bg)",n.forEach((e=>{e.style.background="var(--color-bg)"})),r.style.color="var(--color-bg)"}e.forEach(((e,t)=>{gsap.timeline({scrollTrigger:{trigger:e,id:t+1,start:"top top",endtrigger:e,end:"bottom bottom",scrub:!0,onEnter:()=>i(),onLeave:()=>a(),onEnterBack:()=>i(),onLeaveBack:()=>a()}})}))}));import{Item}from"./code-anime/item";[...selectAll(".grid-itemz > .grid__item-img")].forEach((e=>new Item(e)));let worldvideoWrapper=select(".global-video"),worldvideo=select("#video-background");gsap.registerPlugin(ScrollTrigger);const animateVideo=gsap.timeline({scrollTrigger:{trigger:worldvideoWrapper,start:"top bottom",end:"top top",scrub:!0,markers:!1,toggleActions:"play none none reverse"}});animateVideo.fromTo(worldvideo,{scaleX:.9,borderRadius:"45px"},{scaleX:1,borderRadius:"0px"});const playvideotl=gsap.timeline({scrollTrigger:{trigger:worldvideo,start:"top bottom",end:"bottom top",scrub:!0,onEnter:()=>{worldvideo.paused&&worldvideo.play().catch((e=>{"NotAllowedError"===e.name?console.log("Play request was interrupted by a pause call."):console.error("An unexpected error occurred:",e)}))},onLeave:()=>{worldvideo.paused||worldvideo.pause()},onEnterBack:()=>{worldvideo.paused&&worldvideo.play().catch((e=>{"NotAllowedError"===e.name?console.log("Play request was interrupted by a pause call."):console.error("An unexpected error occurred:",e)}))},onLeaveBack:()=>{worldvideo.paused||worldvideo.pause()}}});var playPromise=worldvideo.play();function showDialog(){gsap.to("#overlay",{duration:.5,opacity:1,scale:1,onComplete:()=>{gsap.to("#dialog",{duration:.5,scale:1,opacity:1,ease:"bounce"})}})}function hideDialog(){gsap.to("#dialog",{duration:.5,scale:0,opacity:0,onComplete:()=>{gsap.to("#overlay",{duration:.5,opacity:0,scale:0})}})}void 0!==playPromise&&playPromise.then((e=>{})).catch((e=>{}));const firebaseConfig={apiKey:process.env.FIREBASE_API_KEY,authDomain:process.env.FIREBASE_AUTH_DOMAIN,databaseURL:process.env.FIREBASE_DATABASE_URL,projectId:process.env.FIREBASE_PROJECT_ID,storageBucket:process.env.FIREBASE_STORAGE_BUCKET,messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID,appId:process.env.FIREBASE_APP_ID,measurementId:process.env.FIREBASE_MEASUREMENT_ID},app=initializeApp(firebaseConfig),database=getDatabase(app);function generateInvoiceNumber(){return`INV-${uuidv4().substring(0,6)}`}document.getElementById("consultationForm").addEventListener("submit",(function(e){e.preventDefault();var t=document.getElementById("message").value,o=document.getElementById("email").value,r=document.getElementById("yourname").value;const n=generateInvoiceNumber();var a="";document.getElementById("Web-Design").checked&&(a+="Web Design, "),document.getElementById("SEO").checked&&(a+="SEO, "),document.getElementById("Development").checked&&(a+="Development, "),document.getElementById("Other").checked&&(a+="Other, "),a=a.slice(0,-2);for(var i="",s=document.getElementsByName("priceGroup"),l=0;l<s.length;l++)if(s[l].checked){i=s[l].id;break}var c=ref(database,`consultations/${n}`);set(c,{uuid:n,name:r,message:t,budget:i,consultationType:a,email:o,status:"Pending",date:(new Date).toISOString()}),showDialog(),document.getElementById("consultationForm").reset()})),select(".close-dialog").addEventListener("click",hideDialog);let checkboxes=selectAll('input[type="checkbox"]');const changeColor=e=>{e.target.parentNode.querySelector(".checkbox-input").classList.toggle("clicked-color"),e.target.parentNode.querySelector(".checkbox-text").classList.toggle("clicked-text")};checkboxes.forEach((e=>{e.addEventListener("change",changeColor)}));let checkradios=selectAll('input[type="radio"]');const changeColorr=e=>{let t=e.target.parentNode.querySelector(".radio-text");selectAll(".radio-text").forEach((e=>e.parentElement.classList.remove("clicked"))),t.parentElement.classList.add("clicked")};function playVideo(e){e.querySelector(".grid__item-video").play()}function resetVideo(e){var t=e.querySelector(".grid__item-video");t.pause(),t.currentTime=0}function toggleVideo(e){var t=e.querySelector(".grid__item-video");t.paused?t.play():(t.pause(),t.currentTime=0)}checkradios.forEach((e=>{e.addEventListener("change",changeColorr)}));const videoDown=e=>{gsap.timeline({defaults:{ease:"expo.out",delay:0}}).fromTo(e.querySelector(".grid__item-video"),{y:"0%"},{duration:1.25,y:"101%",ease:"expo.inOut"},0)},videoUp=e=>{gsap.timeline({defaults:{ease:"expo.out",delay:0}}).fromTo(e.querySelector(".grid__item-video"),{y:"101%"},{duration:1.25,y:"0%",ease:"expo.inOut"},0)};let imgconts=selectAll(".grid-item-vid");imgconts.forEach((e=>{e.addEventListener("mouseenter",(()=>{e.querySelector(".grid__item-video").style.display="block",videoDown(e),toggleVideo(e)}))})),imgconts.forEach((e=>{e.addEventListener("mouseout",(()=>{let t=e.querySelector(".grid__item-video");videoUp(e),setTimeout((()=>{resetVideo(e),t.style.display="none"}),2e3)}))}));let thirtyWrapper=select(".thirtyworks"),thirtyArrowLeft=selectAll(".thirty-left svg"),thirtyArrowRight=selectAll(".thirty-right svg"),thirtytl=gsap.timeline({repeat:-1,paused:!0});thirtytl.addLabel("start",0).to(thirtyArrowLeft,{duration:2,x:-30,ease:"none"},"start").to(thirtyArrowRight,{duration:2,x:30,ease:"none"},"start").to(thirtyArrowLeft,{duration:2,x:0,ease:"none"},"start+=2").to(thirtyArrowRight,{duration:2,x:0,ease:"none"},"start+=2"),thirtyWrapper.addEventListener("mouseenter",(()=>{thirtytl.play()})),thirtyWrapper.addEventListener("mouseleave",(()=>{thirtytl.pause()}));let projects=selectAll(".feature-inner-wrapper");projects.forEach(((e,t)=>{function o(e){return`rgb(${e.join(", ")})`}let r=o([0,0,0]),n=o([252,18,52]),a=o([255,255,255]),i=gsap.timeline({paused:!0});i.addLabel("start",0).fromTo(e,{duration:.5,backgroundColor:r,ease:"none"},{duration:.5,backgroundColor:n,ease:"none"},"start"),e.addEventListener("mouseenter",(()=>{e.querySelectorAll(".feature-expla-info").forEach((e=>{i.fromTo(e,{duration:.5,color:a,ease:"none"},{duration:.5,color:r,ease:"none"},"start")})),i.play()})),e.addEventListener("mouseleave",(()=>{i.reverse()}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.title;let t,o=1;const r=()=>{t=setInterval((()=>{o=o<5?o+1:1;const e="Zzzz"+".".repeat(o);document.title=e}),500)};window.addEventListener("blur",(()=>setTimeout(r,12e4))),window.addEventListener("focus",(()=>{clearInterval(t),document.title=e}))}));