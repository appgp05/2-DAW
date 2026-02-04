function transformarEnEditable(spanEditar) {
    let texto = document.createTextNode("En edición")
    spanEditar.textContent = ""
    spanEditar.appendChild(texto)

    let fila = spanEditar.parentElement.parentElement
    let camposFila = fila.children

    console.log(
        fila,
        tabla,
        document.child,
    )


    for (let i = 0; i < camposFila.length - 1; i++) {
        let campoFila = camposFila[i]

        let input = document.createElement("input")
        input.setAttribute("value", campoFila.textContent)
        campoFila.textContent = ""
        campoFila.appendChild(input)
    }

    let contenedorForm = document.getElementById("contenedorForm")
    let p = document.createElement("p")
    let textoP = document.createTextNode("Pulse Aceptar para guardar los cambios o cancelar para anularlos")
    p.appendChild(textoP)
    let botonAceptar = document.createElement("button")
    let textoBotonAceptar = document.createTextNode("Aceptar")
    botonAceptar.appendChild(textoBotonAceptar)
    let botonCancelar = document.createElement("button")
    let textoBotonCancelar = document.createTextNode("Cancelar")
    botonCancelar.appendChild(textoBotonCancelar)
    botonCancelar.addEventListener("click", () => {
        location.reload()
    })
    contenedorForm.appendChild(p)
    contenedorForm.appendChild(botonAceptar)
    contenedorForm.appendChild(botonCancelar)
}