//comisiòn 1 Jose Luis Bugiolachi
//Martìn Bonoris y Santino Albarracin
//https://youtu.be/RK2txiFMXQg?feature=shared


let juego;

function setup() {
  createCanvas(640, 480);  
  juego = new Juego(); 
}

function draw() {
  background(0);  
  juego.actualizar();  
  juego.mostrar();  
}
