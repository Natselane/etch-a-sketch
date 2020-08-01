const container = document.querySelector(".container");

let amountOfSquares = 0;
amountOfSquares = window.prompt("How many squares?");

container.style.gridTemplateColumns = "repeat(" + amountOfSquares + ", 10px)";
container.style.gridTemplateRows = "repeat(" + amountOfSquares + ", 10px)";

for (let i = 0; i < amountOfSquares * amountOfSquares; i++) {
    const squareDiv = document.createElement("div");
    container.appendChild(squareDiv);
}

const squareDivs = document.querySelectorAll(".container div");

squareDivs.forEach(square => {
    square.addEventListener("pointerover", () => {
        square.classList.add("red");
    })
})