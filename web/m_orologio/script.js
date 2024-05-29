"use strict";
let orologioBox;

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}

function avviaOrologioD() {
    const giorno = new Date();
    const giorniSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    const mesiIta = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

    let h = giorno.getHours();
    let m = giorno.getMinutes();
    let s = giorno.getSeconds();
    let g = giorniSettimana[giorno.getDay()];
    let d = giorno.getDate();
    let mese = mesiIta[giorno.getMonth()];
    let a = giorno.getFullYear();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('orologio').innerHTML = g + "<br>" + d + " " + mese + "<br>" + h + ":" + m;
    setTimeout(avviaOrologioD, 1000);
}

function m_orologioD(id){
    orologioBox = document.getElementById(id);
    orologioBox.innerHTML = `<div id="clock"></div>`;

    orologioBox.style.cssText += `
    font-family:Arial, Helvetica, sans-serif;
    background-color: #23272a;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    text-align: center;
    font-size: 4vh;
    font-weight: bold;
    background-color: #ffe100;
    padding: 10px 20px;
    `;
    avviaOrologioD()
}
function m_orologio(id){
    orologioBox = document.getElementById(id);
    let width = orologioBox.offsetWidth;
    let height = orologioBox.offsetHeight;
    if(width>height){
        width = height;
    }else{
        height = width;
    }
    console.log(orologioBox);
    let dims=`width:${width}px;height:${height}px;`;
    orologioBox.innerHTML = `<div id="clock">
    <div id="ora" style="${dims}; margin:auto">
        <div style="--clr: black; --h: 74px" id="hour" class="hand">
            <i></i>
        </div>
        <div style="--clr: black; --h: 84px" id="min" class="hand">
            <i></i>
        </div>
        <div style="--clr: #fc0000; --h: 94px" id="sec" class="hand">
            <i></i>
        </div>

        <span style="--i:1"><b>1</b></span>
        <span style="--i:2"><b>2</b></span>
        <span style="--i:3"><b>3</b></span>
        <span style="--i:4"><b>4</b></span>
        <span style="--i:5"><b>5</b></span>
        <span style="--i:6"><b>6</b></span>
        <span style="--i:7"><b>7</b></span>
        <span style="--i:8"><b>8</b></span>
        <span style="--i:9"><b>9</b></span>
        <span style="--i:10"><b>10</b></span>
        <span style="--i:11"><b>11</b></span>
        <span style="--i:12"><b>12</b></span>
    </div>
</div>`;


    avviaOrologioA()
}
function avviaOrologioA() {
    let hr = document.getElementById('hour');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');

    function displayTime() {
        let date = new Date();

        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();

        let hRotation = 30 * hh + mm / 2;
        let mRotation = 6 * mm;
        let sRotation = 6 * ss;

        hr.style.transform = `rotate(${hRotation}deg)`;
        min.style.transform = `rotate(${mRotation}deg)`;
        sec.style.transform = `rotate(${sRotation}deg)`;

    }

    setInterval(displayTime, 1000);
}
