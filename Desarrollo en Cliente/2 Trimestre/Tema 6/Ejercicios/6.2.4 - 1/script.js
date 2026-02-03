addEventListener("DOMContentLoaded", () => {
    let enlaces = document.getElementsByTagName("a")
    let direccionPenultimoEnlace = enlaces[enlaces.length - 2].getAttribute("href")
    let numeroEnlacesAPrueba = Array.from(enlaces).filter((enlace) => enlace.getAttribute("href") === "http://prueba").length
    let numeroEnlacesTercerParrafo = document.getElementsByTagName("p")[2].getElementsByTagName("a").length

    console.log("Enlaces", enlaces)
    console.log("Direccion penúltimo enlace", direccionPenultimoEnlace)
    console.log("Número de enlaces que enlazan a prueba", numeroEnlacesAPrueba)
    console.log("Número de enlaces del tercer párrafo", numeroEnlacesTercerParrafo)

    let elementoMostrar = document.createElement("div")
    let textNode = document.createTextNode(direccionPenultimoEnlace)
    textNode = document.createTextNode(numeroEnlacesAPrueba)
    textNode = document.createTextNode(numeroEnlacesTercerParrafo)
    elementoMostrar.appendChild(textNode)
    document.body.appendChild(elementoMostrar)
})