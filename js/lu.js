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

// La matriz donde se van colocando las X y O de los jugadores
let matriz = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
console.log(matriz);

let cuadros1 = [cuad1, cuad2, cuad3, cuad4, cuad5, cuad6, cuad7, cuad8, cuad9];
console.log(cuadros1);

// Controla los turnos del jugadores (X o O)
let gato = true; // Indica si es el turno del jugador X
let turno = true; // Verifica si el turno es correcto

// La función para actualizar el estado del juego y verificar si hay un ganador o empate
function turnos() {
    let gan1 = gana()
    if (gan1) {
        if (gan1 === "X") {
            alert("ganaste")
            setTimeout(() => {
                location.reload()
            }, 300);
        } if (gan1 === "O") {
            alert("perdiste")
        }
    } else if (empate(matriz)) {
        alert("Empate");
        // reiniciarJuego();
        // location.reload()
    }


  
    function gana() {
        for (let i = 0; i < 3; i++) {
            //fila
            if (matriz[i][0] === matriz[i][1] && matriz[i][1] === matriz[i][2] && matriz[i][0] !== "") {
                return matriz[i][0];

                //columnas
            } if (matriz[0][i] === matriz[1][i] && matriz[1][i] === matriz[2][i] && matriz[0][i] !== "") {
                return matriz[0][i];

                //diagonal1
            } if (matriz[0][0] === matriz[1][1] && matriz[1][1] === matriz[2][2] && matriz[0][0] !== "") {
                return matriz[0][0];

                //diagonal2
            } if (matriz[0][2] === matriz[1][1] && matriz[1][1] === matriz[2][0] && matriz[0][2] !=="") {
                return matriz[0][2];
            }

        }return null
    } 
}


function actualizarCuadro(cuadro, goku, cr7) {
    if (turno && matriz[goku][cr7] === "") {
        if (gato) {
            cuadro.innerHTML = 'X';
            matriz[goku][cr7] = 'X';
            mensaje.innerText = "Turno del Bot";
            gato = false;
            turno = false;
            turnos();
            setTimeout(() => MessiBot(), 200);
        }
    } else {
        swal("¡Este espacio ya está ocupado!");
    }
}

function MessiBot() { /*aqui esta la funcion del bot*/
    let MessiBot = []; /* este array va aguardar las coordenadas de los cuadros vacios*/
    for (let i = 0; i < matriz.length; i++) { /*aqui va comparando uno por uno para ver los cuadros vacios*/
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === "") {
                MessiBot.push({ i, j });
            }
        }
    }
    /* y aqui cuando encutre cuadros vacios pone uno al azar*/
    if (MessiBot.length > 0) {
        let cuadroAle = MessiBot[Math.floor(Math.random() * MessiBot.length)];
        /*aqui llamo los cuadros de html y obtiene una referencia a esos cuadros "i" fila  
        y "j" es columnas y el *3 = 3x3 osea 3 columnas y 3filas*/
        let cuadroBot = document.getElementById(`cuadro${cuadroAle.i * 3 + cuadroAle.j}`);
        cuadroBot.innerHTML = 'O'; /*aqui pone el circulo que math.ramdom elegio*/
        matriz[cuadroAle.i][cuadroAle.j] = 'O'; /* y aqui lo ingresa en la matriz para que no vuelva a ingresar en el mismo cuadro*/
        mensaje.innerText = "Tu turno"; /*y este mensaje lo manda ya cuando el bot elegio el cuadro*/
        //y aqui cambia el turno del jugador osea que del false va a cambiar a true
        gato = true;
        turno = true;
        turnos(); /*y esta funcion va verificando si O gana o queda empate*/
    }
}
// Este es para actualizar los eventos de los cuadros
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
    matriz = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    cuadros1.forEach(cuadro => cuadro.innerHTML = "");
    gato = true;
    turno = true;
    mensaje.innerText = "Tu turno";
}

// Funciones para verificar las condiciones de victoria
function primeraFila(matriz) {
    return matriz[0].every(fila1 => fila1 === 'X') || matriz[0].every(fila1 => fila1 === 'O');
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

// Va verificando que si todos los espacios de la matriz están ocupados con X y O 
function empate(matriz) {
    return matriz.flat().every(comparacion => comparacion === 'X' || comparacion === 'O');
}