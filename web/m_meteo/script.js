"use strict";

let meteoBox;

function meteoAggiorna(){

}

function m_meteo(id){
    meteoBox = document.getElementById(id);
    meteoBox.style.cssText += `
        background-color: aqua;
        overflow: hidden;
        background-image: url("m_meteo/pioggia.jpeg");
        background-size: cover;
        color: white;
    `;
    meteoBox.innerHTML = `
    <div>
        <p class="sfondo">
            <span class="ora">caio</span>
            <img class="icon" alt="icon">
            <span class="tempo"></span>
        </p>
        <p class="sfondo">
            <span class="ora"></span>
            <img class="icon" alt="icon">
            <span class="tempo"></span>
        </p>
        <p class="sfondo">
            <span class="ora"></span>
            <img class="icon" alt="icon">
            <span class="tempo"></span>
        </p>
        <p class="sfondo">
            <span class="ora"></span>
            <img class="icon" alt="icon">
            <span class="tempo"></span>
        </p>
    </div>
    `;
    meteoAggiorna(); // TODO: magari serve anche timer
}