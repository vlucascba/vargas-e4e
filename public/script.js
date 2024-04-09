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

/*boton hamburgues */

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show-menu');
}

/*barra scroll*/

const scrollbar = document.querySelector('.scrollbar');
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

    scrollbar.addEventListener('input', function () {
        const scrollPosition = this.value / 100 * pageHeight;
        window.scrollTo(0, scrollPosition);
    });