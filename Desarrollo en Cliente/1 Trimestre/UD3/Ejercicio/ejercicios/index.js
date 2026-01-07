// #################################################
// EJERCICIO MULTIPLOS DE 3 Y NO PRIMOS DEL 1 AL 500
// #################################################
let numeros = [];
for(let i = 1; i <= 500; ++i){
    numeros.push(i);
}

let multiplos3 = []
let noPrimos = []
numeros.forEach(numero => {
    if(numero % 3 == 0){
        multiplos3.push(numero)
        document.getElementById("ejercicio500").innerHTML += ""+numero+", "
    }
    for(let j = 2; j < numero; ++j){
        if(numero % j == 0){
            console.log(numero+" % "+j)
            noPrimos.push(numero);
            break;
        }
    }
})

document.getElementById("ejercicio500").innerHTML += "<p>No primos: "+noPrimos.length+"</p>"    

console.log(numeros)
console.log(multiplos3)
console.log(noPrimos)

// #######################
// EJERCICIO MAYOR Y MENOR
// #######################
// let numeros2 = []
// numeros2.length = 10

// for(let i = 0; i < numeros2.length; ++i){
//     numeros2[i] = Math.round(Math.random()*10)
// }

// let mayor = 0
// let menor = 10

// for(let i = 0; i < numeros2.length; ++i){
//     if(numeros2[i] > mayor){
//         mayor = numeros2[i]
//     }
//     if(numeros2[i] < menor){
//         menor = numeros2[i]
//     }
// }

// document.getElementById("ejercicioMayorYMenor").innerHTML += "<p>Números aleatorios: "+numeros2+"</p>"
// document.getElementById("ejercicioMayorYMenor").innerHTML += "<p>Número mayor: "+mayor+"</p>"
// document.getElementById("ejercicioMayorYMenor").innerHTML += "<p>Número menor: "+menor+"</p>"


//AMPLIACION:
let numeros2 = []

function enviarFormularioMayorYMenor(){
    let numero = document.getElementById("numeroEjercicioMayorYMenor").value

    if(isNaN(Number(numero))){
        return
    }

    numeros2.push(numero)

    if(numeros2.length >= 10){
        document.getElementById("numeroEjercicioMayorYMenor").value = ""
        document.getElementById("numeroEjercicioMayorYMenor").disabled = "disabled"
        document.getElementById("botonEjercicioMayorYMenor").disabled = "disabled"
    }

    let mayor = 0
    let menor = 10

    for(let i = 0; i < numeros2.length; ++i){
        if(numeros2[i] > mayor){
            mayor = numeros2[i]
        }
        if(numeros2[i] < menor){
            menor = numeros2[i]
        }
    }

    document.getElementById("ejercicioMayorYMenor").innerHTML = "<p>Números aleatorios: "+numeros2+"</p>"
    document.getElementById("ejercicioMayorYMenor").innerHTML += "<p>Número mayor: "+mayor+"</p>"
    document.getElementById("ejercicioMayorYMenor").innerHTML += "<p>Número menor: "+menor+"</p>"
}

// for(let i = 0; i < numeros2.length; ++i){
//     numeros2[i] = Math.round(Math.random()*10)
// }



// ###############################
// EJERCICIO CALCULO DE LAS TALLAS
// ###############################
function enviarFormularioTallas(){
    let tallasGrandes = ["XXL", "XL", "L"]
    let tallasMedianas = ["M"]
    let tallasPequenas = ["S", "XS", "XXS"]

    // let respuestaTalla = prompt("Cuál es tu talla? (XXL, XL, L, M, S, XS, XXS)")
    let respuestaTalla = document.getElementById("tallaEjercicioTalla").value

    let tallaResultante = ""

    switch(true){
        case tallasGrandes.includes(respuestaTalla):
            tallaResultante = "Grande";
            break
        case tallasMedianas.includes(respuestaTalla):
            tallaResultante = "Mediana";
            break
        case tallasPequenas.includes(respuestaTalla):
            tallaResultante = "Pequeña";
            break
        default:
            tallaResultante = "La talla introducida no existe"
            break
    }

    document.getElementById("ejercicioTalla").innerHTML = "Tu talla es: " + tallaResultante
}

// #######################################
// EJERCICIO LONGITUD DE LA CIRCUNFREENCIA
// #######################################
// let radio = prompt("Dime el radio de la circunferencia")
function enviarFormularioLongitud(){
    let radio = document.getElementById("radioEjercicioLongitud").value

    if(isNaN(Number(radio))){
        document.getElementById("ejercicioLongitud").innerHTML = "Ha introducido un radio erróneo, recuerda que el radio debe ser un número."
        return
    }

    let longitud = 2 * Math.PI * radio

    document.getElementById("ejercicioLongitud").innerHTML = "La longitud de la circunferencia es: " + longitud
}

