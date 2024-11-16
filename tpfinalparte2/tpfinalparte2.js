// comision 1 Jose Luis Bugiolachi
// Martin Bonoris y Santino Albarracin
// https://youtu.be/2IJEr7QCagQ
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
