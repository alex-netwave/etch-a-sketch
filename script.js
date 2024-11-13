//Create a webpage with a 16x16 grid of square divs.
const container = document.querySelector(".container");
const btn = document.querySelector("button");

function createGrid(gWidth, gHeight){
    for(let i=0; i<gWidth; i++){
        createColumn(gHeight);
    }
}

function createColumn(colHeight){
    const column = document.createElement("div");
    column.style.backgroundColor = "green";
    column.style.flex = "1 1 0";
    column.style.display = "flex";
    column.style.flexDirection = "column";

    for(let i=0; i<colHeight; i++){
        createCell(column)
    }

    container.appendChild(column);
}

function createCell(column){
    const cell = document.createElement("div");
    cell.style.backgroundColor = "red";
    cell.style.flex = "1 1 0";
    cell.setAttribute("id", "cell");

    cell.addEventListener("mousedown", (e)=>{
        e.target.style.backgroundColor = "green"; 
    })
    column.appendChild(cell);
}

createGrid(16,16);

const cellList = document.querySelectorAll("#cell");





