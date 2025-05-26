'use strict';

const containerItems = document.querySelector("div.container-items");//div do html
const nbutton = document.querySelector("div#next");
const pbutton = document.querySelector("div#previous");

const images = [
    {"id": "1", "url":"./public/padaltonbro/adaltonone.jpg"},
    {"id": "2", "url":"./public/padaltonbro/adaltontwo.jpg"},
    {"id": "3", "url":"./public/padaltonbro/adaltonthree.jpg"},
    {"id": "4", "url":"./public/padaltonbro/adaltonfour.jpg"},
    {"id": "5", "url":"./public/padaltonbro/adaltonfive.jpg"},
    {"id": "6", "url":"./public/padaltonbro/adaltonsix.jpg"},
    {"id": "7", "url":"./public/padaltonbro/adaltonseven.jpg"},
]
const loadImages = (images, container) => {
    images.forEach( image => {
        container.innerHTML += `
        <div class="item"> <img src=${image.url}></div>
        `
    });
    
}

loadImages(images, containerItems)

let items = document.querySelectorAll(".item")//div do js

const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll(".item")
}

const next = () => {
    const lastItem = items[items.length -1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll(".item")
}

document.getElementById("previous").addEventListener("click", previous);
document.getElementById("next").addEventListener("click", next)