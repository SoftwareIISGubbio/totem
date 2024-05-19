"use strict";

function m_bot(id){
    let botBox = document.getElementById(id);
    botBox.innerHTML = `
       <p>ultime notizie</p>
       <img src="wip.png" alt="lavori in corso" width="100">
       `;
    botBox.style.cssText = `
        padding:1em;
    `;

}