// #################
// EJERCICIO LOTERIA
// #################
let numeros1al50 = []
// numeros1al50.forEach((numero, index) => {
//     numeros1al50[index] = Math.ceil(Math.random()*50)
// })

for(let i = 0; i < 5; ++i){
    numeros1al50[i] = Math.ceil(Math.random()*50)
}

document.getElementById("ejercicioLoteria").innerHTML += "<h2>Números del 1 al 50</h2>"
for(let numero of numeros1al50){
    document.getElementById("ejercicioLoteria").innerHTML += "<p>"+numero+"</p>"
}

let estrellas1al10 = []
for(let i = 0; i < 2; ++i){
    estrellas1al10[i] = Math.ceil(Math.random()*10)
}

document.getElementById("ejercicioLoteria").innerHTML += "<h2>Estrellas del 1 al 10</h2>"
for(estrella of estrellas1al10){
    document.getElementById("ejercicioLoteria").innerHTML += "<p>"+estrella+"</p>"
}

// console.log("Estrellas del 1 al 10", numeros1al10)

// ################
// EJERCICIO MATRIZ 
// ################
let filas = 5
let columnas = 3

for(let i = 1; i <= filas; ++i){
    for(let j = 1; j <= columnas; ++j){
        document.getElementById("ejercicioMatriz").innerHTML += "<p>("+i+", "+j+")</p>"
    }
}

// #####################
// EJERCICIO CALCULADORA
// #####################

function funcionalidadCalculadora(boton){
    let resultadoCalculo = document.getElementById("resultadoCalculo")

    console.log(resultadoCalculo)

    switch(boton){
        case "0":
            resultadoCalculo.innerHTML += "0"
            break;
        case "1":
            resultadoCalculo.innerHTML += "1"
            break;
        case "2":
            resultadoCalculo.innerHTML += "2"
            break;
        case "3":
            resultadoCalculo.innerHTML += "3"
            break;
        case "4":
            resultadoCalculo.innerHTML += "4"
            break;
        case "5":
            resultadoCalculo.innerHTML += "5"
            break;
        case "6":
            resultadoCalculo.innerHTML += "6"
            break;
        case "7":
            resultadoCalculo.innerHTML += "7"
            break;
        case "8":
            resultadoCalculo.innerHTML += "8"
            break;
        case "9":
            resultadoCalculo.innerHTML += "9"
            break;
        case "+":
            resultadoCalculo.innerHTML += "+"
            break;
        case "-":
            resultadoCalculo.innerHTML += "-"
            break;
        case "*":
            resultadoCalculo.innerHTML += "*"
            break;
        case "/":
            resultadoCalculo.innerHTML += "/"
            break;
        case "Borrar 1":
            resultadoCalculo.innerHTML = resultadoCalculo.innerHTML.substring(0,  resultadoCalculo.innerHTML.length -1)
            break;
        case "Borrar todo":
            resultadoCalculo.innerHTML = ""
            break;
        case "=":
            let operacion = resultadoCalculo.innerHTML
            let operandos = []
            let resultado
            switch (true){
                case operacion.includes("+"):
                    operandos = resultadoCalculo.innerHTML.split("+")
                    resultado = parseInt(operandos[0])+parseInt(operandos[1])
                    resultadoCalculo.innerHTML = resultado
                    break;
                case operacion.includes("-"):
                    operandos = resultadoCalculo.innerHTML.split("-")
                    resultado = parseInt(operandos[0])-parseInt(operandos[1])
                    resultadoCalculo.innerHTML = resultado
                    break;
                case operacion.includes("*"):
                    operandos = resultadoCalculo.innerHTML.split("*")
                    resultado = parseInt(operandos[0])*parseInt(operandos[1])
                    resultadoCalculo.innerHTML = resultado
                    break;
                case operacion.includes("/"):
                    operandos = resultadoCalculo.innerHTML.split("/")
                    resultado = parseInt(operandos[0])/parseInt(operandos[1])
                    resultadoCalculo.innerHTML = resultado
                    break;
            }
        break;
    }
}

// ################################
// EJERCICIO SEGUIR LEYENDO NOTICIA
// ################################

function verMas(){
    document.getElementById("textoAmpliar").innerHTML += "Ahora estás viendo el texto ampliado"
}