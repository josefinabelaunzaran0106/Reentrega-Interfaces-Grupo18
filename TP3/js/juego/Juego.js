"use strict"


let canvas = document.querySelector("#canvas");
let context = canvas.getContext('2d');
canvas.addEventListener('mousedown', mousedown);
document.addEventListener("DOMContentLoaded", clearCanvas);
document.addEventListener("DOMContentLoaded", seleccionarPersonajes);
document.addEventListener("DOMContentLoaded",cargarJuego);
document.addEventListener("DOMContentLoaded",drawTablero);
document.addEventListener("DOMContentLoaded", rellenarTablero);
document.addEventListener("DOMContentLoaded", crearPosicionesFicha);
document.addEventListener("DOMContentLoaded",crearTodasFichas);

canvas.addEventListener('mouseup', mouseUp);
canvas.addEventListener('mousemove',mouseMove); 
let btn4enlinea = document.getElementById("4enlinea");
let btn5enlinea = document.getElementById("5enlinea");
let btn6enlinea = document.getElementById("6enlinea");
let btn7enlinea = document.getElementById("7enlinea");
let turnos = document.querySelector("#turno");

let modoJuego = document.querySelector("#modoJuegoElegir");

let contadortimer = document.querySelector("#contadortimer");

let btnElegirMinutos = document.querySelector("#btnElegirMinutos");

let envio = false;

let cantMinutosMaximo = 2;
    btnElegirMinutos.addEventListener('click', function(){
        let inputvalue = document.querySelector("#minutos").value;
        console.log(inputvalue);
        if(!envio) {
            cantMinutosMaximo = Number(inputvalue);
            console.log(cantMinutosMaximo);
            envio = true;
        }
       
       
    }
) 
let btnReset = document.querySelector("#reset");
btnReset.addEventListener('click', mostrarMensajeReset);
let empato = false;
let segundos = 59;
let minutos = cantMinutosMaximo;

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let mouseDown = false;
let lastClicked = null;
let rellenoficha = '#0000FF';
let fichas = [];
let fichastablero = [];
let posicionesFichas =[];
let widthTablero = 800;
let heightTablero = 440;


// valores que cambiaran en el futuro
let col = 7;
let fila = 6;
let tablero = new Tablero(0,0);
let cantLinea = 4; // cambia
let radioFicha = 28;
let decrementacionYFichaTab = 70;
let aumentoXFicha = 110;
let decrementacionfichasCostados = 20;
let numerofichas = 21;
let anchoFicha = 60;

//Seccion elegir fichas

const jugador1 = "Jugador 1"; //el nombre del jugador no cambia, solo cambia la ruta de la ficha
const jugador2 = "Jugador 2"; //el nombre del jugador no cambia, solo cambia la ruta de la ficha

let contadorPersonaje = 0;
const topeContadorPersonaje = 2;

let primerValor = null; //variables de comparacion para asignar rutas de imagenes
let segundoValor = null;

let imagenesficha = document.querySelectorAll("#imgFicha");
let elegirpersonajes = document.querySelector("#elegirpersonajes");

let rutajug1 = "imgs/fichas/pacman1.png";  //imagenes por defecto
let rutajug2= "imgs/fichas/fantasmita1.png";  //imagenes por defecto
//imagen de tablero

let rutaTablero = "imgs/fondo/fondo3.jpg";
let colorCanvas = "#261818";
let imagenTablero = new Image();
imagenTablero.src = rutaTablero;

imagenTablero.onload = () => {
    drawTablero();
}

// Dibuja el rectángulo del tablero con esquinas redondeadas, sombra y la imagen
function drawTablero() {
    // Coordenadas y dimensiones
    let x = 150, y = 90;
    let width = widthTablero, height = heightTablero;
    let radius = 30;

    // Guarda el estado inicial del contexto
    context.save();

    // Configuración de la sombra
    context.shadowColor = "rgba(255, 255, 255, 0.5)"; // Sombra blanca semitransparente
    context.shadowBlur = 15; // Difuminado de la sombra
    context.shadowOffsetX = 0; // Sin desplazamiento horizontal
    context.shadowOffsetY = 0; // Sin desplazamiento vertical

    // Dibuja un rectángulo con esquinas redondeadas y sombra
    context.beginPath();
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius);
    context.lineTo(x + width, y + height - radius);
    context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    context.lineTo(x + radius, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
    context.closePath();
    context.fillStyle = "#000"; // Relleno negro (no se verá debido a la sombra)
    context.fill();

    // Restaura el estado del contexto (elimina la sombra para la imagen)
    context.restore();

    // Crea un recorte para la imagen
    context.save();
    context.beginPath();
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius);
    context.lineTo(x + width, y + height - radius);
    context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    context.lineTo(x + radius, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
    context.closePath();
    context.clip();

    // Dibuja la imagen dentro del área recortada
    let anchoimagen = imagenTablero.width;
    let altoimagen = imagenTablero.height;
    let aspecto = anchoimagen / altoimagen;
    let ancho = widthTablero;
    let altura = heightTablero;
    context.drawImage(imagenTablero, 550 - ancho / 2, 280 - altura / 2 + 35, ancho, altura);

    // Aplica una capa de atenuación semitransparente
    context.fillStyle = "rgba(0, 0, 0, 0.4)"; // Negro con 40% de opacidad
    context.fillRect(x, y, width, height);

    // Restaura el estado final del contexto
    context.restore();
}




