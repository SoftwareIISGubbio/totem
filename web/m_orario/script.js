"use strict";

function orarioMostra(){
    console.log("ciao, orario");
    let box = document.createElement('div');
    box.style.cssText = `
    position: fixed;
    left:0vh;top:0vh;
    width:100vw;
    height:100vh;
    background-color: rgba(0,0,0,0.9);
    `;
    box.id="orario_box";
    box.addEventListener('click', () => {
        box.remove();
    });
    // FIXME: inserisci il contenuto
    box.innerHTML = `
    <div class="circ_container" id="circ_pagina">
    hello orario!
    </div>
    `;
    document.body.appendChild(box);
}

function m_orario(id){
    let orarioBox = document.getElementById(id);
    orarioBox.innerHTML = `orario<br>
    <img src="wip.png" alt="lavori in corso" width="100">
    `; // FIXME: inserisci il contenuto

    orarioBox.addEventListener('click', circolariMostra);

}