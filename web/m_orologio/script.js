"use strict";
let orologioBox;

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}

function avviaOrologio() {
    const giorno = new Date();
    const giorniSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    const mesiIta = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

    let h = giorno.getHours();
    let m = giorno.getMinutes();
    let s = giorno.getSeconds();
    let g = giorniSettimana[giorno.getDay()];
    let d = giorno.getDate();
    let mese = mesiIta[giorno.getMonth()];
    let a = giorno.getFullYear();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('orologio').innerHTML = g + "<br>" + d + " " + mese + "<br>" + h + ":" + m;
    setTimeout(avviaOrologio, 1000);
}

function m_orologio(id){
    orologioBox = document.getElementById(id);
    orologioBox.innerHTML = `<div id="orologio"></div>`;

    orologioBox.style.cssText += `
    font-family:Arial, Helvetica, sans-serif;
    background-color: #23272a;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    text-align: center;
    font-size: 4vh;
    font-weight: bold;
    background-color: #ffe100;
    padding: 10px 20px;
    `;
    avviaOrologio()
}