let cuad1 = document.getElementById("cuadro1");
let cuad2 = document.getElementById("cuadro2");
let cuad3 = document.getElementById("cuadro3");
let cuad4 = document.getElementById("cuadro4");
let cuad5 = document.getElementById("cuadro5");
let cuad6 = document.getElementById("cuadro6");
let cuad7 = document.getElementById("cuadro7");
let cuad8 = document.getElementById("cuadro8");
let cuad9 = document.getElementById("cuadro9");
let mensaje = document.getElementById("mensaje")
/* todos los codigos de arriba llama cada cuadritos*/


// este es el cuadro de la matriz
let matriz = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]


/**/ 
let gato = true; /*el gato es el que me ayuda quien empieza*/

turno1 = true; 
/*turno me ayuda que funcione la funcion*/
function cuadro1() {
    mensaje.innerText = "turno de AI"  /*este es el mensaje que se enseña en la pantalla demostrando quien va hacer el siguente*/
    if (turno1 === true) { /*turno es el que me va a validar para que la operacion compienze*/
        if (gato === true) { /*y aqui se hace una comparacion que si gato es TRUE es X*/
            cuad1.innerHTML = 'X' /*y si se cumple con el requesito anterior la X se va amostrar en el cuadro1*/
            mensaje.innerText = "turno de AI"
            gato = false;/* y aqui convierto a gato a false para que el seguiente turno sea de O*/
            matriz[0][0] = "X" /*y aqui la X se posiciona en ese lugar de la matriz que se le indica  para que despues la  AI sepa que ese lugar ya esta ocupado y no intente sobrescribir*/
            console.log(matriz);
        } else {
            cuad1.innerHTML = 'O' /*esto es para si el usurio no selecciono en el cuadro1 que la Ai ponga un O*/
            gato = true;
            matriz[0][0] = "O" /*y aqui si la X selecciona este campo entonces se guarda en la matriz para que sepa que ya selecciono este cuadro y no intente repetir en el mismo cuadro*/
            console.log(matriz);
        }
        turno1 = false;
    } else {
        swal("ESTE ESPACIO YA ESTA OCUPADO");
    }
    if (primeraFIla(matriz)) {
        alert("ganaste")
    }

    if (Diagonal(matriz)) {
        alert("ganaste")
    }

}




turno2 = true;
function cuadro2() {
    if (turno2 === true) {
        if (gato === true) {
            cuad2.innerHTML = 'X'
            gato = false;
            mensaje.innerText = "turno de AI"
            matriz[0][1] = "X"
            console.log(matriz);
        } else {
            cuad2.innerHTML = 'O'
            gato = true;
            mensaje.innerText = "Tu turno"
            matriz[0][1] = "O"
            console.log(matriz);
        }
        turno2 = false;
    } else {
        swal("ESTE ESPACIO YA ESTA OCUPADO");
    }
    if (primeraFIla(matriz)) {
        alert("ganaste")
    }

    if (Diagonal(matriz)) {
        alert("ganaste")
    }
 
}



turno3 = true;

function cuadro3() {
    
    if (turno3 === true) {
        if (gato === true) {
            cuad3.innerHTML = 'X'
            mensaje.innerText = "turno de AI"
            gato = false;
            matriz[0][2] = "X"
            console.log(matriz);
        } else {
            cuad3.innerHTML = 'O'
            gato = true;
            
            mensaje.innerText = "Tu turno"
            matriz[0][2] = "O"
            console.log(matriz);
        }
        turno3 = false;
    } else {
        swal("ESTE ESPACIO YA ESTA OCUPADO");
    }
    if (primeraFIla(matriz)) {
        alert("ganaste")
    }

    if (Diagonal(matriz)) {
        alert("ganaste")
    }
}


/*--------------------------------------------------*/
turno4 = true;

function cuadro4() {
   
    if (turno4 === true) {
        if (gato === true) {
            cuad4.innerHTML = 'X'
            gato = false;
            mensaje.innerText = "turno de AI"
           
            matriz[1][0] = "X"
            console.log(matriz);
        } else {
            cuad4.innerHTML = 'O'
            gato = true;
            mensaje.innerText = "Tu turno"
            matriz[1][0] = "O"
            console.log(matriz);
        }
        turno4 = false;
    } else {
        swal("ESTE ESPACIO YA ESTA OCUPADO");
    }
    if (segundaFIla(matriz)) {
        alert("ganaste")
    }

    if (Diagonal(matriz)) {
        alert("ganaste")
    }
}

/*--------------------------------------------------*/
turno5 = true;

