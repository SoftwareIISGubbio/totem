"use strict";

function immagineCaricata(){
    console.log("ciao");
    let imm = document.getElementById("immagine_tbot");
    if(imm.width>imm.height){
        imm.style.height="40vh";
        console.log("orizzontale");
    } else {
        imm.style.height="60vh";
        console.log("verticale");
    }
}

async function m_bot(id){
    let botBox = document.getElementById(id);

    let risposta = await fetch("http://10.1.0.52:8080/notizie?N=1");
    let elenco = await risposta.json();
    console.log(elenco);
    let urlImmagine = "http://10.1.0.52:8080/immagini/" + elenco[0].tag;

    botBox.innerHTML = `
       <img src="${urlImmagine}" id="immagine_tbot" alt="lavori in corso" style="height: 40vh" onload="immagineCaricata()">
       <p>${elenco[0].descrizione}</p>`;

    // FIXME: le misure dell'immagine vanno calcolate perché dipende se è verticale o orizzontale

}
