const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataques");
const sectionReiniciar = document.getElementById("reiniciar");
const botonMedievalJugador = document.getElementById("boton-Medieval");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonTierra = document.getElementById("boton-tierra");
const botonReiniciar = document.getElementById("boton-reiniciar");
const sectionSeleccionarMedieval = document.getElementById("seleccionar-Medieval");
const inputHipodoge = document.getElementById("hipodoge");
const inputCapipepo = document.getElementById("capipepo");
const inputRatigueya = document.getElementById("ratigueya");
const spanMedievalJugador = document.getElementById("Medieval-jugador");
const spanMedievalEnemigo = document.getElementById("Medieval-enemigo");
const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");
const sectionMensaje = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");

let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";
  sectionReiniciar.style.display = "none";
  botonMedievalJugador.addEventListener("click", seleccionarMedievalJugador);
  botonFuego.addEventListener("click", ataqueFuego);
  botonAgua.addEventListener("click", ataqueAgua);
  botonTierra.addEventListener("click", ataqueTierra);
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMedievalJugador() {
  sectionSeleccionarMedieval.style.display = "none";
  sectionSeleccionarAtaque.style.display = "flex";

  if (inputHipodoge.checked) {
    spanMedievalJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMedievalJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanMedievalJugador.innerHTML = "Ratigueya";
  } else {
    alert("No has seleccionado a ningun Medieval");
  }

  seleccionarMedievalEnemigo();
}

function seleccionarMedievalEnemigo() {
  let MedievalAleatorio = aleatorio(1, 3);
  
  if (MedievalAleatorio == 1) {
    spanMedievalEnemigo.innerHTML = "Hipodoge";
  } else if (MedievalAleatorio == 2) {
    spanMedievalEnemigo.innerHTML = "Capipepo";
  } else if (MedievalAleatorio == 3) {
    spanMedievalEnemigo.innerHTML = "Ratigueya";
  }

  seleccionarMedievalEnemigo();
}

function ataqueFuego() {
  ataqueJugador = "Fuego";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "Agua";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "Tierra";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "Fuego";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "Agua";
  } else {
    ataqueEnemigo = "Tierra";
  }

  combate();
}

function combate() {
  
  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("EMPATE");
  } else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("PERDISTE");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }

  revisarVidas();
}

function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal("FELICITACIONES! GANASTE");
  } else if (vidasJugador == 0) {
    crearMensajeFinal("Lo siento, PERDISTE");
  }
}

function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensaje.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  

  sectionMensaje.innerHTML = resultadoFinal;

  
  botonFuego.disabled = true;
  
  botonAgua.disabled = true;
  
  botonTierra.disabled = true;

 
  sectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (min, max + 1) + min);
}

window.addEventListener("load", iniciarJuego);
