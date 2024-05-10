"use strict";

let meteoBox;
let url="https://api.openweathermap.org/data/2.5/forecast?lat=43.351598463559746&lon=12.565889046590783&appid=0a857a725d5695891c056943591b7115&units=metric";
let immagini = {
    "01d": "m_meteo/sole.jpg",
    "02d": "m_meteo/nuvoloso.jpg",
    "03d": "m_meteo/nuvoloso.jpg",
    "04d": "m_meteo/nuvoloso.jpg",
    "09d": "m_meteo/pioggia.jpeg",
    "10d": "m_meteo/pioggia.jpeg",
    "11d": "m_meteo/temporale.jpeg",
    "13d": "m_meteo/neve.jpg",
};

async function meteoAggiorna(){
        const risposta = await fetch(url);
        let oraSpan = document.getElementsByClassName("ora");
    
        if(risposta.ok){
            let dati= await risposta.json();

            //con questo ciclo arrotondo l'orario
            for(let i=0; i<oraSpan.length; i++){
                let transito = dati.list[i].dt_txt;
                let transito1 = transito.split(" ");
                let ora =transito1[1].split(":");
                let oraVista = ora[0];
                oraSpan[i].innerHTML= oraVista;
            }
            let icona = document.getElementsByClassName("icon");
            let temperatura = document.getElementsByClassName("tempo");

            //con questo ciclo cambio l'icona in base al tempo e mettiamo la temperature
            for(let i=0; i<icona.length; i++){
                url="https://openweathermap.org/img/wn/"+dati.list[i].weather[0].icon+"@2x.png";
                icona[i].src=url;
                let transito = (dati.list[0].main.temp+"°").split(".");
                temperatura[i].innerText= transito[0]+"°";
            }
            let id = dati.list[0].weather[0].icon;
            meteoBox.style.backgroundImage= "url('"+immagini[id]+"')";    
        }
}
function m_meteo(id){
    meteoBox = document.getElementById(id);
    meteoBox.style.cssText += `
        overflow: hidden;
        background-size: cover;
        color: white;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        align-items: center;
        background-position:center;
        font-weight:bolder;
        font-size: 3vh;
        padding-right:1vh;
        padding-left:1vh;
        color:black;
}
    `;
    meteoBox.innerHTML = `
            <span class="ora">caio</span>
            <img class="icon" alt="icon" style="height: 12.5vh">
            <span class="tempo"></span>
        
            <span class="ora"></span>
            <img class="icon" alt="icon" style="height: 12.5vh">
            <span class="tempo"></span>
        
            <span class="ora"></span>
            <img class="icon" alt="icon" style="height: 12.5vh">
            <span class="tempo"></span>
        
            <span class="ora"></span>
            <img class="icon" alt="icon" style="height: 12.5vh">
            <span class="tempo"></span>
    `;
    meteoAggiorna();
    window.setInterval(meteoAggiorna, 3600000);
}