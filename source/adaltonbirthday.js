'use strict';

const containerItems = document.querySelector("div.container-items");
const nbutton = document.querySelector("div#next");
const pbutton = document.querySelector("div#previous");
const msg = document.getElementById("msg");

const images = [
    {"id": "1", "url":"./public/padaltonbro/adaltonone.jpg", "mensagem": "X-men Sccot com seu óculos escuro para não danificar sua camera"},
    {"id": "2", "url":"./public/padaltonbro/adaltontwo.jpg", "mensagem": "Adalton exibindo seus lindos caixos"},
    {"id": "3", "url":"./public/padaltonbro/adaltonthree.jpg", "mensagem": "2 Pombinhos sobrevoando a floresta"},
    {"id": "4", "url":"./public/padaltonbro/adaltonfour.jpg", "mensagem": "Um sobrevivente em um meio pandêmico"},
    {"id": "5", "url":"./public/padaltonbro/adaltonfive.jpg", "mensagem": "Adalton, Explorando o Pau Brasil"},
    {"id": "6", "url":"./public/padaltonbro/adaltonsix.jpg", "mensagem": "Papparazi tirando foto da nossa celebridade"},
    {"id": "7", "url":"./public/padaltonbro/adaltonseven.jpg", "mensagem": "Jovens vendo a natureza mais de perto..."},

]
const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
        <div class="item"><img src="${image.url}" data-id="${image.id}"></div>
        `
    });
}

const atualizarMensagem = () => {
    const firstImage = items[1].querySelector('img');
    if (!firstImage) return;
    const imageId = firstImage.getAttribute('data-id');
    const imagem = images.find(img => img.id === imageId);
    msg.innerText = imagem?.mensagem || "Sem mensagem...";
}


loadImages(images, containerItems);
let items = document.querySelectorAll(".item");
atualizarMensagem();

const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll(".item")
    atualizarMensagem();
}

const next = () => {
    const lastItem = items[items.length -1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll(".item")
    atualizarMensagem();
}

document.getElementById("previous").addEventListener("click", previous);
document.getElementById("next").addEventListener("click", next)

document.getElementById("msg");
