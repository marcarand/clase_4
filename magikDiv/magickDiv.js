const magic = document.getElementById("magic");
var imagen = document.getElementsByTagName("img")[0];

magic.addEventListener("mouseover", function() {
    imagen.classList.toggle("invisible");
    }
);
