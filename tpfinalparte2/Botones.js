class Botones { 
  constructor(juego) {
    this.juego = juego;
    this.botonReiniciar = createButton('Reiniciar');

    this.botonReiniciar.position(width / 2 - 50, height / 2 + 30);
    this.botonReiniciar.size(100, 40);

    this.botonReiniciar.mousePressed(() => this.reiniciarJuego());
    this.botonReiniciar.hide(); 
  }
  
  gestionarBotones() {
    if (this.juego.juegoTerminado && !this.juego.juegoGanado) {
      this.botonReiniciar.show();
    } else if (this.juego.juegoGanado) {
      
    }
  }
  
  reiniciarJuego() {
    this.juego.nivel = 1;
    this.juego.reiniciar();
    this.juego.juegoGanado = false;
    this.botonReiniciar.hide(); 
    
   
    
    }
  }
  
  moverJugador() {
    if (keyIsDown(UP_ARROW)) {
      this.juego.jugador.y -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.juego.jugador.y += 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.juego.jugador.x += 5;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.juego.jugador.x -= 5;
    }
  }
}
