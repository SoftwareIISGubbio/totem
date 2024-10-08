"use strict";

let circolari_box;
function circolariMostra(numero) {
    const URL_PDF =`http://10.1.0.52:8080/pdf/${numero}`;
    let box = document.createElement('div');
    box.style.cssText = `
    position: fixed;
    left:0vh;top:0vh;
    width:100vw;
    height:100vh;
    background-color: rgba(0,0,0,0.9);
    `;
    box.id = "circ_box";
    circolari_box=box;
    box.innerHTML = `
    <div id="pagina" class="circ_container">
    <!--   CIRCOLARE ATTIVA   -->
    <div class="circolari">
        <iframe src="${URL_PDF}" width="100%" height="100%" id="circolareAttiva"></iframe>
    </div>

    <!--   CIRCOLARI   -->
    <div id="rispostaRic">
    </div>

    <!--   ricCategoria   -->
    <div class="categoria">
        <span id="chiudi_box" onclick="circolari_box.remove()">chiudi</span>
<!-- oscurata la ricerca 
        <select id="ricerca" onchange="ricerca()">
            <option disabled selected hidden>Ricerca per</option>
            <option id="ric_cat" value="ricCategoria">Categoria</option>
            <option id="ric_num" value="ricNumero">Numero</option>
        </select>

        <select id="ricCategoria" placeholder="Tipologia" onchange="carica()">
            <option disabled selected hidden>Categoria</option>
            <option value="albo_sindacale">Albo sindacale</option>
            <option value="alunni">Alunni</option>
            <option value="docenti">Docenti</option>
            <option value="famiglie">Famiglie</option>
            <option value="personale_ata">Personale ATA</option>
            <option value="per_tutti">Per tutti</option>
        </select>
        <div class="allineaVerticale">
            <input type="number" min="1" placeholder="Numero cirolare..." id="ricNumero" name="ricNumero">
            <button id="cercaNum" onclick="caricaPerNumero()">Cerca</button>
        </div>
-->
    </div>
    
</div>
    `;
    document.body.appendChild(box);
    ricercaCircolari();
}

async function m_circolari(id) {
    circolari_box = document.getElementById(id);
    aggiornaElenco();
}


async function aggiornaElenco(){
    console.log("aggiornaElenco");
    let array = [];
    let url = "http://10.1.0.52:8080/circolari?N=5";
    let risposta = await fetch(url);
    if (risposta.ok) {
        let tmp = "<h1>Circolari</h1>";
        let array = await risposta.json();
        for(let i=0; i<array.length; i++){
            tmp += `<p onclick="circolariMostra('${array[i].numero}')"><strong>CIRC${array[i].numero}</strong>: ${array[i].nome}</p>`;
        }
        tmp += `<p id="altro" onclick="circolariMostra()">Visualizza altre</p>`
        circolari_box.innerHTML = tmp;
    } else {
        console.log("Failed to fetch");
        // TODO: put something on the page!
    }
    setTimeout(aggiornaElenco, 15*60*1000); // aggiorno una volta ogni 15 minuti
}

function ricerca() {
    let ricercaSelezionata = document.getElementById("ricerca").value;
    switch (ricercaSelezionata) {
        case "ricCategoria":
            ricCategoria();
            break;
        case "ricNumero":
            ricNumero();
            break;
    }
}

function ricCategoria() {
    let select = document.getElementById("ricCategoria");
    document.getElementById("ricNumero").style.display = "none";
    document.getElementById("cercaNum").style.display = "none"
    select.style.display = "unset";
    document.getElementById("rispostaRic").innerHTML = "";
}

function ricNumero() {
    let select = document.getElementById("ricNumero");
    document.getElementById("ricCategoria").style.display = "none";
    document.getElementById("cercaNum").style.display = "unset";
    select.style.display = "unset";
    document.getElementById("rispostaRic").innerHTML = "";
}

function carica() {
    let categoriaSelezionata = document.getElementById("ricCategoria").value;
    switch (categoriaSelezionata) {
        case "albo_sindacale":
            ricercaCircolari('albo_Sindacale');
            break;
        case "alunni":
            ricercaCircolari('alunni');
            break;
        case "docenti":
            ricercaCircolari('docenti');
            break;
        case "famiglie":
            ricercaCircolari('famiglie');
            break;
        case "personale_ata":
            ricercaCircolari('personale');
            break;
        case "per_tutti":
            ricercaCircolari();
            break;
         default:
            break;
    }
}

async function ricercaCircolari(cosaCercare="") {
    let url = cosaCercare.length>0
        ? `http://10.1.0.52:8080/circolari?${cosaCercare}=1`
        : `http://10.1.0.52:8080/circolari`;
    console.log(url);
    let risposta = await fetch(url);
    if (risposta.ok) {
        let dati = await risposta.json();
        let divDestinazione = document.getElementById("rispostaRic");
        divDestinazione.innerHTML = "";
        for (let i = 0; i < dati.length; i++) {
             let numero = dati[i].numero;
             let titolo = dati[i].nome;
             let data = dati[i].data;
             // Crea un nuovo elemento div
             let nuovoDiv = document.createElement("div");
             nuovoDiv.className = "circ";
             nuovoDiv.setAttribute("width", "50em");
             nuovoDiv.setAttribute("onclick", "aggiungiCirc('http://10.1.0.52:8080/pdf/" + dati[i].numero + "')");
             // Contenuto del nuovo div
             nuovoDiv.innerHTML = `
                 <div class="icone">
                     <img src="pdf.png" width="50em">
                 </div>
                 <div class="testo">
                     <h4>CIRC` + numero + `</h4>
                     <p>` + titolo + `</p>
                     <h4>` + data + `</h4>
                 </div>`;
             // Aggiungi il nuovo div al div di destinazione
             divDestinazione.appendChild(nuovoDiv);
        }
    }
}

function caricaPerNumero(){
     let numero = document.getElementById("ricNumero").value;
     aggiungiCirc("http://10.1.0.52:8080/pdf/"+numero);
}

function aggiungiCirc(dati){
    //Funzione che sostituisce la circolare attiva nell'embed
    console.log(dati);
    document.getElementById('circolareAttiva').src = dati;
}
