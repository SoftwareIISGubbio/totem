"use strict";

const CELLA_VUOTA = "--";

function clearTableCells() {
    const table = document.getElementById('tabella');
    const cells = table.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = CELLA_VUOTA;
    }
}

async function orario_comboProfessori() {
    let elemento;
    let comboBox = document.getElementById("prof");
    const url = "http://10.1.0.52:8080/professori";
    const risposta = await fetch(url);
    const elenco = await risposta.json();

    for (let i = 0; i < elenco.length; i++) {
        elemento = document.createElement("option");
        elemento.innerText = elenco[i];
        comboBox.appendChild(elemento);
    }
}

async function orario_recuperoPerProfessore() {
    let elemento;
    let comboBox = document.getElementById("prof");
    let nome = comboBox.value;
    const url = "http://10.1.0.52:8080/orario?professore=" + nome;
    const risposta = await fetch(url);
    const elenco = await risposta.json();

    clearTableCells();
    orario_titolo.innerText="Prof. "+nome;
    for (let i = 0; i < elenco.length; i++) {
        let casella = "c" + elenco[i].giorno + elenco[i].ora;
        // let cella = document.getElementById(casella);
        // cella.innerText = elenco[i].classe;
        aggiungiOra(casella, elenco[i], true, false);
    }
}
async function orario_comboClassi() {
    let elemento;
    let comboBox = document.getElementById("classi");
    const url = "http://10.1.0.52:8080/classi";
    const risposta = await fetch(url);
    const elenco = await risposta.json();

    for (let i = 0; i < elenco.length; i++) {
        elemento = document.createElement("option");
        elemento.innerText = elenco[i];
        comboBox.appendChild(elemento);
    }
}
async function orario_recuperoPerClasse() {
    let elemento;
    let comboBox = document.getElementById("classi");
    let classe = comboBox.value;
    const url = "http://10.1.0.52:8080/orario?classe=" + encodeURIComponent(classe);
    const risposta = await fetch(url);
    const elenco = await risposta.json();

    clearTableCells();
    orario_titolo.innerText="Classe "+classe;
    for (let i = 0; i < elenco.length; i++) {
        let casella = "c" + elenco[i].giorno + elenco[i].ora;
        aggiungiOra(casella, elenco[i], false, true);
        // let cella = document.getElementById(casella);
        // cella.innerText = "";
        // cella.innerText = elenco[i].professore;
    }
}

function aggiungiOra(idCasella, descrizione, mostraClasse=true, mostraProf=true){
    let cella = document.getElementById(idCasella);
    console.log(descrizione);
    let dClasse=mostraClasse?'<span class="classe">'+descrizione.classe+'</span>':'';
    let dProff=mostraProf?'<span class="prof">'+descrizione.professore+'</span>':'';
    if(cella.innerText==CELLA_VUOTA){
        cella.innerHTML = `
        <span class="aula">${descrizione.aula}</span>
        <span class="materia">${descrizione.materia}</span>
        ${dClasse}
        ${dProff}`;
    }else{
        // TODO: verificare con STA se crea problemi non ripetere il nome della materia
        cella.innerHTML += `
        ${dClasse}
        ${dProff}`;
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

    box_orario.innerHTML = `
    <div id="orario_pagina" class="orario_griglia">
        <div class="orario_professori">
            <p>Prof: </p>
            <select id="prof" onchange="orario_recuperoPerProfessore()">
                <option></option>
            </select>
        </div>
        <div class="orario_classi">
            <p>Classi: </p>
            <select id="classi" onchange="orario_recuperoPerClasse()">
                <option></option>
            </select>
        </div>
        <div id="allinea" onclick="box_orario.remove()" class="orario_chiudi">
            <span>chiudi pagina</span>
        </div>
    <div class="orario_materie">
        <h1 id="orario_titolo"></h1>
            <table id="tabella">
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
    `;
    document.body.appendChild(box_orario);
    try{
        orario_comboProfessori();
        orario_comboClassi();
    }catch(errore){
        document.querySelector(".orario_materie").innerHTML+=`<p>ERRORE: ${errore.message}</p>`;
    }
}

function m_orario(id){
    let orarioBox = document.getElementById(id);
    orarioBox.style.cssText += `display:flex`;
    orarioBox.innerHTML = `<img style="max-width:100%;max-height:100%" src="m_orario/ico_orario.png" alt="orario" >`;
    orarioBox.addEventListener('click', orarioMostra);
}
