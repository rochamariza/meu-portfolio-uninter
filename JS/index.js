document.querySelector(".box1").style = "display:none"
document.querySelector(".box2").style = "display:none"
document.querySelector(".box3").style = "display:none"
document.querySelector(".box4").style = "display:none"

function mudarLink(pagina) {
    document.querySelector(".box1").style = "display:none"
    document.querySelector(".box2").style = "display:none"
    document.querySelector(".box3").style = "display:none"
    document.querySelector(".box4").style = "display:none"
    if (pagina == 'pag1') {
        document.querySelector(".box1").style = "display:flex"
    } else if (pagina == 'pag2') {
        document.querySelector(".box2").style = "display:flex"
    } else if (pagina == 'pag3') {
        document.querySelector(".box3").style = "display:flex"
    } else if (pagina == 'pag4') {
        document.querySelector(".box4").style = "display:flex"
    }
}