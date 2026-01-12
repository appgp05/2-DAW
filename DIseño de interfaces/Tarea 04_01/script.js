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
})

function comprarLibro(){
    let nombre = $("#nombre").get(0).value
    let libro = $("#libro").get(0).value
    let correoElectronico = $("#correoElectronico").get(0).value
    
    alert("Muchas gracias por su compra "+nombre+". Compra exitosa del libro "+libro+". Sele ha enviado la factura correspondiente al correo "+correoElectronico)
}