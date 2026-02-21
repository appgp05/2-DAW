// PRUEBAS CLASE

addEventListener("DOMContentLoaded", () => {
    let div = document.getElementById("padre")
    let boton = document.getElementById("hijo")

    div.addEventListener("click", () => {
        console.log("padre")
    })

    boton.addEventListener("click", () => {
        console.log("hijo")
    })
})

addEventListener("DOMContentLoaded", () => {
    let visabuelo = document.getElementById("visabuelo2")
    let abuelo = document.getElementById("abuelo2")
    let padre = document.getElementById("padre2")
    let hijo = document.getElementById("hijo2")

    visabuelo.addEventListener("click", (evento) => {
        console.log("VISABUELO")
    }, true)
    
    abuelo.addEventListener("click", (evento) => {
        console.log("ABUELO")
    }, false)
    
    padre.addEventListener("mouseover", (evento) => {
        // evento.stopPropagation()
        console.log("PADRE")
    }, true)

    hijo.addEventListener("click", (evento) => {
        console.log("HIJO")
    }, true)
})

addEventListener("DOMContentLoaded", () => {
    let abuelo = document.getElementById("abuelo3")
    let padre = document.getElementById("padre3")
    let hijo = document.getElementById("hijo3")

    // EVENTO CLICK CAPTURA
    abuelo.addEventListener("click", (evento) => {
        console.log("CLICK - CAPTURA - ABUELO")
    }, true)
    
    padre.addEventListener("click", (evento) => {
        console.log("CLICK - CAPTURA - PADRE")
    }, true)

    hijo.addEventListener("click", (evento) => {
        console.log("CLICK - CAPTURA - HIJO")
    }, true)

    // EVENTO CLICK BURBUJEO
    abuelo.addEventListener("click", (evento) => {
        console.log("CLICK - BURBUJEO - ABUELO")
    }, false)
    
    padre.addEventListener("click", (evento) => {
        console.log("CLICK - BURBUJEO - PADRE")
    }, false)

    hijo.addEventListener("click", (evento) => {
        console.log("CLICK - BURBUJEO - HIJO")
    }, false)

    // EVENTO MOUSEOVER CAPTURA
    // padre.addEventListener("mouseover", (evento) => {
    //     console.log("MOUSEOVER - BURBUJEO - PADRE")
    // }, true)

    // hijo.addEventListener("mouseover", (evento) => {
    //     console.log("MOUSEOVER - BURBUJEO - HIJO")
    // }, true)

    // EVENTO MOUSEENTER CAPTURA
    padre.addEventListener("mouseenter", (evento) => {
        console.log("MOUSEENTER - CAPTURA - PADRE")
    }, true)

    hijo.addEventListener("mouseenter", (evento) => {
        console.log("MOUSEENTER - CAPTURA - HIJO")
    }, true)

    // EVENTO MOUSEENTER BURBUJEO
    // padre.addEventListener("mouseenter", (evento) => {
    //     console.log("MOUSEENTER - BURBUJEO - PADRE")
    // }, false)

    // hijo.addEventListener("mouseenter", (evento) => {
    //     console.log("MOUSEENTER - BURBUJEO - HIJO")
    // }, false)
})