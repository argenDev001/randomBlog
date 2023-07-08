const active = document.querySelector(".btn")
const passive = document.querySelector(".btn2")
const container = document.querySelector(".container")
const body = document.querySelector("body")
let n = 600

for (let i = 0; i < n; i++) {
    const square = document.createElement("div")
    container.append(square)
    square.classList.add("square")
    square.addEventListener("mouseleave", () => {
        square.style.background = ""
        square.style.transform = ""
        square.style.rotate = 'y 360deg'
    })
    square.addEventListener('mouseover', () => {
        square.style.rotate = ''
        square.style.background =randomColor()
    })
    active.addEventListener("click", () => {
        square.style.background = randomColor()
        square.style.rotate = 'y 360deg'
        square.style.transition = ".5s"


    })
    passive.addEventListener("click", () => {
        square.style.background = ""
        square.style.rotate = ''
        square.style.transition = ".5s"
    })
}

function randomColor() {
    let color = "#"
    for (let i = 1; i < 7; i++)
        color += Math.floor(Math.random() * 10)
    return color
}


console.log(randomColor())