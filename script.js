//Create a webpage with a 16x16 grid of square divs.
const container = document.querySelector(".container");

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
    cell.style.backgroundColor = "skyblue";
    cell.style.flex = "1 1 0";
    cell.setAttribute("id", "cell");

    cell.addEventListener("mousedown", (e)=>{
        e.target.style.backgroundColor = "green"; 
    })

    cell.addEventListener("mouseover", (e)=> {
        if(e.target.style.backgroundColor === "green"){}
        else
            e.target.style.backgroundColor = "purple";
    })
    cell.addEventListener("mouseout", (e) => {
        if(e.target.style.backgroundColor === "green"){}
        else
            e.target.style.backgroundColor = "skyblue";
    })

    column.appendChild(cell);
}

createGrid(16,16);


const gHeight = document.querySelector(".height");
const gWidth = document.querySelector(".width");
const btn = document.querySelector("button");

function deleteGrid(){
    container.textContent=''; //removing all the children
}

btn.addEventListener("click", ()=>{
    if(!errorMessage())
    {
        deleteGrid();
        createGrid(gHeight.value, gWidth.value);
    }
    
})

function errorMessage(){
    if (gHeight.value > 100 || gWidth.value > 100){
        alert("Value too high, may deter performance. Choose other values.");
        return true;
    }
    else if(gHeight.value < 1 || gWidth.value < 1){
        alert(`Dimension too small. Choose other values.`)
        return true;
    }
    return false;
}




