document.addEventListener('DOMContentLoaded', () => {
    // Cargar header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    // Cargar footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });

    // Manejo de envío de formulario
    document.getElementById('simpleForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado');
    });
});
