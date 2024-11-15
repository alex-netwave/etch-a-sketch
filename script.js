//Create a webpage with a 16x16 grid of square divs.
const gridContainer = document.querySelector(".grid-container");

let color = "#008000";
let delay = 10; //ms, should be dependent on the grid size, larger grid = smaller delay\
let idNum = 0;

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
let isSmoothDrawMode = false;

function toggleSmoothDrawMode(){
    isSmoothDrawMode = !isSmoothDrawMode;
}

function createCell(column){
    const cell = document.createElement("div");
    cell.style.backgroundColor = "#87ceeb";
    cell.style.flex = "1 1 0";
    cell.setAttribute("id", `cell${idNum}`);
    idNum += 1;

    // Store initial color
    let originalColor = cell.style.backgroundColor; 

    // apply the selected color on mousedown
    cell.addEventListener("mousedown", (e) => {
        // update original color to current selected color
        originalColor = color; 
        e.target.style.backgroundColor = color;
    });

    // apply hover color on mouseover
    cell.addEventListener("mouseover", (e) => {
        if (e.buttons === 0) { // Only apply if no mouse button is pressed
            e.target.style.backgroundColor = color; // Hover color
        }
    });

    // apply trail then revert it to original color on mouseleave
    cell.addEventListener("mouseleave", (e) => {
        if(isSmoothDrawMode){
            e.target.style.backgroundColor = color;
            originalColor = color; 
        }
        else{
            e.target.style.backgroundColor = color;
            
            setTimeout(() => {
                e.target.style.backgroundColor = originalColor;
            }, 50);            
        }
    });
    

    column.appendChild(cell);
}

createGrid(16,16);

const gHeight = document.querySelector("#height");
const gWidth = document.querySelector("#width");
const resizeBtn = document.querySelector(".resize");
const smoothModeBtn = document.querySelector(".smooth-mode");
const randomModeBtn = document.querySelector(".randomize-mode");


function deleteGrid(){
    gridContainer.textContent=''; //removing all the children
}

// handling user input grid dimensions
resizeBtn.addEventListener("click", ()=>{
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


// randomization of color - click k key to randomize
document.body.addEventListener("keydown", (e)=>{ 
    if(e.key==="k")
        color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
})

let isRandomColorMode = false;
let RandomColorCycle = '';
function toggleRandomColorMode(){
    isRandomColorMode = !isRandomColorMode;
    if(isRandomColorMode){
        RandomColorCycle = setInterval(RandomColorMode, 1000);
    }
    else {
        clearInterval(RandomColorCycle);
    }
}

function RandomColorMode(){
    color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}



// smooth drawing - click s key to toggle (no need to mouseclick, just move it)
document.body.addEventListener("keydown", (e) =>{
    if(e.key==="s"){
        toggleSmoothDrawMode();
    }
})

smoothModeBtn.addEventListener("click", toggleSmoothDrawMode);
randomModeBtn.addEventListener("click", toggleRandomColorMode);


