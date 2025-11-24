// addEventListener("DOMContentLoaded", () => {
   

//     video.pause();

//     video.addEventListener("click", () => {
//         // video.style.display = "none"
//         video.play();
//     });

// })


addEventListener("DOMContentLoaded", () => {
    let video = document.getElementById("miVideo")
    
    video.muted = true;

    video.play();
})

addEventListener("mouseover", () => {
    let video = document.getElementById("miVideo")

    video.muted = false

    video.play();
})

function reproducir(){
    let video = document.getElementById("miVideo")
    
    video.play();
}

