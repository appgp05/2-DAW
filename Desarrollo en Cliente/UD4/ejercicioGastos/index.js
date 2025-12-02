import {actualizarPresupuesto, mostrarPresupuesto, Gasto} from "./modulo.js"

let gasto = new Gasto("Cena de navidad", 10, new Date(), [])
console.log(gasto.mostrarGasto())
console.log(mostrarPresupuesto())
console.log()