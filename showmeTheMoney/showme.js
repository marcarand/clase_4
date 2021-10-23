const boton_money = document.getElementById("boton_money")
const imagen_money = document.getElementById("imagen_money")

const boton_miami = document.getElementById("boton_miami")
const imagen_miami = document.getElementById("imagen_miami")

const boton_riqui = document.getElementById("boton_riqui")
const imagen_riqui = document.getElementById("imagen_riqui")

const imagenes = document.getElementsByTagName("img");

boton_money.addEventListener("click", function() {
    imagen_money.classList.toggle("oculto");
    }
);

boton_miami.addEventListener("click", function() {
    imagen_miami.classList.toggle("oculto");
    }
);

boton_riqui.addEventListener("click", function() {
    imagen_riqui.classList.toggle("oculto");
    }
);


for(var i=0; i< imagenes.lenght; i++){
    imagenes[i].addEventListener("click", function() {
        imagenes[i].classList.toggle("oculto");
    });
};
