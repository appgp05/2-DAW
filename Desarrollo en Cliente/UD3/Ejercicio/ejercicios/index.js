// #############
// EJERCICIO 500
// #############
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
// EJERCICIO Mayor y Menor
// #######################
let numeros2 = []
numeros2.length = 10

for(let i = 0; i < numeros2.length; ++i){
    numeros2[i] = Math.round(Math.random()*10)
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

console.log("Lista de numeros: ", numeros2)
console.log("Número mayor:", mayor)
console.log("Numero menor: ", menor)

// ################
// EJERCICIO Tallas
// ################
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
            break;
        case tallasMedianas.includes(respuestaTalla):
            tallaResultante = "Mediana";
            break;
        case tallasPequenas.includes(respuestaTalla):
            tallaResultante = "Pequeña";
            break;
    }

    document.getElementById("ejercicioTalla").innerHTML = "Tu talla es: " + tallaResultante
}

// #######################################
// EJERCICIO Longitud de la circunferencia
// #######################################
// let radio = prompt("Dime el radio de la circunferencia")
function enviarFormularioLongitud(){
    let radio = document.getElementById("radioEjercicioLongitud").value

    let longitud = 2 * Math.PI * radio

    document.getElementById("ejercicioLongitud").innerHTML = "La longitud de la circunferencia es: " + longitud
}

// #################
// EJERCICIO Loteria
// #################
let numeros1al50 = []
// numeros1al50.forEach((numero, index) => {
//     numeros1al50[index] = Math.ceil(Math.random()*50)
// })

for(let i = 0; i < 5; ++i){
    numeros1al50[i] = Math.ceil(Math.random()*50)
}
console.log("Números del 1 al 50:", numeros1al50)

let numeros1al10 = []
for(let i = 0; i < 2; ++i){
    numeros1al10[i] = Math.ceil(Math.random()*10)
}
console.log("Estrellas del 1 al 10", numeros1al10)

// ################
// EJERCICIO Matriz 
// ################
let filas = 5
let columnas = 3

for(let i = 1; i <= filas; ++i){
    for(let j = 1; j <= columnas; ++j){
        console.log("("+i+", "+j+")")
    }
}

// #####################
// EJERCICIO Calculadora
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
        case "=":
            let operacion = resultadoCalculo.innerHTML
            let operandos = []
            let resultado
            switch (true){
                case operacion.includes("+"):
                    operandos = resultadoCalculo.innerHTML.split("+")
                    resultado = operandos[0]+operandos[1]
                    resultadoCalculo.innerHTML = resultado
                    break;
                case operacion.includes("-"):
                    operandos = resultadoCalculo.innerHTML.split("-")
                    resultado = operandos[0]-operandos[1]
                    break;
                case operacion.includes("*"):
                    operandos = resultadoCalculo.innerHTML.split("*")
                    resultado = operandos[0]*operandos[1]
                    break;
                case operacion.includes("/"):
                    operandos = resultadoCalculo.innerHTML.split("/")
                    resultado = Number(operandos[0])/Number(operandos[1])
                    resultadoCalculo.innerHTML = resultado
                    break;
            }

            break;
    }
}