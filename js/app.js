
var mostrarOcultar = function(e) {

    var tabSeleccionado = e.target.dataset.tabSeleccionado;
    var grimes = document.getElementById("grimes");
    var halsey = document.getElementById("halsey");
    var demi = document.getElementById("demi");

    if (tabSeleccionado === "grimes") {
        console.log("vamos a desayunar");
        halsey.style.display = "none";
        demi.style.display = "none";
        grimes.style.display = "block";

    } else if (tabSeleccionado === "halsey") {
       console.log("vamos a almorzar");
       demi.style.display = "none";
       grimes.style.display = "none";
       halsey.style.display = "block";

    } else if (tabSeleccionado== "demi")  {
          console.log("vamos a cenar");
          grimes.style.display = "none";
          halsey.style.display = "none";
          demi.style.display = "block";
    }
};

var cargarPagina = function() {

    grimes.style.display = "none";
    halsey.style.display = "none";
    demi.style.display = "none";

    var elementosTabs = document.getElementsByClassName("tab");
    for (var i = 0; i < elementosTabs.length; i++) {
      elementosTabs[i].addEventListener("click", mostrarOcultar);
    }
};

cargarPagina();
