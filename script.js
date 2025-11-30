// addEventListener("mousemove",(e)=>{
//     console.log(e.clientX, e.clientY)
//     document.body.style.setProperty("--x",e.clientX+"px")
//     document.body.style.setProperty("--y",e.clientY+"px")
// })
let ticking = false;
window.addEventListener("mousemove", (e) => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // console.log(e.clientX, e.clientY)
            document.body.style.setProperty("--x", e.clientX + "px");
            document.body.style.setProperty("--y", e.clientY + "px");
            ticking = false
        })
        ticking = true
    }
})