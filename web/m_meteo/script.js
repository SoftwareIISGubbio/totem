"use strict";

let meteoBox;

let url="https://api.openweathermap.org/data/2.5/forecast?lat=43.351598463559746&lon=12.565889046590783&appid=0a857a725d5695891c056943591b7115&units=metric";
let dati;
let id;
let id1;
let ora;

async function meteoAggiorna(){
// background-image: url("m_meteo/pioggia.jpeg");
        const risposta = await fetch(url);
        let oraSpan = document.getElementsByClassName("ora");
        let intervalli = window.setInterval(meteoAggiorna, 3600000);

        if(risposta.ok){
            dati= await risposta.json();
            console.log(dati);

            for(let i=0; i<oraSpan.length; i++){

                let transito = dati.list[i].dt_txt;
                let transito1 = transito.split(" ");
                ora =transito1[1].split(":");
                let oraVista = ora[0]+":"+ora[1];
                //console.log(oraVista);
                oraSpan[i].innerHTML= oraVista;
            }

            //ca.innerHTML = dati.list[0].weather[0].icon;
            let icona = document.getElementsByClassName("icon");
            let temperatura = document.getElementsByClassName("tempo");
    
            for(let i=0; i<icona.length; i++){
                url="https://openweathermap.org/img/wn/"+dati.list[i].weather[0].icon+"@2x.png";
                icona[i].src=url;
                temperatura[i].innerText= dati.list[0].main.temp+"°";
            }
            id = dati.list[0].weather[0].icon;
            console.log(id);
            id="11d";
            //id1 = dati.list[0].weather[0].icon;
            //url="https://openweathermap.org/img/wn/"+dati.list[0].weather[0].icon+"@4x.png";
            //icona[0].src=url;

            let sfondoP = document.getElementsByClassName("sfondoP");
            if(id=="01d"){
                meteoBox.style.backgroundImage= "url('m_meteo/sole.jpg')";
                //sfondoP.style.backgroundcolor="white";
            }
            if(id=="02d" || id=="03d" || id=="04d"){
                meteoBox.style.backgroundImage= "url('m_meteo/nuvoloso.jpg')";
                console.log("Hello Word");
            }

            if(id=="09d" || id=="10d"){
                meteoBox.style.backgroundImage= "url('m_meteo/pioggia.jpeg')";
            }

            if(id=="11d"){
                meteoBox.style.backgroundImage= "url('m_meteo/temporale.jpg')";
            }
            if(id=="13d"){
                meteoBox.style.backgroundImage= "url('m_meteo/neve.jpg')";
            }
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
        grid-gap: 1rem;
}
    `;
    meteoBox.innerHTML = `
            <span class="ora">caio</span>
            <img class="icon" alt="icon" style="  height: 100%">
            <span class="tempo"></span>
        
            <span class="ora"></span>
            <img class="icon" alt="icon">
            <span class="tempo"></span>
        
            <span class="ora"></span>
            <img class="icon" alt="icon">
            <span class="tempo"></span>
        
            <span class="ora"></span>
            <img class="icon" alt="icon">
            <span class="tempo"></span>
    `;
    meteoAggiorna(); // TODO: magari serve anche timer
}