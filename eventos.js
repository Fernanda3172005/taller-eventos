document.addEventListener("DOMContentLoaded", function() {
    let div = document.getElementById("div");
    let boton = document.getElementById("button");

    // Manejador para el div
    div.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });

    // Manejador para el botón
    boton.addEventListener("click", function(event) {
        event.stopPropagation(); // Detiene la propagación del evento hacia el div
        alert("Hola! Soy el botón");
    });
});
