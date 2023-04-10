function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let animationBox = document.querySelector(".div-block-8")
let animationContainer = document.querySelector(".animation-spell")

function resize() {
    const baseWidth = 3840
    const baseHeight = 1080

    let actualWidth = animationBox.offsetWidth
    let actualHeight = animationBox.offsetHeight
    let scaleWidth = actualWidth / baseWidth
    let scaleHeight = actualHeight / baseHeight
    let scale = scaleWidth < scaleHeight ? scaleWidth : scaleHeight

    console.log(scale)

    animationContainer.style = `width: ${baseWidth * scale}px; height: ${baseHeight * scale}px;`
}

window.addEventListener("load", () => {
    resize()
})
window.addEventListener("resize", () => {
    resize()
})

let stick1 = document.querySelector(".stick-1")
let stick2 = document.querySelector(".stick-2")

let buble1 = document.querySelector(".buble-1")
let buble2 = document.querySelector(".buble-2")

let vdm = document.querySelector(".vdm")
let harry = document.querySelector(".harry")


async function boomSpell() {

    while(true) {
        buble1 = document.createElement("div")
        buble1.classList.add("buble-1")
        stick1.appendChild(buble1)
    
        buble2 = document.createElement("div")
        buble2.classList.add("buble-2")
        stick2.appendChild(buble2)
    
        gsap.to(".buble-1", {x: '2700%', scale: 3 , duration: 0.4, ease: "none"})
        gsap.to(".buble-2", {x: '-2700%', scale: 3 , duration: 0.4, ease: "none"})
    
        await sleep(420)

        let explosion = document.createElement("div")
        explosion.classList.add("explosion")
        
        //animationContainer.appendChild(explosion)
    
        buble1.remove()
        buble2.remove()
    
        await sleep(200)
        //explosion.remove()
    }
}

boomSpell()
