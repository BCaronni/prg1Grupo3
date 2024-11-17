let buscarForm = document.querySelector("#buscarForm");

buscarForm.addEventListener("submit", function(event) {
    let searchInput = document.querySelector("#searchInput");
    let errorMessage = document.querySelector("#mensaje-error");

    // Validación de la longitud del texto
    if (searchInput.value.length < 3) { // Corregido el paréntesis aquí
        errorMessage.style.display = "block"; // Muestra el mensaje de error
        event.preventDefault(); // Detiene el envío del formulario
    } else {
        errorMessage.style.display = "none"; // Oculta el mensaje de error
    }
});