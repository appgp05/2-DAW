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

// for(let i = 1; i <= 10; ++i){
//     if(i % 3 == 0){
//         document.getElementById("ejercicio500").innerHTML += "<p>"+i+"</p>"
//     }
//     for(let j = 2; j < i; ++j){
//         if(i % j == 0){
//             console.log(i+" % "+j)
//             ++cantidadNoPrimos;
//             break;
//         }
//     }
// }

// document.getElementById("ejercicio500").innerHTML += "<p>No primos: "+cantidadNoPrimos+"</p>"


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

let tallasGrandes = ["XXL", "XL", "L"]
let tallasMedianas = ["M"]
let tallasPequenas = ["S", "XS", "XXS"]

let respuestaTalla = prompt("Cuál es tu talla? (XXL, XL, L, M, S, XS, XXS)")

if(respuestaTalla){

}

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

console.log("Tu talla es: " + tallaResultante)