//se encarga de traer la imagen  de la ficha del jugador 1 y jugador 2
function seleccionarPersonajes() {
    imagenesficha.forEach(img => {
        img.addEventListener("click", function () {
            const grupo = img.getAttribute("data-group"); // Obtener el grupo (buenos o malos)

            // Lógica para el primer jugador
            if (primerValor === null && grupo === "buenos") {
                primerValor = img.getAttribute("alt");
                rutajug1 = img.getAttribute("src");
                img.classList.add("seleccionado"); // Agregar borde al seleccionado
                // Eliminar borde de otras imágenes
                img.parentNode.querySelectorAll('img').forEach(sibling => {
                    if (sibling !== img) sibling.classList.remove("seleccionado");
                });
            }
            // Lógica para el segundo jugador
            else if (primerValor !== null && segundoValor === null && grupo === "malos") {
                segundoValor = img.getAttribute("alt");
                rutajug2 = img.getAttribute("src");
                img.classList.add("seleccionado"); // Agregar borde al seleccionado
                // Eliminar borde de otras imágenes
                img.parentNode.querySelectorAll('img').forEach(sibling => {
                    if (sibling !== img) sibling.classList.remove("seleccionado");
                });

                // Pausa de 1 segundo antes de proceder
                setTimeout(function () {
                    // Ambos jugadores seleccionados, proceder
                    if (primerValor && segundoValor) {
                        imagenesficha.forEach(img => img.removeEventListener("click", seleccionarPersonajes));
                        elegirpersonajes.classList.remove("elegirpersonajes");
                        elegirpersonajes.classList.add("hidden");
                        modoJuego.classList.remove("hiddendos");
                        modoJuego.classList.add("tablerojuego");
                        modoJuego.classList.add("modosJuego");
                        btnElegirMinutos.classList.remove("hidden"); // Muestra el botón
                        btnElegirMinutos.classList.add('btn', 'colorblanco', 'btnañadiralcarro', 'h4', 'tercer-hover-boton', 'btnabsoluto');
                        minutos = cantMinutosMaximo - 1;
                        segundos = 59;
                        turnos.classList.add("resaltado");
                        turnos.classList.remove("hidden");

                        if (!envio) {
                            cantMinutosMaximo = 2; // Si no hizo clic en enviar, setea 2 minutos por defecto
                        }
                    }
                }, 500); // 500 milisegundos = 1 segundo de pausa
            }
        });
    });
}






//se encarga de crear cada tablero depende de cual elija el usuario
function cargarJuego() {
    function manejarSeleccion(tableroId, crearXenLineaArgs) {
        // Obtener el botón correspondiente
        const btn = document.getElementById(tableroId);

        btn.addEventListener('click', function () {
            // Agregar clase para marcar el tablero seleccionado
            btn.classList.add('seleccionado');

            // Esperar 500ms antes de continuar
            setTimeout(() => {
                btn.classList.remove('seleccionado'); // Remover la clase después de medio segundo

                // Resto del flujo del juego
                reset();
                if (mensaje == " ") {
                    timer();
                }
                contadortimer.classList.remove("hidden");
                contadortimer.classList.add("timer");
                modoJuego.classList.remove("modosJuego");
                modoJuego.classList.add("hiddendos");
                crearXenLinea(...crearXenLineaArgs);
                clearCanvas();
                drawTablero();
                rellenarTablero();
                crearPosicionesFicha();
                crearTodasFichas();
            }, 500);
        });
    }

    // Asociar cada botón a su acción y parámetros
    manejarSeleccion("4enlinea", [7, 6, 4, 28, 70, 110, 20, 21, 60]);
    manejarSeleccion("5enlinea", [8, 7, 5, 28, 62, 100, 15, 28, 60]);
    manejarSeleccion("6enlinea", [9, 8, 6, 26, 55, 88, 12, 36, 55]);
    manejarSeleccion("7enlinea", [10, 9, 7, 20, 49.5, 80, 9.5, 45, 42]);
}




