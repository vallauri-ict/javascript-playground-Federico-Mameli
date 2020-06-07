"use strict"
let _btnGioca;
let carteGenerate = [];
let _imgCarta;
let punteggio = 0;
let _lblSomma;
let _lblCarte;
let _lblRisultato;

window.onload = function () {
    _btnGioca = document.getElementById("btnGioca");
    _imgCarta = document.getElementById("imgCarta");
    _lblSomma = document.getElementById("lblSomma");
    _lblCarte = document.getElementById("lblCarte");
    _lblRisultato = document.getElementById("lblRisultato");
}

function random(min, max) {
    let rnd = Math.floor((max - min + 1) * Math.random()) + min;
    return rnd;
}

function gioca() {   
    visualizza();
    _btnGioca.setAttribute("disabled", "disabled");
}

function visualizza() { //creazione casuale e tuute diverse
    let rnd;
    do {
        rnd = random(1, 10);
    } while (carteGenerate.includes(rnd));
    carteGenerate.push(rnd);

    let fileName = "img/bg_d" + rnd + ".gif";
    _imgCarta.src = fileName;

    if (rnd < 8)
        punteggio += rnd;
    else
        punteggio += 0.5;

    _lblSomma.innerHTML = punteggio;
    _lblCarte.innerHTML = carteGenerate.length;

    if (carteGenerate.length<3) 
        setTimeout(visualizza, 1000);
    else {
        if (punteggio<= 7.5) {
            _lblRisultato.innerHTML = "Hai vinto";
            _lblRisultato.style.lineHeight = "200px";
        }
        else 
            _lblRisultato.innerHTML = "Hai perso";
    }
}