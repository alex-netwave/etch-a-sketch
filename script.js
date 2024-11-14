//Create a webpage with a 16x16 grid of square divs.
const gridContainer = document.querySelector(".grid-container");

let color = "#008000";
let delay = 10; //ms, should be dependent on the grid size, larger grid = smaller delay\
let i = 0;

function createGrid(gWidth, gHeight){
    for(let i=0; i<gWidth; i++){
        createColumn(gHeight);
    }
}

function createColumn(colHeight){
    const column = document.createElement("div");
    column.style.backgroundColor = "#008000";
    column.style.flex = "1 1 0";
    column.style.display = "flex";
    column.style.flexDirection = "column";

    for(let i=0; i<colHeight; i++){
        createCell(column)
    }

    gridContainer.appendChild(column);
}

function createCell(column){
    const cell = document.createElement("div");
    cell.style.backgroundColor = "#87ceeb";
    cell.style.flex = "1 1 0";
    cell.setAttribute("id", `cell${i}`);
    i += 1;

    cell.addEventListener("mousedown", (e)=>{
        e.target.style.backgroundColor = color; 
    })

    cell.addEventListener("mouseover", (e) => {
        // let colorHolder = e.currentTarget.style.backgroundColor;      
        // // e.target.style.backgroundColor = "#800080";
        // e.target.style.backgroundColor = "#800080";
    })

    cell.addEventListener("mouseleave", (e) => {
        //e.target.style.backgroundColor = colorHolder;
        let colorHolder = e.target.style.backgroundColor;

        if(!(colorHolder === "#800080" || colorHolder ==="rgb(128, 0, 128)")){
            e.target.style.backgroundColor = "#800080";
            setTimeout(() => {
                e.target.style.backgroundColor = colorHolder;
            }, 50);
        }
    })

    column.appendChild(cell);
}

createGrid(16,16);


const gHeight = document.querySelector("#height");
const gWidth = document.querySelector("#width");
const btn = document.querySelector("button");


function deleteGrid(){
    gridContainer.textContent=''; //removing all the children
}

// handling user input grid dimensions
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


// randomization code

document.body.addEventListener("keydown", (e)=>{ 
    if(e.key==="k")
        color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
})

function isValidColor(strColor) {
    var s = new Option().style;
    s.color = strColor;
  
    // return 'false' if color wasn't assigned
    return s.color == strColor.toLowerCase();
}

