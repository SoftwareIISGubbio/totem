"use strict";

function circolariMostra(numero){
    console.log("ciao");
    let box = document.createElement('div');
    box.style.cssText = `
    position: fixed;
    left:0vh;top:0vh;
    width:100vw;
    height:100vh;
    background-color: rgba(0,0,0,0.9);
    `;
    box.id="circ_box";
    box.addEventListener('click', () => {
        box.remove();
    });
    // FIXME: inserisci il contenuto
    box.innerHTML = `
    <div class="circ_container" id="circ_pagina">
    hello circolari! ${numero}
    </div>
    `;
    document.body.appendChild(box);
}

function m_circolari(id){
    let circolariBox = document.getElementById(id);
    circolariBox.innerHTML = `
       <p onclick="circolariMostra(345)">345: titolo ultima circolare</p>
       <p onclick="circolariMostra(345)">234: titolo penultima circolare</p>
       <p onclick="circolariMostra(345)">123: titolo terzultima circolare con titolo terribilmente lungo</p>
       <p onclick="circolariMostra()">cerca</p>
       <img src="wip.png" alt="lavori in corso" width="100">
       `;
    circolariBox.style.cssText = `
        padding:1em;
    `;

}