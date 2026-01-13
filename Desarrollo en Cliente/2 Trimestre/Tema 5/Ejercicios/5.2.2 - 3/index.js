addEventListener("DOMContentLoaded", () => {
    addEventListener("mousemove", (event) => {
        mostrarInformacion(event)
    })

    addEventListener("click", (event) => {
        mostrarInformacion(event)
    })
    
    addEventListener("keypress", (event) => {
        mostrarInformacion(event)
    })
})

function mostrarInformacion(event){
    console.log(event.type)

    let colorSegunEvento
    let ultimaTeclaPulsada
    let registroTeclas

    switch(event.type){
        case "mousemove":
            colorSegunEvento = document.getElementById("colorSegunEvento")

            colorSegunEvento.style.backgroundColor = "white"

            document.getElementById("x").innerHTML = "X: " + event.x
            document.getElementById("y").innerHTML = "Y: " + event.y
            document.getElementById("xNavegador").innerHTML = "X: " + event.clientX
            document.getElementById("yNavegador").innerHTML = "Y: " + event.clientY
            document.getElementById("xPagina").innerHTML = "X: " + event.pageX
            document.getElementById("yPagina").innerHTML = "Y: " + event.pageY
            break;
        case "click":
            colorSegunEvento = document.getElementById("colorSegunEvento")
    
            colorSegunEvento.style.backgroundColor = "yellow"
            break;
        case "keypress":
            colorSegunEvento = document.getElementById("colorSegunEvento")
            ultimaTeclaPulsada = document.getElementById("ultimaTeclaPulsada")
            registroTeclas = document.getElementById("registroTeclas")

            colorSegunEvento.style.backgroundColor = "blue"
            ultimaTeclaPulsada.innerHTML = "<p>Última tecla pulsada: " + event.key + "</p>"
            registroTeclas.innerHTML += "<p>Usted ha pulsado la tecla: " + event.key + "</p>"
            break;
    }

}

// addEventListener("DOMContentLoaded", () => {
//     addEventListener("mousemove", (event) => {
//         let colorSegunEvento = document.getElementById("colorSegunEvento")

//         colorSegunEvento.style.backgroundColor = "white"
//         document.getElementById("x").innerHTML = "X: " + event.x
//         document.getElementById("y").innerHTML = "Y: " + event.y
//         document.getElementById("xNavegador").innerHTML = "X: " + event.clientX
//         document.getElementById("yNavegador").innerHTML = "Y: " + event.clientY
//         document.getElementById("xPagina").innerHTML = "X: " + event.pageX
//         document.getElementById("yPagina").innerHTML = "Y: " + event.pageY
//     })

//     addEventListener("click", () => {
//         let colorSegunEvento = document.getElementById("colorSegunEvento")
    
//         colorSegunEvento.style.backgroundColor = "yellow"
//     })
    
//     addEventListener("keypress", (event) => {
//         let colorSegunEvento = document.getElementById("colorSegunEvento")
//         let ultimaTeclaPulsada = document.getElementById("ultimaTeclaPulsada")
//         let registroTeclas = document.getElementById("registroTeclas")

//         colorSegunEvento.style.backgroundColor = "blue"
//         ultimaTeclaPulsada.innerHTML = "<p>Última tecla pulsada: " + event.key + "</p>"
//         registroTeclas.innerHTML += "<p>Usted ha pulsado la tecla: " + event.key + "</p>"
//     })
// })