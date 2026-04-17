let canvas=document.getElementById('areaJuego');
let ctx=canvas.getContext('2d');

const ALTURA_SUELO=40;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;

function dibujarSuelo(){
    ctx.fillStyle="white";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle="brown";
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}
function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarPantalla();
    
}
function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla();
}
function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}
function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
