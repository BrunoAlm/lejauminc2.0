const btnMenu = document.getElementById('abre-menu');
const btnVoltaMenu = document.getElementById('volta-menu');

function abreMenu() {
    const drawer = document.getElementById('nav-do-lado');
    drawer.classList.toggle('expandiu');
    btnMenu.classList.toggle('expandiu');
    btnVoltaMenu.classList.toggle('expandiu');
}

btnMenu.addEventListener('click', abreMenu);
btnVoltaMenu.addEventListener('click', abreMenu);
