// https://youtu.be/ywbISGI_G1k?feature=shared
// Martin Bonoris
// tp1 Comision 1

let img; // Para cargar la imagen
let cols = 10;
let fila = 10;
let tamcel = 40;
let derecha = 400;
let colCeldas = []; // Arreglo para almacenar los colores de las celdas
let blanco;
let negro;

function preload() {
  img = loadImage("imagen/imagentp3.jpg"); // Carga la imagen antes de que se ejecute el setup
}

function setup() {
  createCanvas(800, 400);
  noStroke();
  blanco = color(255);
  negro = color(0);
  
  // Inicializamos el arreglo de colores
  for (let A = 0; A < cols; A++) {
    colCeldas[A] = []; // Inicializa cada columna
    for (let B = 0; B < fila; B++) {
      colCeldas[A][B] = blanco; // Les damos el color blanco
    }
  }
  celdas(colCeldas);
}

function celdas(colCeldas) {
  image(img, 0, 0);
  for (let B = 0; B < fila; B++) {
    for (let A = 0; A < cols; A++) {
      let x = derecha + A * tamcel;
      let y = B * tamcel;

      fill(colCeldas[A][B]);
      rect(x, y, tamcel, tamcel);

      let figuraX = x + tamcel / 2;
      let figuraY = y + tamcel / 2;

      fill(negro);

      if (B < 2) {
        // Primeras dos filas: 10 círculos
        ellipse(figuraX, figuraY, tamcel * 0.8, tamcel * 0.8);
      } else if (B >= 2 && B < 5) {
        // Filas 3, 4 y 5: 2 círculos, 6 cuadrados, 2 círculos
        if (A < 2 || A >= 8) {
          ellipse(figuraX, figuraY, tamcel * 0.8, tamcel * 0.8);
        } else {
          rect(figuraX - tamcel * 0.4, figuraY - tamcel * 0.4, tamcel * 0.8, tamcel * 0.8);
        }
      } else if (B >= 5 && B < 8) {
        // Filas 6, 7 y 8: 2 cuadrados, 6 círculos, 2 cuadrados
        if (A < 2 || A >= 8) {
          rect(figuraX - tamcel * 0.4, figuraY - tamcel * 0.4, tamcel * 0.8, tamcel * 0.8);
        } else {
          ellipse(figuraX, figuraY, tamcel * 0.8, tamcel * 0.8);
        }
      } else {
        // Últimas dos filas: 10 cuadrados
        rect(figuraX - tamcel * 0.4, figuraY - tamcel * 0.4, tamcel * 0.8, tamcel * 0.8);
      }
    }
  }
}

function draw() {
  // draw está vacío porque no se necesita actualización continua
}

function mousePressed() {
  // Cambiamos el color de todas las celdas a colores aleatorios
  for (let B = 0; B < fila; B++) {
    for (let A = 0; A < cols; A++) {
      colCeldas[A][B] = dameUnColorAlea();
    }
  }
  celdas(colCeldas);
}

function keyPressed() {
  for (let B = 0; B < fila; B++) {
    for (let A = 0; A < cols; A++) {
      colCeldas[A][B] = blanco; // Restablece el color a blanco
    }
  }
  celdas(colCeldas);
}

function dameUnColorAlea() {
  return color(random(255), random(255), random(255));
}
