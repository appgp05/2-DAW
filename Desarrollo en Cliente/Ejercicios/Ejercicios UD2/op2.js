// EJERCICIO 1
// let mensaje = `Hola a todo el Mundo!
// Qué fácil es incluir 'comillas simples'
// y "comillas dobles"`

// alert(mensaje)

// EJERCICIO 4
console.log("El número más cercano al 0 es " + Number.MIN_VALUE)
console.log("El número más alto posible es " + Number.MAX_VALUE)
console.log("un valor infinito es " + Infinity)

// EJERCICIO 5
let OVNI = "OBJETO VOLADOR NO IDENTIFICADO"
let Info = "En un lugar de la mancha"

comprobarMinusculasYMayusculas(OVNI)
comprobarMinusculasYMayusculas(Info)

function comprobarMinusculasYMayusculas(texto){
    if(texto === texto.toUpperCase()){
        console.log("Tiene mayúsculas")
    } else {
        if(texto === texto.toLowerCase()){
            console.log("Tiene minúsculas")
        } else {
            console.log("Tiene minúsculas y mayúsculas")
        }
    }
}