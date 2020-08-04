const container = document.querySelector(".container");
const resetBtn = document.querySelector(".resetBtn");
const resizeBtn = document.querySelector(".resizeBtn");
const randomBtn = document.querySelector(".random-colorBtn");
const blackBtn = document.querySelector(".blackBtn");
const buttons = document.querySelectorAll(".menu button");

let squareDivs; 
let amountOfSquares = 16;
let color = "black";

createGrid(amountOfSquares);

resetBtn.addEventListener("click", () => resetGrid());

resizeBtn.addEventListener("click", () => {
    resetGrid();
    amountOfSquares = window.prompt("How many squares do you want? (Min 10, max 80)");
    while (!(amountOfSquares >= 10) || !(amountOfSquares <= 80)) {
        amountOfSquares = window.prompt("You can have minimum 10 and maximum 80 squares");
    }
    createGrid(amountOfSquares);
})

randomBtn.addEventListener("click", () => {
    const letters = '0123456789ABCDEF';
    color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    paintSquares(color);
})

blackBtn.addEventListener("click", () => {
    color = "black";
    paintSquares(color);
})

function createGrid(amountOfSquares) {
    for (let i = 0; i < amountOfSquares * amountOfSquares; i++) {
        let squareDiv = document.createElement("div");
        container.appendChild(squareDiv);
    }

    container.style.gridTemplateColumns = "repeat(" + amountOfSquares + ", 1fr";
    container.style.gridTemplateRows = "repeat(" + amountOfSquares + ", 1fr";

    paintSquares(color);
}

function paintSquares(color) {
    squareDivs = document.querySelectorAll(".container div");

    if (color == "black") {
        squareDivs.forEach(square => {
            square.addEventListener("pointerover", () => {
                square.style.backgroundColor = "";
                square.classList.add("black");
            })
        }) 
    } else {
        squareDivs.forEach(square => {
            square.addEventListener("pointerover", () => {
                square.style.backgroundColor = color;
            })
        })
    }
}

function resetGrid() {
    squareDivs.forEach(square => {
        square.classList.remove("black");
        square.style.backgroundColor = "";
    });
    createGrid(amountOfSquares);
}
