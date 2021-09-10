let  boardSize = 700;
let  grid = 16;
let colorSwitch = false

const container = document.querySelector(".container")
console.log(container.style)
container.style.height = boardSize + "px"
container.style.width = boardSize + "px"

const btn = document.querySelector("button")
btn.addEventListener("click", () => {
    grid = NaN
    do {
        grid = prompt("Enter a grid size. Max 100.")
    
    } while (isNaN(grid) || (grid > 100))
    createGrid(grid)
})


const colorBtn = document.querySelector("#randomColor")
colorBtn.textContent = `Turn ${colorSwitch ? "Off": "On"} random color switch`
colorBtn.addEventListener("click", () => {
    colorSwitch = !colorSwitch
    colorBtn.textContent = `Turn ${colorSwitch ? "Off": "On"} random color switch`
})
document.querySelector("#reset").addEventListener("click", reset)

function createGrid(size) {
    container.innerHTML = ""
    for (let i = 0; i < size*size; i++) {
        const div = document.createElement("div")
        div.classList.add("board")
        div.style.height = (boardSize / size).toFixed(10) - 0.01 + "px"
        div.style.width = (boardSize / size).toFixed(10) - 0.01 + "px"
        div.addEventListener("mouseover", ()=> {
            div.style.backgroundColor = colorSwitch ? randomColor(): "black"
        })
    
    
    container.appendChild(div)
    
    }

}
function randomColor() {
    let random = () => Math.floor(Math.random() * 255)
    return `rgb(${random()}, ${random()}, ${random()})`
}

function reset() {
    createGrid(grid)
}

createGrid(16)