//crea el tablero con la cantidad de fichas  que se elijan y las fichas de arriba y de los jugadores
function crearXenLinea(col,fila,cant,radio,decrementacionYTab,aumentoX,decrementacionCostados,nrofichas,ancho){
    
    modoJuego.classList.remove("modosJuego");
    modoJuego.classList.add("hidden");
    elegirpersonajes.classList.remove("elegirpersonajes");
    elegirpersonajes.classList.add("hidden");
    contadortimer.classList.remove("hidden");
    contadortimer.classList.add("timer");

    turnos.innerHTML = "Tira una ficha para empezar";

    fichas = []; //resetea la cantidad de fichas al cambiar entre modos de juego
    posicionesFichas = []; //resetea la cantidad de posiciones al cambiar entre modos de juego
    tablero = new Tablero(fila,col);
    cantLinea = cant; // cambia
    radioFicha = radio;
    decrementacionYFichaTab = decrementacionYTab;
    aumentoXFicha = aumentoX;
    decrementacionfichasCostados = decrementacionCostados;
    numerofichas = nrofichas;
    anchoFicha = ancho;
    
}

//rellena el tablero con las fichas blancas
function rellenarTablero(){
    let decrementacion = 0;
    let aumentox = 0;
    for (let j = 0; j < tablero.getColumnas();j++){
        aumentox = aumentox + aumentoXFicha;
        decrementacion = 0;
        fichastablero[j] = [];
        for (let i = 0; i < tablero.getFilas(); i++){
            decrementacion = decrementacion - decrementacionYFichaTab;
            crearFichaTab(110,30,radioFicha,"imgs/fichas/fichablanca.png",(decrementacion-35), aumentox,j,i,false,anchoFicha);  
        }
    }
    
}

// crea la ficha individual del tablero, llamando a crear ficha de la clase ficha
function crearFichaTab(posX, posY, radio, fill, decrementacion, aumentox,j,i,movible,anchoFicha) {
    posY = posY - decrementacion;
    posX = posX + aumentox;
    let ficha = new Ficha(posX, posY, radio, fill, context,null,movible,anchoFicha);
    
    fichastablero[j][i] = ficha;
    ficha.draw();
}


//crea la ficha de los jugadores 1 y 2
function crearFicha(posX, posY, radio, fill, decrementacion, aumentox, arr,jugador,movible,anchoFicha) {
    posY = posY - decrementacion;
    posX = posX + aumentox;
    let ficha = new Ficha(posX, posY, radio, fill, context,jugador,movible,anchoFicha);
    arr.push(ficha);
    ficha.draw();
}


//dibuja las fichas del arreglo de posiciones, las de los costados, y la de los tableros
function drawAllFichas(){
    clearCanvas();
    drawTablero();
   
    for (let j = 0; j < tablero.getColumnas(); j++){ //mejorar 
        for (let i = 0; i < tablero.getFilas();i++){
            fichastablero[j][i].setAncho(anchoFicha);
            fichastablero[j][i].draw();
        }
    }

    for (let i = 0; i < fichas.length; i++){
        fichas[i].setAncho(anchoFicha);
        fichas[i].draw();
    }

    for (let i = 0; i < posicionesFichas.length; i++){
        posicionesFichas[i].setRadio(radioFicha);
        posicionesFichas[i].drawStroke();
    }

}

//se encarga de crear las fichas del jugador 1 y del jugador2
function crearTodasFichas(){
    fichas = [];
    let decrementacion = 0;
    for (let i = 0; i < numerofichas; i++){
        decrementacion = decrementacion - decrementacionfichasCostados;
        crearFicha(70,50,radioFicha,rutajug1,decrementacion,0,fichas,jugador1,true,anchoFicha);
        crearFicha(1020,50,radioFicha,rutajug2,decrementacion,0,fichas,jugador2,true,anchoFicha);  
    }   
    
}

//recorre todo el arreglo de fichas de jugadores y retorna si hay alguna seleccionada.
function encontrarFiguraClickeada(x,y){
    for (let i = 0; i < fichas.length; i++){
        let ficha = fichas[i];
        if (ficha.estaSeleccionado(x,y)){
            return ficha;
        }
    }
}

// Ajusta las coordenadas en base al tamaño del canvas y al zoom
function ajustarCoordenadas(event) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;

    return { x, y };
}

// Se activa cuando el usuario hace clic en algún lugar del canvas
function mousedown(e) {
    mouseDown = true;

    // Obtener las coordenadas ajustadas
    const { x, y } = ajustarCoordenadas(e);

    // Buscar la ficha clickeada
    let figuraClickeada = encontrarFiguraClickeada(x, y);

    if (figuraClickeada != null) { 
        lastClicked = figuraClickeada;
    } else { 
        lastClicked = null;
    }
}

