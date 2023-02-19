let drawing = [];
let currentPath = [];
let canvas;
let deleteBtn = document.getElementById("delete")
let blueColor = document.getElementById('blueColor');
let redColor = document.getElementById('redColor');
let greenColor = document.getElementById('greenColor');
let purpleColor = document.getElementById('purpleColor');
let orangeColor = document.getElementById('orangeColor');
let yellowColor = document.getElementById('yellowColor');
let blackColor = document.getElementById('blackColor')
let eraserBtn = document.getElementById("eraser");
let slider = document.getElementById("SLIDER");
let currentColor;
let colorPickerBtn = document.getElementsByClassName("colorPick")

let sendBtn = document.getElementById("send")
let chatDiv = document.getElementsByClassName("CHATBOX")
let answerBox = document.getElementById("guess")
let innerValue;

sendBtn.onclick = () => {
    console.log("HELLO")
    innerValue = answerBox.value;
    console.log(innerValue)
    console.log(chatDiv)
    chatDiv.insertAdjacentHTML("beforebegin", `<div>${innerValue}</div>`);
}



















deleteBtn.onclick = () => {
    drawing = []
    currentPath = []
}

eraserBtn.onclick = () => {
    currentColor = "#FFFFFF";
    console.log("eraser)")
}

blueColor.onclick = () => {
    currentColor = "#0000FF"
    console.log("BLUE")
}

redColor.onclick = () => {
    currentColor = "#ff0000"
    console.log("RED")
}

greenColor.onclick = () => {
    currentColor = "#00FF00"
    console.log("GREEN")
}

yellowColor.onclick = () => {
    currentColor = "#FFFF00"
    console.log("YELLOW")
}

purpleColor.onclick = () => {
    currentColor = "#A020F0"
    console.log("PURPLE")
}

orangeColor.onclick = () => {
    currentColor = "#FFA500"
    console.log("ORANGE")
}





function setup() {

    
    canvas = createCanvas(600, 600);
    canvas.mousePressed(startPath);
    canvas.parent("canvasContainer")
    colorPicker = createColorPicker("black");
    colorPicker.parent("colorButtons")
    colorPicker.className = "colorPick"
    currentColor = "#000000"
}



function startPath() {
    currentPath = [];
    drawing.push(currentPath);
}

function draw() {
    
    background(255, 255, 255);
    if(mouseX < 601 && mouseY < 601 && mouseX > -1 && mouseY > -1 ) {
        if (mouseIsPressed) {
            let point = {
                x: mouseX,
                y: mouseY,
                color: currentColor,
                sliderValue: slider.value
            }
            console.log(point);
            currentPath.push(point);
            stroke(currentColor);
            console.log(drawing)
        }
    }
    
    noFill();
    for (let i = 0; i < drawing.length; i++) {
        let path = drawing[i];
        beginShape();
        for (let k = 0; k < path.length; k++) {
            
            strokeWeight(path[k].sliderValue)
            stroke(path[k].color)
            vertex(path[k].x, path[k].y)
        }
        endShape();
    }
    
}






