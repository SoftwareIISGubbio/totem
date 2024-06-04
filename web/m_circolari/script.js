"use strict";

function circolariMostra(numero) {
    const URL_PDF =`http://10.1.0.52:8080/pdf/${numero}`;
    console.log(URL_PDF);
    let box = document.createElement('div');
    box.style.cssText = `
    position: fixed;
    left:0vh;top:0vh;
    width:100vw;
    height:100vh;
    background-color: rgba(0,0,0,0.9);
    `;
    box.id = "circ_box";
    box.addEventListener('click', () => {
        box.remove();
    });
    console.log("csvhdfgjdslfjsd fglsdhjg lsfhg dlshf l");
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
        <select id="ricerca" onchange="ricerca()">
            <option disabled selected hidden>Ricerca per</option>
            <option value="ricCategoria">Categoria</option>
            <option value="ricNumero">Numero</option>
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
            <button id="cercaNum">Cerca</button>
        </div>

    </div>
</div>
    `;
    document.body.appendChild(box);
}

async function m_circolari(id) {
    let circolariBox = document.getElementById(id);
    let array = [];
    let url = "http://10.1.0.52:8080/circolari?N=3";
    let risposta = await fetch(url);
    if (risposta.ok) {
        let dati = await risposta.json();
        for (let i = 0; i < 3; i++) {
            array.push(dati[i]);
        }
    } else {
        console.log("Failed to fetch");
        // TODO: put something on the page!
    }

    console.log(array);
    circolariBox.innerHTML = `
        <p onclick="circolariMostra('${array[0].numero}')">${array[0].numero}: ${array[0].nome}</p>
        <p onclick="circolariMostra('${array[1].numero}')">${array[1].numero}: ${array[1].nome}</p>
        <p onclick="circolariMostra('${array[2].numero}')">${array[2].numero}: ${array[2].nome}</p>
        <p onclick="circolariMostra()">visualizza altre</p>
    `;
    circolariBox.style.cssText = `
        padding:1em;
    `;

}
