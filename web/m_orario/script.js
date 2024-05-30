"use strict";

function clearTableCells() {
    const table = document.getElementById('tabella');
    const cells = table.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '--';
    }
}

async function recuperaInformazioni() {
    let risposta = await fetch("http://10.1.0.52:8080/orario");
    let orario = await risposta.json();
    console.log(orario);
}
async function Orario_combo() {

    let elemento;
    let comboBox = document.getElementById("prof");

    const url = "http://10.1.0.52:8080/professori";
    console.log(url);
    const risposta = await fetch(url);
    const elenco = await risposta.json();
    for (let i = 0; i < elenco.length; i++) {
        elemento = document.createElement("option");
        elemento.innerText = elenco[i];
        comboBox.appendChild(elemento);
    }
}

async function recuperoOrario() {
    let elemento;

    let comboBox = document.getElementById("prof");
    let nome = comboBox.value;
    console.log(nome);
    const url = "http://10.1.0.52:8080/orario?professore=" + nome;
    console.log(url);
    const risposta = await fetch(url);
    const elenco = await risposta.json();
    console.log(elenco);
    clearTableCells();
    for (let i = 0; i < elenco.length; i++) {
        let casella = "c" + elenco[i].giorno + elenco[i].ora;
        console.log(casella);
        let cella = document.getElementById(casella);
        cella.innerText = elenco[i].classe;
    }
}
async function OrarioClassi_combo() {

    let elemento;
    let comboBox = document.getElementById("classi");

    const url = "http://10.1.0.52:8080/classi";
    console.log(url);
    const risposta = await fetch(url);
    const elenco = await risposta.json();
    for (let i = 0; i < elenco.length; i++) {

        console.log(elenco[i]);
        elemento = document.createElement("option");
        elemento.innerText = elenco[i];
        comboBox.appendChild(elemento);
    }
}
async function recuperoOrarioClassi() {
    let elemento;

    let comboBox = document.getElementById("classi");
    let classe = comboBox.value;
    console.log(classe);
    const url = "http://10.1.0.52:8080/orario?classe=" + classe;
    console.log(url);
    const risposta = await fetch(url);
    const elenco = await risposta.json();
    console.log(elenco);

    for (let i = 0; i < elenco.length; i++) {
        let casella = "c" + elenco[i].giorno + elenco[i].ora;
        console.log(casella);
        let cella = document.getElementById(casella);
        cella.innerText = "";
        cella.innerText = elenco[i].professore;

    }
}

let box_orario;
function orarioMostra(){
    box_orario = document.createElement('div');
    box_orario.style.cssText = `
    position: fixed;
    left:0vh;top:0vh;
    width:100vw;
    height:100vh;
    background-color: rgba(0,0,0,0.9);
    `;

    box_orario.id="orario_box";
    
    

    
    // FIXME: inserisci il contenuto
    box_orario.innerHTML = `
    <div class="orario_container" id="orario_pagina" class="orario_griglia">
    <div class="orario_professori">
    <p id="allinea" onclick="box_orario.remove()">chiudi pagina</p>
        <p>Prof</p>
        <select id="prof" onchange="recuperoOrario()">
            <option></option>
        </select>
        <p>Classi</p>
        <select id="classi" onchange="recuperoOrarioClassi()">
            <option></option>
        </select>
    </div>

    <div class="orario_orario">ORARIO:</div>
    <div class="orario_materie">
        <div id="tabella">
            <table>
                <tr>
                    <th> </th>
                    <th>Lunedì</th>
                    <th>Martedì</th>
                    <th>Mercoledì</th>
                    <th>Giovedì</th>
                    <th>Venerdì</th>
                </tr>
                <tr>
                    <th>08:00</th>
                    <td id="c00">--</td>
                    <td id="c10">--</td>
                    <td id="c20">--</td>
                    <td id="c30">--</td>
                    <td id="c40">--</td>
                </tr>
                <tr>
                    <th>08:55</th>
                    <td id="c01">--</td>
                    <td id="c11">--</td>
                    <td id="c21">--</td>
                    <td id="c31">--</td>
                    <td id="c41">--</td>

                </tr>
                <tr>
                    <th>10:00</th>
                    <td id="c02">--</td>
                    <td id="c12">--</td>
                    <td id="c22">--</td>
                    <td id="c32">--</td>
                    <td id="c42">--</td>

                </tr>
                <tr>
                    <th>10:55</th>
                    <td id="c03">--</td>
                    <td id="c13">--</td>
                    <td id="c23">--</td>
                    <td id="c33">--</td>
                    <td id="c43">--</td>

                </tr>
                <tr>
                    <th>11:55</th>
                    <td id="c04">--</td>
                    <td id="c14">--</td>
                    <td id="c24">--</td>
                    <td id="c34">--</td>
                    <td id="c44">--</td>
                </tr>
                <tr>
                    <th>12:45</th>
                    <td id="c05">--</td>
                    <td id="c15">--</td>
                    <td id="c25">--</td>
                    <td id="c35">--</td>
                    <td id="c45">--</td>
                </tr>
                <tr>
                    <th>13:35</th>
                    <td id="c06">--</td>
                    <td id="c16">--</td>
                    <td id="c26">--</td>
                    <td id="c36">--</td>
                    <td id="c46">--</td>
                </tr>
                <tr>
                    <th>14:25</th>
                    <td id="c07">--</td>
                    <td id="c17">--</td>
                    <td id="c27">--</td>
                    <td id="c37">--</td>
                    <td id="c47">--</td>
                </tr>
                <tr>
                    <th>15:20</th>
                    <td id="c08">--</td>
                    <td id="c18">--</td>
                    <td id="c28">--</td>
                    <td id="c38">--</td>
                    <td id="c48">--</td>
                </tr>
            </table>
        </div>

    </div>
    </div>
    `;
    document.body.appendChild(box_orario);
    Orario_combo();
    OrarioClassi_combo();
}

function m_orario(id){
    let orarioBox = document.getElementById(id);
    orarioBox.innerHTML = `orario<br>
    <img src="wip.png" alt="lavori in corso" width="100">
    `; // FIXME: inserisci il contenuto

    orarioBox.addEventListener('click', orarioMostra);

}