// Se activa cuando el usuario mueve una ficha
function mouseMove(e) {
    if (mouseDown && lastClicked != null && lastClicked.getMovible()) {
        // Obtener las coordenadas ajustadas
        const { x, y } = ajustarCoordenadas(e);

        // Actualizar posición de la ficha
        lastClicked.setPosition(x, y);

        // Redibujar todas las fichas
        drawAllFichas();
    }
}

// Se activa cuando el usuario suelta una ficha
function mouseUp() {
    mouseDown = false;

    if (lastClicked != null) {
        let col = findCol(lastClicked);
        let fila = encontrarFila(col);

        if (fila != -1) {
            tablero.casillero[col][fila] = lastClicked;
            setearPosicion(lastClicked, col, fila);
            lastClicked.setMovible(false);
            verificarTurnos();

            hizoXenLinea(col, fila);
        } else if (lastClicked.getMovible()) {
            volverPosInicial(lastClicked);
        }
    }
}

//verifica cada vez que se tira una ficha si el usuario gano o no.
function hizoXenLinea(col,fila){
    let contador = 0;
    let contador2 = 0;
    let contador3=0;
    let contador4=0;
    let jugador = lastClicked.getNombreJugador();
    switch(true) {
        case hizoXenLineaHorizontal(col,fila,contador,contador2,jugador): 
            minutos = cantMinutosMaximo-1;
            segundos = 59;
            stop = true;
            showMensaje();
            break;
        case hizoXenLineaVertical(col,fila,contador,jugador):
            minutos = cantMinutosMaximo-1;
            segundos = 59;
            stop = true;
            showMensaje();
            break;
        case hizoXenLineaDiagonal(col,fila,contador,contador2,contador3,contador4,jugador):
            minutos = cantMinutosMaximo-1;
            segundos = 59;
            stop = true;
            showMensaje(); 
            break;
        default:
            contador = 0; //se resetea, ej se pusieron 2 fichas nada mas, por lo que no contó 4 a su alrededor
            contador2 = 0;
            contador3 = 0;
            contador4 = 0;
            break;
    }
}


// se encarga de contar a partir de la ultima ficha lanzada a la derecha y retorna la cantidad de fichas que sumo el ultimo jugador
function  verificarHorizontalDerecha(col,fila,contador2, jugador){
    let contveces = 0;
    let j = col;
    while (j < tablero.getColumnas() && contveces < cantLinea){
        if (tablero.casillero[col+contveces][fila] != null && tablero.casillero[col+contveces][fila].getNombreJugador() === jugador){
            contador2++;
            if (contador2 == cantLinea){
                return Number(contador2);
            } 
            else if (tablero.casillero[col+contveces][fila] == null || tablero.casillero[col+contveces][fila].getNombreJugador() !== jugador){
                return Number(0);
            }
        }
        contveces++;
        j++
    }
}

// se encarga de ver si el jugador hizo x en linea horizontal.
function hizoXenLineaHorizontal(col, fila, contador, contador2,jugador) {

    let contadorIzquierda = verificarHorizontalIzquierda(col, fila, contador, jugador);
    let contadorDerecha = verificarHorizontalDerecha(col, fila, contador2, jugador);

    if (contadorIzquierda == cantLinea) {
        return true;
    } else if (contadorDerecha == cantLinea) {
        return true;
    } else {
        if (sumoXenLinea(fila,jugador)) {
            return true;
        }
    }
}


//se fija recorriendo el tablero si la suma horizontal valio x en linea
function sumoXenLinea(fila,jugador){
    let cont = 0;
    for (let i = 0; i < tablero.getColumnas(); i++ ){
        if (tablero.casillero[i][fila] != null && tablero.casillero[i][fila].getNombreJugador() === jugador){
            cont++;
            if (cont == cantLinea){
                return true;
            }
        }
        else {
            cont = 0;
        }
    }
    return false;
}


//verifica a partir de la ultima ficha lanzada si el jugador sumo x en linea a izquierda
function verificarHorizontalIzquierda(col,fila,contador,jugador){

    let i = col;
    let contveces = 0;
    while ( i>0 && contveces < cantLinea){
        if (tablero.casillero[col-contveces][fila] != null && tablero.casillero[col-contveces][fila].getNombreJugador() === jugador){
            contador++;  
            if (contador == cantLinea){
                return Number(contador);
            } 
            else if (tablero.casillero[col-contveces][fila] == null || tablero.casillero[col-contveces][fila].getNombreJugador() !== jugador){
                return Number(0);
            }
        }
        contveces++;
        i--;
    }

}

