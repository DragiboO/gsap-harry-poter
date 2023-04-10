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

        sparkles = document.createElement("div")
        sparkles.classList.add("sparkles")

        sparkles.style = `margin-top: ${Math.random() * 10}px; transform: rotate(${Math.random() * 360}deg);`

        buble1.appendChild(sparkles)

        stick1.appendChild(buble1)

        await sleep(5)
    
        buble2 = document.createElement("div")
        buble2.classList.add("buble-2")

        sparkles = document.createElement("div")
        sparkles.classList.add("sparkles")

        sparkles.style = `margin-top: ${Math.random() * 10}px; transform: rotate(${Math.random() * 360}deg);`

        buble2.appendChild(sparkles)

        stick2.appendChild(buble2)
    
        gsap.to(".buble-1", {x: '1700%', scale: 3 , duration: 0.4, ease: "none"})
        gsap.to(".buble-2", {x: '-1700%', scale: 3 , duration: 0.4, ease: "none"})
    
        await sleep(8)

        let explosion = document.createElement("div")
        explosion.classList.add("explosion")
        
        //animationContainer.appendChild(explosion)
    
        await sleep(200)
        //explosion.remove()
    }
}

boomSpell()

gsap.to(".explosion", {scale: 1.2, duration: 0.4, ease: "none", repeat: -1, yoyo: true})

let coord = [
    {x: 12, y: 90, rotation: 37},
    {x: 19, y: 79, rotation: 0},
    {x: 19, y: 64, rotation: -10},
    {x: 15, y: 50, rotation: -7},
    {x: 12, y: 35, rotation: 0},
    {x: 12, y: 20, rotation: 30},
    {x: 20, y: 9, rotation: 58},
    {x: 35, y: 5, rotation: 90},
    {x: 50, y: 5, rotation: 90},
    {x: 65, y: 12, rotation: 130},
    {x: 75, y: 25, rotation: 150},
    {x: 80, y: 40, rotation: 180},
    {x: 80, y: 55, rotation: 180},
    {x: 75, y: 70, rotation: 210},
    {x: 65, y: 80, rotation: 230},
    {x: 57, y: 90, rotation: 200},
]

async function walk() {

    let map = document.querySelector(".map-maraudeur")

    while (true) {
        for (let i = 0; i < coord.length; i++) {
            const c = coord[i]
            let walk = document.createElement("div")
            walk.classList.add("walking")
            walk.style = `left: ${c.x}%; top: ${c.y}%; transform: rotate(${c.rotation}deg);`
            map.appendChild(walk)
    
            gsap.timeline()
                .to(walk, {opacity: '1', duration: 1, ease: "none"})
                .to(walk, {opacity: '1', duration: 1, ease: "none"})
                .to(walk, {opacity: '0', duration: 1, ease: "none"})
                .then(() => {
                    walk.remove();
                })
    
            await sleep(500)
        }
        await sleep(500)
    }
}

walk()