// #############
// EJERCICIO 500
// #############
let numeros = [];
for(let i = 1; i <= 10; ++i){
    numeros.push(i);
}

let multiplos3 = []
let noPrimos = []
numeros.forEach(numero => {
    if(numero % 3 == 0){
        multiplos3.push(numero)
        document.getElementById("ejercicio500").innerHTML += "<p>"+numero+"</p>"
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

console.log(numeros2)
console.log(mayor)
console.log(menor)

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

console.log(numeros1al50)

let numeros1al10 = []