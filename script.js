window.addEventListener("scroll",function(){
    let header=document.querySelector("header")
    header.classList.toggle('sticky',window.scrollY>0)
})
AOS.init({
    duration: 800, // Animation duration
    once: true, // Only animate elements once
});