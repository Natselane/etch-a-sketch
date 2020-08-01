const container = document.querySelector(".container");
const reset = document.querySelector(".resetBtn");

let amountOfSquares = 16;

createGrid(amountOfSquares);

reset.addEventListener("click", () => {
    amountOfSquares = window.prompt("How many squares do you want?");
    createGrid(amountOfSquares);
})

function createGrid(amountOfSquares) {
    for (let i = 0; i < amountOfSquares * amountOfSquares; i++) {
        let squareDiv = document.createElement("div");
        container.appendChild(squareDiv);
    }

    container.style.gridTemplateColumns = "repeat(" + amountOfSquares + ", 1fr";
    container.style.gridTemplateRows = "repeat(" + amountOfSquares + ", 1fr";

        

    const squareDivs = document.querySelectorAll(".container div");

    squareDivs.forEach(square => {
        square.addEventListener("pointerover", () => {
            square.classList.add("black");
        })
    })
}

