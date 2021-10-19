var cuerpo = document.querySelector("body")
var boton = document.querySelector("button")
var parrafo = "<p>Beep</p>"
var seEjecutaEnEvento = function() {
    cuerpo.insertAdjacentHTML("beforeend", parrafo)
    cuerpo.classList.toggle("color")
}

boton.addEventListener("click", seEjecutaEnEvento)

