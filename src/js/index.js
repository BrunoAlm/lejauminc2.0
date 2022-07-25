const btnMenu = document.getElementById('abre-menu');
const btnVoltaMenu = document.getElementById('volta-menu');

function toggleMenu() {
    const drawer = document.getElementById('nav-do-lado');
    drawer.classList.toggle('expandiu');
    btnMenu.classList.toggle('expandiu');
}

btnMenu.addEventListener('click', toggleMenu);
btnVoltaMenu.addEventListener('click', toggleMenu);
