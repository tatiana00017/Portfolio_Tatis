//  Llamar Header y Footer
function loadHTML(el, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector(el).innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el contenido:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    loadHTML('header', 'header.html');
    loadHTML('footer', 'footer.html');
});


