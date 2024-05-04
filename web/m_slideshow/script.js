"use strict";
// const nomi = [...Array(18).keys()].map( e => `m_slideshow/SDG-icon-IT-RGB-${(e<10?"0":"")+e}.jpg` );
const slide = [
    {file:"SDG-icon-IT-RGB-00.jpg", testo:null},
    {file:"SDG-icon-IT-RGB-01.jpg", testo:"836 milioni di persone vivono ancora in povertà estrema. Circa una persona su cinque nelle regioni in via sviluppo vive con meno di 1,25 dollari al giorno"},
    {file:"SDG-icon-IT-RGB-02.jpg", testo:"Circa 795 milioni di persone nel mondo – ovvero una persona su nove – sono denutrite.La maggior parte delle persone che nel mondo soffre la fame vive in Paesi in via di sviluppo, dove il 12,9% della popolazione è denutrita."},
    {file:"SDG-icon-IT-RGB-03.jpg", testo:"Ogni giorno muoiono 17.000 bambini in meno rispetto al 1990; tuttavia, ogni anno continuano a morire più di sei milioni di bambini prima del compimento del quinto anno d’età. Dal 2000, i vaccini contro il morbillo hanno prevenuto quasi 15,6 milioni di morti."},
    {file:"SDG-icon-IT-RGB-04.jpg", testo:"L’iscrizione nelle scuole primarie nei Paesi in via di sviluppo ha raggiunto il 91%, ma 57 milioni di bambini ne sono ancora esclusi. Più della metà dei bambini non iscritti a scuola vive in Africa subsahariana"},
];

let slideshowIndice = 0;
let slideshowBox;
let slideshowInfoAperte = false;
function mostraInfo(){
    slideshowInfoAperte = true;
    let info = document.createElement("div");
    info.style.position = "fixed";
    info.innerText = slide[slideshowIndice].testo;
    info.style.cssText = `
        position: absolute;
        min-height: 40%; width: 40%;
        left: 2vw; bottom: 2vh;
        background-color:rgba(255,255,255,0.92);
        padding:1rem; border: 3px solid #eecd00;
        font-size:5vh`;
    info.addEventListener("click", () => {document.querySelector("body").removeChild(info); slideshowInfoAperte=false;} );
    document.querySelector("body").appendChild(info);
}

function cambiaSlide(){
    if(slideshowInfoAperte==false){
        slideshowIndice = (slideshowIndice+1) % slide.length;
        slideshowBox.innerHTML = '';
        slideshowBox.removeEventListener("click", mostraInfo);

        slideshowBox.style.backgroundImage = "url(m_slideshow/"+slide[slideshowIndice].file+")";

        let titolo = document.createElement("p");
        titolo.style.margin = "0";
        titolo.style.background = "#eecd00";
        titolo.innerText="agenda 2030";
        slideshowBox.appendChild(titolo);

        if(slide[slideshowIndice].testo){
            let info = document.createElement("p");
            info.style.margin = "0";
            info.innerText="click per info";
            info.style.background = "#eecd00";
            slideshowBox.appendChild(info);
            slideshowBox.addEventListener("click", mostraInfo);
        }
    }
}

function m_slideshow(id){
    slideshowBox = document.getElementById(id);
    // offsetWidth and offsetHeight properties i
    let width = slideshowBox.offsetWidth;
    let height = slideshowBox.offsetHeight;
    // serve "+=" per mantene3re eventuali impostazioni fatte nella pagina pricipale
    // a meno di idee più articolate
    slideshowBox.style.cssText += `
        color: blue; background-color: #444;
        text-align: center;
        background-repeat: no-repeat; background-position: center 95%;
        background-size: ${width>height ? "auto 75%" : "75% auto"};
    `;

    cambiaSlide();
    window.setInterval(cambiaSlide, 5000 );
}