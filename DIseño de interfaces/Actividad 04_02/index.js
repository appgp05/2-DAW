// $(document).ready(() => {
//     $(".caja").hover(
//         function() { $(this).css("background", "yellow"); },
//         function() { $(this).css("background", "lightgray"); }
//     );

//     $(".caja").click(
//         function() {toggleClass(this);}
//     );

//     function toggleClass(elemento){
//         if($(elemento).hasClass("resaltada")){
//             $(elemento).removeClass("resaltada")
//         } else {
//             $(elemento).addClass("resaltada")
//         }

//         var indiceClicado = $(elemento).attr("data-index");
//         console.log("¡Has pinchado en la caja con el índice:", indiceClicado, "!");
//     }

//     $(".caja").each(
//         function(index) {$(this).attr("data-index", index);}
//     )
// })

$().ready(() => {
    $(".caja").hover(
        function() { $(this).css("background", "yellow") },
        function() { $(this).css("background", "lightgray") }
    )

    $(".caja").each(
        function(indice) {
            $(this).click(function() {
                toggleClass(this)
                console.log("¡Has pinchado en la caja con el índice:", indice, "!")
            });
        }
    )
})

function toggleClass(elemento){
    if($(elemento).hasClass("resaltada")){
        $(elemento).removeClass("resaltada")
    } else {
        $(elemento).addClass("resaltada")
    }
}

function resaltarTodas(){
    $(".caja").each(function(){$(this).addClass("resaltada")})
}

function ocultarTodas(){
    $(".caja").each(function(){$(this).removeClass("resaltada")})
}

function alternarEstado(){
    $(".caja").each(function(){toggleClass(this)})
}

$().ready(() => {
    console.log($("ads"))
})