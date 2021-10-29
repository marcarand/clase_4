const cuerpo = document.getElementsByTagName("body")[0];
const imagen = document.getElementsByTagName("img")[0];

cuerpo.addEventListener("mousemove", function(evento) {
    if (evento.buttons) {
    imagen.style.top = evento.clientY + "px";
    imagen.style.left = evento.clientX + "px";
        }
    }
);
