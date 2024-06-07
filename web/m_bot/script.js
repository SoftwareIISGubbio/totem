"use strict";

async function m_bot(id){
    let botBox = document.getElementById(id);

    let risposta = await fetch("http://10.1.0.52:8080/notizie?N=1");
    let elenco = risposta.json();
    let urlImmagine = "http://10.1.0.52:8080/immagini/" + elenco[0].tag;

    botBox.innerHTML = `
       <p>ultime notizie</p>
       <img src="${urlImmagine}" alt="lavori in corso" style="height: 45vh">
       `;
    botBox.style.cssText = `
        padding:1em;
    `;

}