$().ready(() => {
    let imagenDestacada = $("#imagenDestacada")
    
    imagenDestacada.on({
        mouseenter: function() {
            $(this).css({"transform": "scale(1.05)", "transition": "0.5s"})
        },
        mouseleave: function() {
            $(this).css({"transform": "scale(1)"})
        }
    })
    $("#buttonDescripcionImagen").on("click", function() {
        let seccion = $("#descripcionImagen");
        
        if (seccion.is(":visible")) {
            // Si ya se ve, la contraemos
            seccion.slideUp(500); 
            $(this).text("Ver descripción");
        } else {
            seccion.slideDown(500);
            $(this).text("Ocultar descripción");
        }
    })
    
    let videoDestacado = $("#videoDestacado")
    
    videoDestacado.on("click", function() {
        let descripcion = $("#descripciónVideo")
        
        if (descripcion.is(":hidden")) {
            descripcion.fadeIn("slow");
        } else {
            descripcion.fadeOut("slow");
        }
    });
    
    $("img, video").slideDown(1000);

    $("#buttonComprarLibro").on("click", comprarLibro)

    const video = $("#videoDestacado")[0];

    $("#botonReproducirPausar").on("click", function() {
        if (video.paused) {
            video.play();
            $(this).text("Pausar");
        } else {
            video.pause();
            $(this).text("Reproducir");
        }
    });

    $("#barraVolumen").on("input change", function() {
        let nivel = $(this).val();
        video.volume = nivel;
    });

    $("#botonVolver").on("click", function() {
        video.currentTime = 0;
    });

    $(".textoPromo").addClass("textoPromo").on("mouseenter mouseleave", function() {
        $(this).toggleClass("fade");
    });
})

function comprarLibro(){
    // Validación del formulario con jQuery, pero requiere de un plugin:
    //  Explicación:
    // $(***Formulario a validar***).validate({
    //      ***rules: reglas de validación***
    //      ***messages: mensajes en caso de no ser válido algún campo***
    //      ***submitHandler: función que se ejecuta en caso de que sea válido el formulario***
    // })

    // $("#formularioCompra").validate({
    //     rules: {
    //         nombre: {
    //             required: true,
    //             minlength: 4
    //         },
    //         libro: {
    //             required: true
    //         },
    //         correoElectronico: {
    //             required: true,
    //             email: true
    //         }
    //     },
    //     messages: {
    //         nombre: {
    //             required: "Debe introducir un nombre",
    //             minlength: "El nombre debe tener al menos 4 caracteres"
    //         },
    //         libro: {
    //             required: "Debe introducir un libro"
    //         },
    //         correoElectronico: {
    //             required: "El correo es obligatorio",
    //             email: "Debe introducir un correo válido (ejemplo@dominio.com)"
    //         }
    //     },
    //     submitHandler: function() {
    //         let nombre = $("#nombre").val();
    //         let libro = $("#libro").val();
    //         let correoElectronico = $("#correoElectronico").val();
            
    //         if (confirm("¿Desea realizar la compra del libro " + libro + "?")) {
    //             alert("Muchas gracias por confiar en nosotros " + nombre + ". La compra se ha realizado de forma correcta. Libro comprado: "+libro+". Se le ha enviado la factura correspondiente al correo "+correoElectronico)
    //         } else {
    //             alert("Compra cancelada")
    //         }
    //     }
    // });

    let nombre = $("#nombre").val().trim();
    let libro = $("#libro").val().trim();
    let correoElectronico = $("#correoElectronico").val().trim();
    
    let camposInvalidos = []

    if (nombre.length < 5){
        camposInvalidos.push("Debe introducir un nombre con al menos 5 caracteres")
    }

    if(libro === ""){
        camposInvalidos.push("Debe introducir un libro")
    }

    if(!/([a-zA-Z]+)@([a-zA-Z]+)/.test(correoElectronico)) {
        camposInvalidos.push("Debe introducir un correo válido con el formato ejemplo@ejemplo")
    }

    if(camposInvalidos.length > 0){
        let alerta = "Por favor, completa todos los campos antes de continuar. Errores en el formulario:"
        
        for(let campoInvalido of camposInvalidos){
            alerta += "\n"+campoInvalido
        }

        alert(alerta);
        return;
    }

    let aceptarCompra = confirm("¿Desea realizar la compra del libro " + libro + "?")

    if(aceptarCompra){
        alert("Muchas gracias por confiar en nosotros " + nombre + ". La compra se ha realizado de forma correcta. Libro comprado: "+libro+". Se le ha enviado la factura correspondiente al correo "+correoElectronico)
        $("#formularioCompra").toggleClass("hidden");
    } else {
        alert("Compra cancelada")
    }
}