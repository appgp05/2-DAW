$().ready(() => {
    $("video").addClass("oculto")

    $("#botonMostrarOcultarReproductor").on("click", () => {
        $("video").removeClass("oculto")
    })

    $("#botonReproducir").on("click", ()=>{
        $("video").get(0).play()
    })

    $("#botonPausar").on("click", ()=>{
        $("video").get(0).pause()
        console.log($("video").get(0).paused)
    })
})