//verifica que hayan 4 fichas del mismo jugador juntas en vertical
function hizoXenLineaVertical(col, fila, contador,jugador) {
 
    if (hizoVerticalArriba(col,fila,contador,jugador) == cantLinea){
        return true;
    }
}

//verifica que hayan 4 fichas del mismo jugador juntas en vertical
function hizoVerticalArriba(col,fila,contador,jugador){
    let i = fila;
    let cantveces = 0;
    while ( i < tablero.getFilas() && cantveces < cantLinea){
        if (tablero.casillero[col][fila+cantveces] != null && tablero.casillero[col][fila+cantveces].getNombreJugador() === jugador){
            contador++;
            if (contador == cantLinea){
                return Number(contador);
            }
        }
        cantveces++;
        i++;
    }
}

//verifica que hayan 4 fichas del mismo jugador juntas en diagonal mirando todas las diagonales
function hizoXenLineaDiagonal(col,fila,contador,contador2,contador3, contador4, jugador){
    

    //diagonal normal 

    let j = col;
    let i = fila;
    let cantveces = 0;
    while (j < tablero.getColumnas() && i < tablero.getFilas() && cantveces < cantLinea){
        if (tablero.casillero[col+cantveces][fila+cantveces] != null && tablero.casillero[col+cantveces][fila+cantveces]. getNombreJugador() == jugador){
            contador++;
            if (contador == cantLinea){
                return true;
            }
        }
        j++;
        i++;
        cantveces++;
    }


   
    //diagonal normal abajo

    let j2 = col;
    let i2 = fila;
    cantveces = 0;

    while (j2 >= 0 && i2 >= 0 && cantveces < cantLinea){
        if (tablero.casillero[col-cantveces][fila-cantveces] != null && tablero.casillero[col-cantveces][fila-cantveces]. getNombreJugador() == jugador){
            contador2++;
            
            if (contador2 == cantLinea){
                return true;
            }
        }
        j2--;
        i2--;
        cantveces++;
    }

    if(contador-1 + contador2 == cantLinea) { //suma los resultados parciales de las dos diagonales normales
        return true;
    }


    


    //diagonal invertida

    let j3 = col;
    let i3 = fila;
    cantveces = 0;
    while (j3 >= 0  && i3 < tablero.getFilas() && cantveces < cantLinea){
        if (tablero.casillero[col-cantveces][fila+cantveces] != null && tablero.casillero[col-cantveces][fila+cantveces]. getNombreJugador() == jugador){
            contador3++;
            if (contador3 == cantLinea){
                return true;
            }
        }
        j3--;
        i3++;
        cantveces++;
    }



    //diagonal invertida abajo


    let j4 = col;
    let i4 = fila;
    cantveces = 0;
    while (j4 < tablero.getColumnas() && i4>= 0 && cantveces < cantLinea){
        if (tablero.casillero[col+cantveces][fila-cantveces] != null && tablero.casillero[col+cantveces][fila-cantveces]. getNombreJugador() == jugador){
            contador4++;
            if (contador4 == cantLinea){
                return true;
            }
        }
        j4++;
        i4--;
        cantveces++;
    }

    if(contador3-1 + contador4 == cantLinea) {  //suma los resultados parciales de las dos diagonales invertidas
        return true;
    }

    return false;
}

//vuelve x ficha a su posicion inicial, por ejemplo si tira la ficha en un lugar ajeno al tablero
function volverPosInicial(nueva) {
    let duracion = 700;
    const posInicialX = nueva.getPosIniX();
    const posInicialY = nueva.getPosIniY();
    const posXActual = nueva.getPosX();
    const posYActual = nueva.getPosY();
    const pasos = 60; // Número de pasos en la animación
    const intervalo = duracion / pasos; // Intervalo entre pasos

    let paso = 0;

    const animacionInterval = setInterval(() => {
        if (paso >= pasos) {
            clearInterval(animacionInterval);
            nueva.setPosX(posInicialX);
            nueva.setPosY(posInicialY);
            nueva.draw();
            clearCanvas();
            drawTablero();
            drawAllFichas();
            limpiarTodoCanvas();
            mouseDown = false;
        } else {
            paso++;
            const progreso = paso / pasos;
            const posXAnimacion = posXActual + (posInicialX - posXActual) * progreso;
            const posYAnimacion = posYActual + (posInicialY - posYActual) * progreso;
            nueva.setPosX(posXAnimacion);
            nueva.setPosY(posYAnimacion);
            nueva.draw();
            limpiarTodoCanvas();
        }
    }, intervalo);
}


