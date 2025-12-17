$().ready(() => {
    const player = new Plyr('#video', {
        controls: [
            "play",
            "progress",
            "current-time",
            "mute",
            "volume",
            "fullscreen"
        ]
    });

    $("#video").addClass("oculto")

    $("div > video").each(function () {
        this.on("click", function () {
            this.addClass("resaltado")
        })
    })

    $("#checkboxAceptoReproduccion").on("change", function ()  {
        const checked = this.checked

        $(".requiereAceptarReproduccion").each(function () {
            this.disabled = !checked
        })
    })

    $("#botonMostrarOcultarReproductor").on("click", () => {
        if($("#video").hasClass("oculto")){
            $("#video").removeClass("oculto")
        } else {
            $("#video").addClass("oculto")
        }
    })

    $("#botonComprobarPausa").on("click", ()=>{
        if($("#video").get(0).paused){
            console.log("El viídeo está pausado")
        } else {
            console.log("El vídeo se está reproduciendo")
        }
    })

    // $(".requiereAceptarReproduccion").prop("disabled", true)

    $(".requiereAceptarReproduccion").each(function () {
        this.disabled = true
    })

    $("#botonReproducir").on("click", ()=>{
        if($("#checkboxAceptoReproduccion").get(0).checked){
            $("#video").get(0).play()
        } else {
            alert("Debes aceptar reproducir el contenido multimedia mediante el checkbox")
        }
    })

    $("#botonPausar").on("click", ()=>{
        $("#video").get(0).pause()
    })


    setInterval(() => {
        const video = $("#video").get(0)

        const tiempoActual = video.currentTime.toFixed()
        const tiempoTotal = video.duration.toFixed()
        const porcentaje = (tiempoActual * 100 / tiempoTotal).toFixed()


        $("#indicadoresVideo").text(tiempoActual + ":" + tiempoTotal + " | " + porcentaje + "%");
    }, 1000)
})
