'use strict';

const images = [
    { 'id': '1', 'url':'./images/Zoro2.jpg' },
    { 'id': '2', 'url':'./images/Zoro1.jpg' },
    { 'id': '3', 'url':'./images/Zoro3.jpg' },
    { 'id': '4', 'url':'./images/Zoro4.jpg' },
    { 'id': '5', 'url':'./images/Zoro5.jpg' },
    { 'id': '6', 'url':'./images/Zoro6.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const next = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const previous = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);