let img1;
let img2;
let img3;
let img4;
let img5;
let currentImage;
let currentMessageIndex = 0;
let screen = 1; 
let messages = [
  "Torito es un viejo ex boxeador el cual\nrecuerda sus principios en el deporte",
  "Recuerda a su madre y a Tani (su mejor amigo),\nquienes nunca le soltaron la mano y siempre lo motivaron\na seguir adelante.",
  "Torito recuerda sus primeras peleas, su gloria, orgullo y\nsu primer gran pelea en NYC, contra el negrito flores.",
  ".",
  "La carrera de Torito va en picada;\npierde su reconocimiento y prestigio amateur."
];

function preload() {
  img1 = loadImage('imagenes/TORITO.2.png');
  img2 = loadImage('imagenes/TORITO.1.png'); 
  img3 = loadImage('imagenes/TORITO.3.png');
  img4 = loadImage('imagenes/TORITO.4.jpg');
  img5 = loadImage('imagenes/TORITO.5.png'); 
}

function setup() {
  createCanvas(640, 480);
  currentImage = img1;
}

function draw() {
  background(220);
  currentImage.resize(width, height);
  image(currentImage, 0, 0);

  let rectX = 20;
  let rectY = 0;
  let rectWidth = width - 40;
  let rectHeight = 95;

  fill(0, 150);
  rect(rectX, rectY, rectWidth, rectHeight);

  textSize(24);
  fill(255);
  textAlign(CENTER, CENTER);
  textFont('Arial');

  
  let messageToShow = messages[screen - 1];

  let lines = messageToShow.split("\n");
  let lineHeight = textAscent() + textDescent();

  for (let i = 0; i < lines.length; i++) {
    let lineY = rectY + (rectHeight / 2) - (lines.length * lineHeight) / 2 + i * lineHeight;
    text(lines[i], width / 2, lineY);
  }

  
  let buttonWidth = 120;
  let buttonHeight = 50;
  let buttonX = (width - buttonWidth) / 2;
  let buttonY = height - buttonHeight - 20;

  fill(139, 0, 0);
  rect(buttonX, buttonY, buttonWidth, buttonHeight);

  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Siguiente", buttonX + buttonWidth / 2, buttonY + buttonHeight / 2);
}

function mousePressed() {
  let buttonWidth = 120;
  let buttonHeight = 50;
  let buttonX = (width - buttonWidth) / 2;
  let buttonY = height - buttonHeight - 20;

  
  if (mouseX > buttonX && mouseX < buttonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight) {
    screen++;

    
    if (screen === 2) {
      currentImage = img2; 
      currentMessageIndex = 1;
    } else if (screen === 3) {
      currentImage = img3;
      currentMessageIndex = 2;
    } else if (screen === 4) {
      currentImage = img4; 
      currentMessageIndex = 3;
    } else if (screen === 5) {
      currentImage = img5; 
      currentMessageIndex = 4;
    } else {
      screen = 1; 
      currentImage = img1;
      currentMessageIndex = 0;
    }
  }
}
