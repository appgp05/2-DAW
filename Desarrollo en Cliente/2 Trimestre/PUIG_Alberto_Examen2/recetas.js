let recetas = []
let recetasFavoritas = new Set()

window.onload = async () => {
    obtenerFavoritasDeCookies()
    await obtenerRecetasDelJSON()
    crearTablaConRecetas()
}

function obtenerFavoritasDeCookies() {
    let recetasFavoritasString = getCookie("recetasFavoritas")
    recetasFavoritas = new Set(recetasFavoritasString.split(","))
    console.log("Recetas favoritas =", recetasFavoritas)
}

async function obtenerRecetasDelJSON() {
    await fetch('recetas.json')
        .then(async response => {
            if (!response.ok) {
                throw new Error('Archivo no encontrado');
            }

            response = response.json()

            return response;
        })
        .then(contenido => {
            recetas = contenido
        })
        .catch(error => {
            console.error('Error al descargar:', error);
        });
}

function crearTablaConRecetas() {
    let contenedorTabla = document.getElementById("table-container")
    contenedorTabla.removeChild(contenedorTabla.firstElementChild)

    let tabla = document.createElement("table")
    contenedorTabla.appendChild(tabla)

    // He cambiado el generar las columnas, tanto los títulos, como las celdas, de genrarlos dinámicamente a ponerlos a mano para que el
    // ejercicio se vea como el mostrado, si se descomenta este código y se comenta el nuevo las columnas se vuelven a genrar dinámicamente.
    // Dejo la forma dinámica comentadapor si prefieres ver la solución así

    // for (let titulo of Object.keys(recetas[0])) {
    //     let th = document.createElement("th")
    //     th.textContent = titulo
    //     tabla.appendChild(th)
    // }

    let th

    th = document.createElement("th")
    th.textContent = "ID"
    tabla.appendChild(th)
    th = document.createElement("th")
    th.textContent = "Usuario"
    tabla.appendChild(th)
    th = document.createElement("th")
    th.textContent = "Título"
    tabla.appendChild(th)
    th = document.createElement("th")
    th.textContent = "Instrucciones"
    tabla.appendChild(th)

    th = document.createElement("th")
    th.textContent = "Acción"
    tabla.appendChild(th)

    for (let receta of recetas) {
        let tr = document.createElement("tr")
        tr.setAttribute("id", receta.id)
        if (comprobarRecetaFavorita(receta.id)) {
            tr.classList.add("fila-favorita")
        }

        // for (let dato of Object.values(receta)) {
        //     let td = document.createElement("td")
        //     td.textContent = dato
        //     tr.appendChild(td)
        // }

        let td
        
        td = document.createElement("td")
        td.textContent = receta.id
        tr.appendChild(td)

        td = document.createElement("td")
        td.textContent = receta.userId
        tr.appendChild(td)

        td = document.createElement("td")
        td.textContent = receta.title
        td.style = "font-weight: bold;"
        tr.appendChild(td)

        td = document.createElement("td")
        td.textContent = receta.body
        tr.appendChild(td)

        td = document.createElement("td")
        let boton = document.createElement("button")
        boton.setAttribute("idFilaAfectada", receta.id)
        if (comprobarRecetaFavorita(receta.id)) {
            boton.setAttribute("tipoBoton", "botonQuitar")
            boton.classList.add("btn-remove")
            boton.textContent = "Quitar"
        } else {
            boton.setAttribute("tipoBoton", "botonFavorito")
            boton.classList.add("btn-add")
            boton.textContent = "Favorito"
        }
        td.appendChild(boton)
        tr.appendChild(td)

        tabla.appendChild(tr)
    }

    tabla.addEventListener("click", (event) => {
        let elementoClicado = event.target

        console.log("seclicó en", elementoClicado)

        if (elementoClicado.getAttribute("tipoBoton") != null) {
            let idFilaAfectada = elementoClicado.getAttribute("idFilaAfectada")

            switch (elementoClicado.getAttribute("tipoBoton")) {
                case "botonFavorito":
                    anadirRecetaFavorita(idFilaAfectada)
                    break;
                case "botonQuitar":
                    eliminarRecetaFavorita(idFilaAfectada)
                    break;
            }
        }
    })
}

// FUNCIONES PARA MANEJAR LAS COOKIES

function getCookie(nombre) {
    let name = nombre + "=";
    let cookies = document.cookie.split(';');
    for (let c of cookies) {
        c = c.trim();
        if (c.indexOf(name) === 0) {
            return JSON.parse(decodeURIComponent(c.substring(name.length)));
        }
    }
    return null;
}

function setCookie(nombre, valor, dias) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    document.cookie = nombre + "=" + JSON.stringify(encodeURIComponent(valor)) + ";expires=" + fecha.toUTCString() + ";path=/";
}

function deleteCookie(nombre) {
    document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// FUNCIONES PARA MANEJAR LAS RECETAS FAVORITAS

function comprobarRecetaFavorita(id) {
    return recetasFavoritas.has(String(id))
}

function anadirRecetaFavorita(id) {
    recetasFavoritas.add(id)
    setCookie("recetasFavoritas", Array.from(recetasFavoritas), 5)
    location.reload()
}

function eliminarRecetaFavorita(id) {
    recetasFavoritas.delete(id)
    setCookie("recetasFavoritas", Array.from(recetasFavoritas), 5)
    location.reload()
}