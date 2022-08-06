const botoes = document.querySelectorAll('.control');
let itemAtual = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;
const carrossel = document.getElementById('carrossel1');

items.forEach(item => item.setAttribute('draggable', 'false'));
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const isEsquerda = botao.classList.contains('arrow-left');
        if (isEsquerda) {
            itemAtual -= 1;
        } else {
            itemAtual += 1;
        }

        if (itemAtual >= maxItems) {
            itemAtual = 0;
        } else if (itemAtual < 0) {
            itemAtual = maxItems - 1;
        }

        console.log('botao esquedo', isEsquerda);
        items.forEach(item =>
            item.classList.remove('item-atual'));
        items[itemAtual].scrollIntoView({ inline: "center", behavior: "smooth" });
        items[itemAtual].classList.add('item-atual');
    })
});

let initialPosition = null;
let moving = false;

const clicou = (e) => {
    initialPosition = e.pageX;
    moving = true;
}

const moveu = (e) => {
    if (moving) {
        const currentPosition = e.pageX;
        const diff = currentPosition - initialPosition;
        if (diff > 0) {
            if (diff > 200) {
                itemAtual -= 1;
                items.forEach(item =>
                    item.classList.remove('current-item'));
                items[itemAtual].scrollIntoView({ inline: "center", behavior: "smooth" });
                items[itemAtual].classList.add('current-item');
            }
            console.log('maior q zero', diff);
            // items[currentItem].scrollIntoView({ block: "center", behavior: "smooth" });
        } else if (diff < 0) {
            console.log('menor q zero', diff);
            itemAtual += 1;
            // items[currentItem].scrollIntoView({ block: "center", behavior: "smooth" });

        }
    }
}

const parou = (e) => {
    moving = false;
}


if (window.PointerEvent) {
    carrossel.addEventListener('pointerdown', clicou);
    carrossel.addEventListener('pointermove', moveu);
    carrossel.addEventListener('pointerup', parou);

}