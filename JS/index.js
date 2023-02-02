let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataques");
  sectionSeleccionarAtaque.style.display = "none";

  let sectionReiniciar = document.getElementById('reiniciar');
  sectionReiniciar.style.display = "none";

  let botonMedievalJugador = document.getElementById("boton-Medieval");
  botonMedievalJugador.addEventListener("click", seleccionarMedievalJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);

  let botonReiniciar = document.getElementById("boton-reiniciar");
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMedievalJugador() {
  let sectionSeleccionarMedieval = document.getElementById("seleccionar-Medieval");
  sectionSeleccionarMedieval.style.display = "none";

  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataques");
  sectionSeleccionarAtaque.style.display = "flex";

  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMedievalJugador = document.getElementById("Medieval-jugador");

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
  let spanMedievalEnemigo = document.getElementById("Medieval-enemigo");

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
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");

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
  let sectionMensaje = document.getElementById("resultado");
  let ataquesDelJugador = document.getElementById("ataques-del-jugador");
  let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");

  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensaje.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  let sectionMensaje = document.getElementById("resultado");

  sectionMensaje.innerHTML = resultadoFinal;

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true;
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true;
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true;

  let sectionReiniciar = document.getElementById('reiniciar');
  sectionReiniciar.style.display = 'block';
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (min, max + 1) + min);
}

window.addEventListener("load", iniciarJuego);