//verifica los turnos de modo que juegue el jugador 1 y luego el 2 o viceversa
function verificarTurnos(){
    let jugador = lastClicked.getNombreJugador(); // obtiene el nombre de cualquier jugador
    if (!lastClicked.getMovible()){ // si no es movible la ultima
        for (let i = 0; i < fichas.length; i++){ // si el nombre del jugador coincide con x fichas las inhabilita
            if (fichas[i].getNombreJugador() === jugador) { 
                    fichas[i].setMovible(false); 
            }
            else { //si no las habilita para jugar
                if (!EstaEnTablero(fichas[i])) {
                    fichas[i].setMovible(true);
                }
                
            }
        }   
    }

    
    if(jugador == jugador1) {
        turnos.innerHTML = " Turno: "+jugador2;
    }
    else {
        turnos.innerHTML = " Turno: "+jugador1;
    }
}

//verifica que x ficha se encuentre en el tablero
function EstaEnTablero(ficha){
    let posXficha = ficha.getPosX();
    let posYficha = ficha.getPosY();
    let esta = false;
    for (let j = 0; j < tablero.getColumnas();j++){
        for (let i = 0; i < tablero.getFilas();i++){
   
            if (posXficha ==fichastablero[j][i].getPosX() && posYficha == fichastablero[j][i].getPosY()){
                esta = true;
            }
        }
    }
    return esta;
}

//coloca las fichas desde que se tiran arriba del tablero hacia abajo en la ubicacion en la que debe ir.
function setearPosicion(nueva, col, fila) {
    let duracion = 600; // Velocidad de la animación
    const fichaTablero = fichastablero[col][fila];
    const posXInicial = nueva.getPosX();
    const posYInicial = nueva.getPosY();
    const posXFinal = fichaTablero.getPosX();
    const posYFinal = fichaTablero.getPosY();
    const pasos = 60; // Iteraciones de la animación
    const intervalo = duracion / pasos; // Intervalo entre pasos

    let paso = 0;
    let reboteActivo = false; // Marca para saber si estamos en la fase de rebote
    let alturaRebote = 50; // Altura del rebote inicial

    const animacionInterval = setInterval(() => {
        if (paso >= pasos && !reboteActivo) { // Si completó la caída y aún no rebota
            reboteActivo = true; // Activamos el rebote
            paso = 0; // Reiniciamos los pasos para la fase de rebote
        }

        if (reboteActivo) { // Fase de rebote
            if (alturaRebote < 2) { // Si el rebote es muy pequeño, detiene la animación
                clearInterval(animacionInterval);
                nueva.setPosX(posXFinal);
                nueva.setPosY(posYFinal);
                nueva.setMovible(false);
                nueva.draw();
                limpiarTodoCanvas();
            } else {
                paso++;
                const progresoRebote = paso / pasos;
                const posYRebote = posYFinal - Math.abs(Math.sin(progresoRebote * Math.PI)) * alturaRebote;
                
                nueva.setPosY(posYRebote);
                nueva.draw();
                limpiarTodoCanvas();

                if (progresoRebote >= 1) { // Si un rebote completo ha terminado
                    paso = 0; // Reinicia el paso para el siguiente rebote
                    alturaRebote *= 0.5; // Reduce la altura del siguiente rebote
                }
            }
        } else { // Fase de caída
            paso++;
            const progreso = paso / pasos;
            const posXAnimacion = posXInicial + (posXFinal - posXInicial) * progreso;
            const posYAnimacion = posYInicial + (posYFinal - posYInicial) * progreso;

            nueva.setPosX(posXAnimacion);
            nueva.setPosY(posYAnimacion);
            nueva.draw();
            limpiarTodoCanvas();
        }
    }, intervalo);
}

//limpia el canvas y vuelve a dibujar el tablero y todas las fichas
function limpiarTodoCanvas(){
    clearCanvas();
    drawTablero();
    drawAllFichas();
}

//encuentra la columna donde se tiró la ficha 
function findCol(nueva){
    let diferencia = 40; //tiene un margen de 40 px para errar...
    let valory = 50;
    let posValorValidoY = 0; //empieza en el techo del canvas
    let posXnueva = nueva.getPosX();
    let posYnueva = nueva.getPosY();
    let encontro = false;
    let posFichaX = 0; //posiciones donde se pueden colocar fichas
    let posFichaY = 0;
 

    for(let i = 0; i < posicionesFichas.length; i++) { 
        posFichaX = posicionesFichas[i].getPosIniX();
        posFichaY = posicionesFichas[i].getPosIniY();

        if(posXnueva >= posFichaX - 30 && posXnueva < posFichaX + diferencia 
            && posYnueva > posValorValidoY && posYnueva<=valory) { //mira si coincide con alguna de las posiciones de las fichas
            encontro = true;
            return i;
        }
    }
    if(!encontro && nueva.estaSeleccionado(posXnueva,posYnueva)) {
        volverPosInicial(nueva);
    }
    
}



