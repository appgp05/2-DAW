$().ready(() => {
    $("li").each(function () {
        console.log(this)
    })

    let article0 = $("article").get(0)
    console.log(article0)

    $("nav > *").each(function () {
        console.log(this)
    })
})