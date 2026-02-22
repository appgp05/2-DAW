window.onload = function() {
    getTalleres();
}

async function getTalleres() {
    try {
        const respuesta = await fetch("talleres.json");
        if(!respuesta.ok) throw new Error("Error al cargar el JSON");

        const datosCargados = await respuesta.json();

        crearFormulario(datosCargados);
    } catch (exception) {
        document.getElementById("messages").textContent = "Error. No se puedieron conseguir los datos";
        console.error(exception);
    }
}

function crearFormulario(datosCargados) {
    // Seleccionamos el elemento principal dónde vamos a crear el formulario
    let main = document.getElementById("app");

    // Creamos los elementos a insertar uno a uno
    let titulo = document.createElement("h2");
    let textoTitulo = document.createTextNode("Titulo principal");
    titulo.appendChild(textoTitulo);

    // Creamos elementos
    let form = document.createElement("form");
    form.id = "formulario";

    let inputNombre = document.createElement("input");
    inputNombre.placeholder = "Nombre Completo";
    inputNombre.required = true;

    let inputCorreo = document.createElement("input");
    inputCorreo.type = "email";
    inputCorreo.placeholder = "tu@email.com";

    let selectTalleres = document.createElement("select");
    datosCargados.forEach(taller => {
        let option = document.createElement("option");
        option.value = taller.id;
        option.textContent = taller.nombre;
        selectTalleres.appendChild(option);
    })

    let botonEnvio = document.createElement("button");
    botonEnvio.type = "submit";
    botonEnvio.textContent = "Confirmar plaza";

    // Asignamos los elementos del formulario al formulario
    form.appendChild(inputNombre);
    form.appendChild(inputCorreo);
    form.appendChild(selectTalleres);
    form.appendChild(botonEnvio);

    // Asignamos los elementos al formulario
    main.append(titulo, form);

    configurarEventos(form, inputNombre, inputCorreo, selectTalleres, datosCargados)
}

function configurarEventos(form, inputNombre, inputCorreo, selectTalleres, datosCargados) {
    
    // Añadir listener al input, validar en tiempo real el evento
    inputCorreo.addEventListener('input', () => {

        // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // inputCorreo.className = regex.test(inputCorreo.value) ? 'valido' : 'invalido';

        if(inputCorreo.value.includes('@') && inputCorreo.value.includes('.')) {
            inputCorreo.className = 'valido';
        } else {
            inputCorreo.className = 'invalido';
        }
    });

    // Mostrar descripción del taller (Evento change)
    selectTalleres.addEventListener('change', (e) => {
        const idSeleccionado = e.target.value;
        // Buscamos el taller en el array original de AJAX
        const tallerEncontrado = datosCargados.find(t => t.id == idSeleccionado);

        const cajaMensajes = document.getElementById("messages");
        cajaMensajes.textContent = `Descripción: ${tallerEncontrado.descripcion}`;
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(inputNombre.value.trim().length < 3) {
            alert("El nombre es demasiado corto");
            return;
        }

        document.getElementById("messages").textContent = "¡Inscripción realizada con éxito!";
        form.reset();
    })

}