//encuentra la fila donde la ficha se colocará en base a la columna ya encontrada(si la encontró)
function encontrarFila(columna) {

    let fila = tablero.getFilas()-1;


    //ARREGLA BUG READING 5 Ya que la columna no esta definida cuando clickeamos y soltamos una ficha sin ponerla en el tablero
    if(columna != undefined) { 
        for (let i = fila; i >= 0; i--) {
            if (tablero.casillero[columna][i] == null) {
                return i;
            }
        }
    }

    return -1; // Si no se encuentra una vacia devuelve -1.
}

//limpia el canvas
function clearCanvas(){

    // context.fillStyle = "#C79A6B";
    context.fillStyle = "#000911";
    context.fillRect(0,0,canvasWidth,canvasHeight);
}

//crea las posiciones donde las fichas pueden tirarse para colocarse en el tablero
function crearPosicionesFicha(){
    let aumentox = 0;
    for (let i = 0; i < tablero.getColumnas(); i++){
        aumentox = aumentox + aumentoXFicha;
        crearFichaStroke(110,30,radioFicha,"#00FF00",0,aumentox, posicionesFichas,null,false,anchoFicha);  
    }
}

//crea las fichas especiales donde estan las ubicaciones disponibles para tirar la ficha
function crearFichaStroke(posX, posY, radio, fill, decrementacion, aumentox, arr,anchoFicha) {
    posY = posY - decrementacion + 10; // bajo 20 el lugar para dejar lass fichas
    posX = posX + aumentox;
    let ficha = new Ficha(posX, posY, radio, fill, context,0, anchoFicha);
    arr.push(ficha);
    ficha.drawStroke();
}

let timerDom = document.querySelector("#timer");
timerDom.innerHTML = " ";
let mensaje = " ";
let intervalID;

let btnaceptarReinicio = document.querySelector("#reiniciar");
let btnContinuarJugando = document.querySelector("#continuar");
let mensajeReinicio = document.querySelector("#mensajeReinicio");

btnaceptarReinicio.addEventListener('click', function (){
    mensajeReinicio.classList.add("hidden");
    segundos =59; //para que cuando se reinicie tambien se reinicie el timer
    minutos = cantMinutosMaximo-1;
    stop = false;
    reset();
});

btnContinuarJugando.addEventListener('click', function (){
    mensajeReinicio.classList.add("hidden");
    stop = false;
})

//muestra el mensaje de reset en pantalla
function mostrarMensajeReset(){
    stop = true;
    mensajeReinicio.classList.remove("hidden");
    mensajeReinicio.classList.add("mensaje");
}

function reset() {
    // Reestablece el estado del juego si estaba pausado
    juegoPausado = false;
    stop = false; // Reanudar el timer
    btnPausar.innerHTML = '<img src="imgs/iconos/pausa.png" id="imagenpausar">Pausar';
    tableroPausa.classList.remove('pausado'); // Quitar clase de pausa del tablero
    envio = false;
    // Mostrar primero el menú de elegir modo de juego al reiniciar partida
    timerDom.innerHTML = " ";
    elegirpersonajes.classList.add("elegirpersonajes");
    elegirpersonajes.classList.remove("hidden");
    modoJuego.classList.remove("modosJuego");
    modoJuego.classList.add("hidden");
    modoJuego.classList.remove("elegirpersonajes");
    contadortimer.classList.remove("timer");
    contadortimer.classList.add("hidden");
    btnElegirMinutos.classList.add("hidden"); // Lo oculta al btn y luego lo muestra
    turnos.innerHTML = " ";
    turnos.classList.remove("hidden");
    turnos.classList.add("resaltado");
    btnElegirMinutos.classList.remove('btn', 'colorblanco', 'btnañadiralcarro', 'h4', 'tercer-hover-boton', 'btnabsoluto');

    stop = false;
    minutos = cantMinutosMaximo - 1;
    segundos = 59;

    // Limpiar el tablero
    if (tablero.getColumnas() > 0 && tablero.getFilas() > 0) {
        for (let j = 0; j < tablero.getColumnas(); j++) {
            for (let i = 0; i < tablero.getFilas(); i++) {
                if (tablero.casillero[j][i] != null) {
                    tablero.casillero[j][i] = null; // Seteamos null para que el tablero se vuelva vacío.
                }
            }
        }
    }

    // Restablecer posición de las fichas
    if (fichas.length > 0) {
        for (let i = 0; i < fichas.length; i++) {
            fichas[i].setMovible(true);
            let posinix = fichas[i].getPosIniX();
            let posiniy = fichas[i].getPosIniY();
            fichas[i].setPosition(posinix, posiniy); // Vuelve bruscamente de momento a la posición original
            fichas[i].draw();
        }
    }

    if (fichas.length > 0) {
        clearCanvas();
        drawTablero();
        drawAllFichas();
    }

    // Restablecer las selecciones de los personajes
    primerValor = null;
    segundoValor = null;

    // Eliminar la clase 'seleccionado' de todas las imágenes de fichas
    imagenesficha.forEach(img => img.classList.remove("seleccionado"));

    // Volver a habilitar los eventos de clic para permitir nuevas selecciones
    imagenesficha.forEach(img => img.addEventListener("click", seleccionarPersonajes));
}


