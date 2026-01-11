$().ready(() => {
    $("li").each(function () {
        console.log(this)
    })

    let article0 = $("article").get(0)
    console.log(article0)

    $("nav > *").each(function () {
        console.log(this)
    })

    let lis = $("#contenedor").find("li")
    console.log(lis)
    
    let textos = $("#form").find("input[type=text]")
    console.log(textos)

    let articles = $("section").find("article")
    console.log(articles)
    
    console.log(articles)
    
    $("section").each(function () {
        let articles2 = $(this).find("article")

        console.log(articles2 ," son los artículos de",$(this))
    })

    $("#buttonResaltarFinds").on("click", () => resaltarFinds([lis, textos, articles]))

    let parent = $($("li").get(0)).parent()
    console.log(parent)

    let articleSubido = $($("article").get(0)).parent()
    let sectionSubido = articleSubido.parent().parent()
    console.log(articleSubido)
    console.log(sectionSubido)

    let divContenedor = $("#contenedor")
    let hijosDivContenedor = divContenedor.children()
    console.log(divContenedor)
    console.log(hijosDivContenedor)
})

let resaltado = false

function resaltarFinds(finds){
    for(let find of finds){
        $(find).each(function() {
            if(resaltado){
                $(this).removeClass("resaltado")
            } else {
                $(this).addClass("resaltado")
            }
        })
    }
    
    resaltado = !resaltado
}