function cuadro5() {
    
    if (turno5 === true) {
        if (gato === true) {
            cuad5.innerHTML = 'X'
            gato = false;
            mensaje.innerText = "turno de AI"
            matriz[1][1] = "X"
            console.log(matriz);
        } else {
            cuad5.innerHTML = 'O'
            gato = true;
            mensaje.innerText = "Tu turno"
            
            matriz[1][1] = "O"
            console.log(matriz);
        }
        turno5 = false;
    } else {
        swal("ESTE ESPACIO YA ESTA OCUPADO");
    }
    if (segundaFIla(matriz)) {
        alert("ganaste")
    }

    if (Diagonal(matriz)) {
        alert("ganaste")
    }
}
/*--------------------------------------------------*/
turno6 = true;

function cuadro6() {
   
    if (turno6 === true) {
        if (gato === true) {
            cuad6.innerHTML = 'X'
            gato = false;
            mensaje.innerText = "turno de AI"
            matriz[1][2] = "X"
            console.log(matriz);
        } else {
            cuad6.innerHTML = 'O'
            gato = true;
            mensaje.innerText = "Tu turno"
            
            matriz[1][2] = "O"
            console.log(matriz);
        }
        turno6 = false;
    } else {
        swal("ESTE ESPACIO YA ESTA OCUPADO");
    }
    if (segundaFIla(matriz)) {
        alert("ganaste")
    }

    if (Diagonal(matriz)) {
        alert("ganaste")
    }
}
/*--------------------------------------------------*/
turno7 = true;

function cuadro7() {
    
    if (turno7 === true) {
        if (gato === true) {
            cuad7.innerHTML = 'X'
            gato = false;
            mensaje.innerText = "turno de AI"
            matriz[2][0] = "X"
            console.log(matriz);
        } else {
            cuad7.innerHTML = 'O'
            gato = true;
            mensaje.innerText = "Tu turno"
            matriz[2][0] = "O"
            console.log(matriz);
        }
        turno7 = false;
    } else {
        swal("ESTE ESPACIO YA ESTA OCUPADO");
    }
    if (Diagonal(matriz)) {
        alert("ganaste")
    }

    if (Diagonal(matriz)) {
        alert("ganaste")
    }
   
}
/*--------------------------------------------------*/
turno8 = true;

function cuadro8() {
    if (turno8 === true) {
        if (gato === true) {
            cuad8.innerHTML = 'X'
            gato = false;
            mensaje.innerText = "turno de AI"
            matriz[2][1] = "X"
            console.log(matriz);
        } else {
            cuad8.innerHTML = 'O'
            gato = true;
            mensaje.innerText = "Tu turno"
            matriz[2][1] = "O"
            console.log(matriz);
        }
        turno8 = false;
    } else {
        swal("ESTE ESPACIO YA ESTA OCUPADO");
    }
    if (Diagonal(matriz)) {
        alert("ganaste")
    }
    
}
/*--------------------------------------------------*/
turno9 = true;

function cuadro9() {
    
    if (turno9 === true) {
        if (gato === true) {
            cuad9.innerHTML = 'X'
            mensaje.innerText = "turno de AI"
            gato = false;
            matriz[2][2] = "X"
            console.log(matriz);
        } else {
            cuad9.innerHTML = 'O'
            gato = true;
            mensaje.innerText = "Tu turno"
            matriz[2][2] = "O"
            console.log(matriz);
        }
        turno9 = false;
    } else {
        swal("ESTE ESPACIO YA ESTA OCUPADO");
    }

    if (Diagonal(matriz)) {
        alert("ganaste")
    }
   
}


function primeraFIla(matriz) {
    let contaX = 0;
    let contaO = 0;

    for (let index = 0; index < matriz.length; index++) {
        if (matriz[0][index] == "X") {
            contaX++;
        }else if(matriz[0][index] == "O"){
            contaO++;
        }
    }if (contaX == 3 || contaO == 3) {
        return true
    }else{
        return false
    }
}


function segundaFIla(matriz) {
    let contaX = 0;
    let contaO = 0;

    for (let index = 0; index < matriz.length; index++) {
        if (matriz[1][index] == "X") {
            contaX++;
        }else if(matriz[1][index] == "O"){
            contaO++;
        }
    }if (contaX == 3 || contaO == 3) {
        return true
    }else{
        return false
    }
}



function Diagonal(matriz) {
    let contaX = 0;
    let contaO = 0;

    for (let index = 0; index < matriz.length; index++) {
        if (matriz[0.0] && matriz[1.1] && matriz[2.2] == "x") {
            contaX++;
        }else if(matriz[0,0][1,1][2,2] == "O"){
            contaO++;
        }
    }if (contaX == 1 || contaO == 1) {
        return true
    }else{
        return false
    }
}




// console.log(matriz); /* los numeros van hacer las coordenadas de los cuadro*/

// matriz[0][0] = "X"

// console.log(matriz);