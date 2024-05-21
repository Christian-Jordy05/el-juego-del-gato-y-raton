

let cuad1 = document.getElementById("cuadro0");
let cuad2 = document.getElementById("cuadro1");
let cuad3 = document.getElementById("cuadro2");
let cuad4 = document.getElementById("cuadro3");
let cuad5 = document.getElementById("cuadro4");
let cuad6 = document.getElementById("cuadro5");
let cuad7 = document.getElementById("cuadro6");
let cuad8 = document.getElementById("cuadro7");
let cuad9 = document.getElementById("cuadro8");
let mensaje = document.getElementById("mensaje");

// la matriz donde se van colocando las X y O de los jugadores
let matriz = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let cuadro = [cuad1,cuad2,cuad3,cuad4,cuad5,cuad6,cuad7,cuad8,cuad9]

console.log(cuadro)
//  controla los turnos del jugadores (X o O)

let gato = true; // Indica si es el turno del jugador X
let turno = true; // verifica si el turno es correcto

// la funcion para actualizar el estado del juego y verificar si hay un ganador o empate borrar
//esta funcion verifica si hay un empate o ganador
function turnos() {
    
    if (primeraFila(matriz) || 
        segundaFila(matriz) || 
        terceraFila(matriz) ||
        primeraColumna(matriz) || 
        segundaColumna(matriz) || 
        terceraColumna(matriz) ||
        diagonal(matriz) ||
        diagonal2(matriz)) 
         {
        alert("ganaste");
        // reiniciarJuego(); 
    } else if (empate(matriz)) {
        alert("empate"); 
        // reiniciarJuego(); 
    }
}
function actualizarCuadro(cuadro,goku,cr7) {
    // aqui verifica que si el codigo es valido y el cuadro esta vacio
    if (turno) {
        if (matriz[goku][cr7] === "") {
            // Si es el turno de X
            if (gato) {
                cuadro.innerHTML = 'X';

                 // muestra una X en el cuadro
                matriz[goku][cr7] = 'X'; // muetra una X en la matriz
                mensaje.innerText = "turno del Bot"; // muestra el mensaje para el turno de la IA
                gato = false; // y si fue turno de X que va hacer true entonces true lo convierte false para que la seguiente sea O

                
                let valorAle= Math.floor(Math.random()*8)
                document.getElementById("cuadro"+valorAle).innerHTML="O"
            } else {
                
                // Si es el turno de O
                cuadro.innerHTML = 'O'; // aqui es lo mismo con la X que lo muestra en el cuadro de la pag
                matriz[goku][cr7] = 'O'; // muestra la O en la matriz 
                mensaje.innerText = "Tu turno"; // muestra el mensaje para el turno del jugador
                gato = true; // aqui es lo mismo que arriba solo que solo que false ahora se convierte en true para que sea el turno de X
            }
             
           turno = !turno;  
           turno = true; turnos()
           
            
        } else {
            // Si el cuadro ya está ocupado
            swal("ESTE ESPACIO YA ESTA OCUPADO"); 
        }
    }
}

//este es para actulizar los funcion de los cuadros 
/*mejor explicacion: que cuando un jugador hace click en un cuadro la funcion va a la funcion de "actualizarCuadro" al a cual se le indica las coordenadas y actualiza
el cuadro y tambien junto con el cuadro tambien actuliza la matrix donde el jugador marco*/
cuad1.onclick = () => actualizarCuadro(cuad1, 0, 0);
cuad2.onclick = () => actualizarCuadro(cuad2, 0, 1);
cuad3.onclick = () => actualizarCuadro(cuad3, 0, 2);
cuad4.onclick = () => actualizarCuadro(cuad4, 1, 0);
cuad5.onclick = () => actualizarCuadro(cuad5, 1, 1);
cuad6.onclick = () => actualizarCuadro(cuad6, 1, 2);
cuad7.onclick = () => actualizarCuadro(cuad7, 2, 0);
cuad8.onclick = () => actualizarCuadro(cuad8, 2, 1);
cuad9.onclick = () => actualizarCuadro(cuad9, 2, 2);

// Función para reiniciar el juego
function reiniciarJuego() {
    // reinicia la matiz la matriz a su estado inicial vacío
    matriz = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    // Limpia todos los cuadros
    let cuadros = [cuad1, cuad2, cuad3, cuad4, cuad5, cuad6, cuad7, cuad8, cuad9];
    cuadros.forEach(cuadro => cuadro.innerHTML = "");
    // Resetea las variables de turno y jugador
    gato = true;
    turno = true;
    // muestra quien comienza
    mensaje.innerText = "Tu turno";
}

// Funciones para verificar las condiciones de victoria
function primeraFila(matriz) {
    return matriz[0].every(fila1 => fila1 === 'X') || matriz[0].every(fila1 => fila1 === 'O');
    //aqui comparo con every que si la funciones cumplen las condiciones de la fila1 y a si mismo pasa con la 2,3 que estan abajo
}

function segundaFila(matriz) {
    return matriz[1].every(fila2 => fila2 === 'X') || matriz[1].every(fila2 => fila2 === 'O');
}

function terceraFila(matriz) {
    return matriz[2].every(fila3 => fila3 === 'X') || matriz[2].every(fila3 => fila3 === 'O');
}

function primeraColumna(matriz) {
    return matriz.every(colu1 => colu1[0] === 'X') || matriz.every(colu1 => colu1[0] === 'O');
}

function segundaColumna(matriz) {
    return matriz.every(colu2 => colu2[1] === 'X') || matriz.every(colu2 => colu2[1] === 'O');
}

function terceraColumna(matriz) {
    return matriz.every(colu3 => colu3[2] === 'X') || matriz.every(colu3 => colu3[2] === 'O');
}

function diagonal(matriz) {
    return (matriz[0][0] === 'X' && matriz[1][1] === 'X' && matriz[2][2] === 'X') ||
           (matriz[0][0] === 'O' && matriz[1][1] === 'O' && matriz[2][2] === 'O');
}

function diagonal2(matriz) {
    return (matriz[0][2] === 'X' && matriz[1][1] === 'X' && matriz[2][0] === 'X') ||
           (matriz[0][2] === 'O' && matriz[1][1] === 'O' && matriz[2][0] === 'O');
}

// va verificando que si todos los espacios de la matriz estan ocupado con X y O 
function empate(matriz) {
    return matriz.flat().every(comparacion => comparacion === 'X' || comparacion === 'O');
}