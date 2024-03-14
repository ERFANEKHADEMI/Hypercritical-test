import MouseFollower from"mouse-follower";import Lenis from"@studio-freight/lenis";import{ScrollTrigger}from"gsap/all";import lozad from"lozad";import Reeller from"reeller";let select=e=>document.querySelector(e),selectAll=e=>document.querySelectorAll(e);document.addEventListener("DOMContentLoaded",(function(){lozad(".lozad",{rootMargin:"200px 0px",loaded:function(e){}}).observe()}));let lenis=new Lenis({duration:3,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:2,infinite:!1,autoResize:!0});function raf(e){lenis.raf(e),requestAnimationFrame(raf)}lenis.on("scroll",(e=>{})),requestAnimationFrame(raf),document.addEventListener("DOMContentLoaded",(function(){let e=select("#toTop");function t(){(window.scrollY||document.documentElement.scrollTop)>1.2*window.innerHeight?e.style.display="block":e.style.display="none"}t(),window.addEventListener("scroll",t),e.addEventListener("click",(function(){gsap.to(window,{duration:2,delay:0,scrollTo:{y:0},ease:e=>Math.min(1,1.001-Math.pow(2,-10*e))})}))})),document.addEventListener("DOMContentLoaded",(function(){function e(){if(innerWidth>767){new MouseFollower}}e(),window.addEventListener("resize",e)})),gsap.registerPlugin(ScrollTrigger);let maintl=gsap.timeline();maintl.to("main",{margin:0,ease:"none",borderRadius:0}),ScrollTrigger.create({animation:maintl,trigger:".work-wrapper",start:"bottom bottom",end:"bottom center",scrub:!0,markers:!1,toggleActions:"play none none reverse"}),Reeller.registerGSAP(gsap);const reeller=new Reeller({container:".sw-partner-marquee",wrapper:".sw-partner-marquee-row",itemSelector:".sw-partner-marquee-row-item",speed:40});let elements=selectAll(".rolling-text");elements.forEach((e=>{let t=e.innerText;e.innerHTML="";let o=document.createElement("div");o.classList.add("block");for(let e of t){let t=document.createElement("span");t.innerText=""===e.trim()?" ":e,t.classList.add("letter"),o.appendChild(t)}e.appendChild(o),e.appendChild(o.cloneNode(!0)),e.addEventListener("mouseover",(()=>{e.classList.add("hover")})),e.addEventListener("mouseout",(()=>{e.classList.remove("hover")}))})),setTimeout((()=>{elements.forEach((e=>{e.classList.add("play")}))}),600);var mediaWrappers=selectAll(".media-wrapper");function handleMouseMove(e){var t=e.clientX,o=e.clientY;gsap.to(".view-cursor",.5,{duration:0,x:t,y:o})}function handleMouseEnter(){gsap.to(".view-cursor",.5,{scale:1,ease:"expo.inOut"})}function handleMouseLeave(){gsap.to(".view-cursor",.5,{scale:0,ease:"expo.inOut"})}mediaWrappers.forEach((function(e){e.addEventListener("mousemove",handleMouseMove),e.addEventListener("mouseenter",handleMouseEnter),e.addEventListener("mouseleave",handleMouseLeave)}));let midmoon=select(".mid-moon"),menuclose=select(".action--close"),menuopen=select(".action--menuUzi");function open(){midmoon.classList.add("mid-moon--light"),midmoon.classList.remove("mid-moon--dark")}function close(){midmoon.classList.add("mid-moon--dark"),midmoon.classList.remove("mid-moon--light")}function assignLinks(e){for(const t in e)if(e.hasOwnProperty(t)){selectAll(t).forEach((o=>{o?o.href=e[t]:console.error(`Elements matching selector ${t} not found.`)}))}}function startLenis(e){select(".work-drawer .inner"),select(".scroll-wrapper");let t=select("body"),o=new Lenis({eventsTarget:t,duration:3,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:2,infinite:!1,autoResize:!0});o.on("scroll",(e=>{})),requestAnimationFrame((function e(t){o.raf(t),requestAnimationFrame(e)}))}function killLenis(){lenis.destroy()}menuopen.addEventListener("click",open),menuclose.addEventListener("click",close),new Promise(((e,t)=>{document.addEventListener("DOMContentLoaded",(function(){fetch("includes/config.json").then((e=>e.json())).then((t=>{assignLinks(t),e()})).catch((e=>{console.error("Error loading config:",e),t(e)}))}))})).then((()=>{})).catch((e=>{console.error("Failed to load configuration or assign links:",e)})),document.addEventListener("DOMContentLoaded",(()=>{gsap.registerPlugin(ScrollTrigger);const e=gsap.utils.toArray(".white-section");var t=select(".top-arrow-wrapper"),o=select(".top-arrow-path"),n=select(".menu-name"),r=selectAll(".menu-dot-line");function a(){o.style.stroke="var(--color-bg)",t.style.fill="var(--color-black)",r.forEach((e=>{e.style.background="var(--color-black)"})),n.style.color="var(--color-black)"}function i(){o.style.stroke="var(--color-black)",t.style.fill="var(--color-bg)",r.forEach((e=>{e.style.background="var(--color-bg)"})),n.style.color="var(--color-bg)"}e.forEach(((e,t)=>{gsap.timeline({scrollTrigger:{trigger:e,id:t+1,start:"top top",endtrigger:e,end:"bottom bottom",scrub:!0,onEnter:()=>i(),onLeave:()=>a(),onEnterBack:()=>i(),onLeaveBack:()=>a()}})}))}));let tileButtons=document.querySelectorAll(".work-tile"),thisDOM=select("html");tileButtons.forEach(((e,t)=>{e.addEventListener("click",(()=>{gsap.timeline().addLabel("start","+=0").to(".work-drawer",{duration:1,xPercent:-100,ease:"power2.inOut",onComplete:()=>{}},"start").to(".backdrop",{opacity:1,duration:.01,scale:1,onComplete:()=>{killLenis(),console.log(`killed lenis${t}`)}},"start"),select(".closeDrawer").addEventListener("click",(()=>{gsap.timeline({defaults:{ease:"power2.inOut"}}).addLabel("start","+=0").to(".work-drawer",{duration:1,xPercent:0,ease:"power2.inOut"}).to(backdrop,{opacity:0,duration:.01,scale:0,onComplete:()=>{startLenis()}}).to(".drawer-wrapper",{scrollTop:0,duration:.5,ease:"power2.inOut"},"start")}))}))}));let backdrop=select("#backdrop");backdrop.addEventListener("click",(()=>{gsap.timeline({defaults:{ease:"power2.inOut"}}).addLabel("start=+0").to(".work-drawer",{duration:1,xPercent:0,ease:"power2.inOut"},"start").to(backdrop,{opacity:0,duration:.01,scale:0,onComplete:()=>{startLenis()}},"start").to(".drawer-wrapper",{scrollTop:0,duration:.5,ease:"power2.inOut"},"start")}));