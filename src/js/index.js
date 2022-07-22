const btnMenu = document.getElementById('btn-menu');
const btnVoltaMenu = document.getElementById('volta-menu');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);
btnVoltaMenu.addEventListener('click', toggleMenu);