let clickeo = false;
let btnPausar = document.getElementById("btnpausar");

let imagenPausar = document.getElementById("imagenpausar");


let juegoPausado = false; // Estado inicial
const tableroPausa = document.getElementById('canvas'); // Cambia 'id-del-tablero' al ID de tu tablero


btnPausar.addEventListener('click', function () {
    if (!juegoPausado) {
        // Pausar el juego
        juegoPausado = true;
        stop = true; // Detener el timer
        btnPausar.innerHTML = '<img src="imgs/iconos/play.png" id="imagenpausar">Reanudar';
        tableroPausa.classList.add('pausado'); // Añadir clase de pausa al tablero
    } else {
        // Reanudar el juego
        juegoPausado = false;
        stop = false; // Reanudar el timer
        btnPausar.innerHTML = '<img src="imgs/iconos/pausa.png" id="imagenpausar">Pausar';
        tableroPausa.classList.remove('pausado'); // Quitar clase de pausa del tablero
    }
});



let stop = false; //sirve para frenar el timer cuando esta el mensaje de reinicio.
let mensajestop;

//muestra un timer en pantalla para ver el tiempo que queda disponible en la partida del juego
function timer() {
    timerDom.innerHTML = " ";
        // Usar setInterval en lugar de setTimeout para ejecutar una función cada segundo
        intervalID =  setInterval(function(){
            if (!stop){
                segundos--; // Incrementar el contador de segundos
            }
            if (minutos >= 0 && minutos < 10 && segundos < 10){
                mensaje =  0 + "" + minutos + ":" + 0 + segundos;
                timerDom.innerHTML = mensaje;
            }
            else if (segundos > 10 && minutos < 10){
                mensaje =  0 + "" + minutos + ":" + segundos;
                timerDom.innerHTML = mensaje;
            } 
            else {
                mensaje =  minutos + ":" + segundos;
                timerDom.innerHTML = mensaje;
            }
                
            if (segundos == 0 && minutos > 0 && !stop) {
                minutos--;
                segundos = 59;
            }
            if (minutos == 0 && segundos == 0 && !stop){
                //clearInterval(intervalID);
                stop = true;
                empato = true;
                showMensaje();
                segundos =59; //para que cuando se reinicie tambien se reinicie el timer
                minutos = cantMinutosMaximo-1; 
            }
        }, 1000);
}


let mensajeGanador = document.querySelector("#mensajeGanador");
let opacidad = document.querySelector("#opacidad");
let divGanador = document.querySelector("#divGanador");
let botonReset = document.querySelector("#botonReset");

//muestra mensaje del ganador cuando hay 4 en linea
function showMensaje(){
    mensajeGanador.innerHTML = " ";
    opacidad.classList.remove("hidden");
    opacidad.classList.add("opacidad")
    divGanador.classList.remove("hidden");
    divGanador.classList.add("divGanador");
    mensajeGanador.classList.remove("hidden");
    mensajeGanador.classList.add("textoGanador");
    // Crear el audio y establecer la ruta del archivo
    const musicaVictoria = new Audio('videos/pacman-music.mp3');
    const musicaEmpate = new Audio('videos/pacman-dies.mp3');
    if (!empato){
        mensajeGanador.innerHTML += "Gano el " + lastClicked.getNombreJugador();
         // Reproducir la música si alguien ganó
         musicaVictoria.play();
    }
    else {
        mensajeGanador.innerHTML += "Empate";
        empato = false;
        musicaEmpate.play();
    }
    botonReset.addEventListener('click', function(){
        opacidad.classList.add("hidden");
        divGanador.classList.add("hidden");
        divGanador.classList.remove("divGanador");
        mensajeGanador.classList.add("hidden");
        reset();
   
        // Detener la música al hacer reset, si está sonando
        musicaVictoria.pause();
        musicaEmpate.pause();  // Detener la música de empate
        musicaVictoria.currentTime = 0;  // Reiniciar la música de victoria
        musicaEmpate.currentTime = 0;    // Reiniciar la música de empate
    })

}