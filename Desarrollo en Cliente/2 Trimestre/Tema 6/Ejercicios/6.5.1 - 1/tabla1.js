let editando = false

let filaHeaders = []
let camposFilaActual = []

function transformarEnEditable(spanEditar) {
    if (editando) {
        alert("Solo se puede editar una fila, cancele la edición para editar otra")
        return
    }

    editando = true

    cambiarBotonDeEditar(spanEditar)

    filaHeaders = spanEditar.parentElement.parentElement.parentElement.children[0]
    let fila = spanEditar.parentElement.parentElement
    camposFilaActual = fila.children

    cambiarValoresPorInputs()

    anadirConfirmacionDeEdicion()

    // console.log(
    //     filaHeaders,
    //     fila,
    //     document.child,
    // )
}

function cambiarBotonDeEditar(spanEditar) {
    let texto = document.createTextNode("En edición")
    spanEditar.textContent = ""
    spanEditar.appendChild(texto)
    spanEditar.style.color = "black"
}

function cambiarValoresPorInputs() {
    for (let i = 0; i < camposFilaActual.length; i++) {
        let campoFila = camposFilaActual[i]

        if (campoFila.children.length === 0) {
            let input = document.createElement("input")
            input.setAttribute("value", campoFila.textContent)
            campoFila.textContent = ""
            campoFila.appendChild(input)
        }
    }
}

function anadirConfirmacionDeEdicion() {
    let contenedorForm = document.getElementById("contenedorForm")
    
    let form = document.createElement("form")
    form.setAttribute("method", "GET")
    
    let p = document.createElement("p")
    let textoP = document.createTextNode("Pulse Aceptar para guardar los cambios o cancelar para anularlos")
    p.appendChild(textoP)

    let botonAceptar = document.createElement("button")
    let textoBotonAceptar = document.createTextNode("Aceptar")
    botonAceptar.appendChild(textoBotonAceptar)
    botonAceptar.setAttribute("type", "submit")
    botonAceptar.addEventListener("click", () => {
        let url = "https://google.com/"

        let valoresActualizados = new Map()

        for (let i = 0; i < camposFilaActual.length; i++) {
            let campoFila = camposFilaActual[i]

            let hijo = campoFila.children[0]

            if(hijo.tagName === "INPUT"){
                valoresActualizados.set(filaHeaders.children[i].innerHTML.split(" ")[0], hijo.value)
            }
        }

        for(let valorActualizado of valoresActualizados){
            let input = document.createElement("input")
            input.setAttribute("type", "hidden")
            input.setAttribute("name", valorActualizado[0])
            input.value = valorActualizado[1]
            form.appendChild(input)
        }

        form.setAttribute("action", url)
    })

    let botonCancelar = document.createElement("button")
    let textoBotonCancelar = document.createTextNode("Cancelar")
    botonCancelar.appendChild(textoBotonCancelar)
    botonCancelar.setAttribute("type", "button")
    botonCancelar.addEventListener("click", () => {
        location.reload()
    })

    contenedorForm.appendChild(form)
    form.appendChild(p)
    form.appendChild(botonAceptar)
    form.appendChild(botonCancelar)
}