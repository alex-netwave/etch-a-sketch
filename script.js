//Create a webpage with a 16x16 grid of square divs.
const container = document.querySelector(".container");
const btn = document.querySelector("button");

function createGrid(gWidth, gHeight){
    numCells = gWidth * gHeight;
    for(let i=0; i<numCells; i++){
        createCell();
    }
}

function createCell(){
    const cell = document.createElement("div");
    cell.style.backgroundColor = "green";
    cell.style.width = "10px";
    cell.style.height = "10px";
    container.appendChild(cell);
}

createGrid(16,16);

