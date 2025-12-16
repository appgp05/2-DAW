$().ready(() => {
    $("#video").addClass("oculto")

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

    $("#botonReproducir").on("click", ()=>{
        $("#video").get(0).play()
    })

    $("#botonPausar").on("click", ()=>{
        $("#video").get(0).pause()
    })

    $("#indicadoresVideo").text("asdasdads");
})
