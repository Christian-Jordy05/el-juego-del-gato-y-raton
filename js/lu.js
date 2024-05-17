let cuad1 = document.getElementById("cuadro1");
let cuad2 = document.getElementById("cuadro2");
let cuad3 = document.getElementById("cuadro3");
let cuad4 = document.getElementById("cuadro4");
let cuad5 = document.getElementById("cuadro5");
let cuad6 = document.getElementById("cuadro6");
let cuad7 = document.getElementById("cuadro7");
let cuad8 = document.getElementById("cuadro8");
let cuad9 = document.getElementById("cuadro9");
/* todos los codigos de arriba llama cada cuadritos*/



let matriz = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

// matriz2(matriz)
// function matriz2() {

//     matriz[2][0] = "X"
//      console.log(matriz);
// }



let gato = true;

turno1 = true;

function cuadro1() {
    if (turno1 === true) {
        if (gato === true) {
            cuad1.innerHTML = 'X'
            gato = false;
            matriz[0][0] = "X"
            console.log(matriz);
        } else {
            cuad1.innerHTML = 'O'
            gato = true;
            matriz[0][0] = "O"
            console.log(matriz);
        }
        turno1 = false;
    } else {
        alert("este campo esta ocupado");
    }

}

matriz2(cuadro1)
function matriz2() {


}




turno2 = true;

function cuadro2() {
    if (turno2 === true) {
        if (gato === true) {
            cuad2.innerHTML = 'X'
            gato = false;
            matriz[0][1] = "X"
            console.log(matriz);
        } else {
            cuad2.innerHTML = 'O'
            gato = true;
            matriz[0][1] = "O"
            console.log(matriz);
        }
        turno2 = false;
    } else {
        alert("este campo esta ocupado");
    }
}



turno3 = true;

function cuadro3() {
    if (turno3 === true) {
        if (gato === true) {
            cuad3.innerHTML = 'X'
            gato = false;
            matriz[0][2] = "X"
            console.log(matriz);
        } else {
            cuad3.innerHTML = 'O'
            gato = true;
            matriz[0][2] = "O"
            console.log(matriz);
        }
        turno3 = false;
    } else {
        alert("este campo esta ocupado");
    }
}


/*--------------------------------------------------*/
turno4 = true;

function cuadro4() {
    if (turno4 === true) {
        if (gato === true) {
            cuad4.innerHTML = 'X'
            gato = false;
            matriz[1][0] = "X"
            console.log(matriz);
        } else {
            cuad4.innerHTML = 'O'
            gato = true;
            matriz[1][0] = "O"
            console.log(matriz);
        }
        turno4 = false;
    } else {
        alert("este campo esta ocupado");
    }
}

/*--------------------------------------------------*/
turno5 = true;

function cuadro5() {
    if (turno5 === true) {
        if (gato === true) {
            cuad5.innerHTML = 'X'
            gato = false;
            matriz[1][1] = "X"
            console.log(matriz);
        } else {
            cuad5.innerHTML = 'O'
            gato = true;
            matriz[1][1] = "O"
            console.log(matriz);
        }
        turno5 = false;
    } else {
        alert("este campo esta ocupado");
    }
}
/*--------------------------------------------------*/
turno6 = true;

function cuadro6() {
    if (turno6 === true) {
        if (gato === true) {
            cuad6.innerHTML = 'X'
            gato = false;
              matriz[1][2] = "X"
            console.log(matriz);
        } else {
            cuad6.innerHTML = 'O'
            gato = true;
            matriz[1][2] = "O"
            console.log(matriz);
        }
        turno6 = false;
    } else {
        alert("este campo esta ocupado");
    }
}
/*--------------------------------------------------*/
turno7 = true;


function cuadro7() {
    if (turno7 === true) {
        if (gato === true) {
            cuad7.innerHTML = 'X'
            gato = false;
            matriz[2][0] = "X"
            console.log(matriz);
        } else {
            cuad7.innerHTML = 'O'
            gato = true;
            matriz[2][0] = "O"
            console.log(matriz);
        }
        turno7 = false;
    } else {
        alert("este campo esta ocupado");
    }
}
/*--------------------------------------------------*/
turno8 = true;

function cuadro8() {
    if (turno8 === true) {
        if (gato === true) {
            cuad8.innerHTML = 'X'
            gato = false;
            matriz[2][1] = "X"
            console.log(matriz);
        } else {
            cuad8.innerHTML = 'O'
            gato = true;
            matriz[2][1] = "O"
            console.log(matriz);
        }
        turno8 = false;
    } else {
        alert("este campo esta ocupado");
    }
}
/*--------------------------------------------------*/
turno9 = true;

function cuadro9() {
    if (turno9 === true) {
        if (gato === true) {
            cuad9.innerHTML = 'X'
            gato = false;
            matriz[2][2] = "X"
            console.log(matriz);
        } else {
            cuad9.innerHTML = 'O'
            gato = true;
            matriz[2][2] = "O"
            console.log(matriz);
        }
        turno9 = false;
    } else {
        alert("este campo esta ocupado");
    }
}


function primeraFIla(matriz) {
    let contaX = 0;
    let contaO = 0;

    for (let index = 0; index < matriz.length; index++) {
        if (matriz[0][index] = "X") {
            contaX++;
        }
    }
}







// console.log(matriz); /* los numeros van hacer las coordenadas de los cuadro*/

// matriz[0][0] = "X"

// console.log(matriz);