const box = document.querySelector(".box_images")
const imagens = document.querySelectorAll(".box_images img")
let contador = 0
function slider(){
    contador++
    if (contador > imagens.length - 1){
        contador = 0
    }
    box.style.transform = `translateX(${-contador * 100}vw)`
}
setInterval(slider, 4000)


