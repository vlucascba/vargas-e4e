function toggleMenu() {
    const elementos = document.querySelector('.nav-menu');
    elementos.classList.toggle('mostrar');
}


/* cursos ocultar mostrar */

function toggleInfo(btn) {
    var info = btn.nextElementSibling;
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}
