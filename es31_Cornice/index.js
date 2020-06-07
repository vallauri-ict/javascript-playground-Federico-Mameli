"use strict"

const DIM = 10;
let _wrapper;
let livello;

window.onload = function () {
    _wrapper = document.getElementById("wrapper");
    livello = 0;

    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            let _div = document.createElement('div');
            _div.id = "btn" + i + "-" + j;
            _div.setAttribute("class", "cella");
            _wrapper.appendChild(_div);
        }
    }

    setInterval(aggiorna, 500);
}

function random(min, max) {
    let rnd = Math.floor((max - min + 1) * Math.random()) + min;
    return rnd;
}

function aggiorna() {
    reset();
    for (let index = livello; index < DIM - livello; index++) {
        let id_sopra = "btn" + livello + "-" + index;
        let id_sotto = "btn" + (DIM - livello - 1) + "-" + index;
        let id_sx = "btn" + index + "-" + livello;
        let id_dx = "btn" + index + "-" + (DIM - livello - 1);
        colora(id_sopra);
        colora(id_sotto);
        colora(id_sx);
        colora(id_dx);
    }
    if (livello == 4)
        livello = 0;
    else
        livello++;
}

function reset() {
    let _div = document.getElementsByClassName("cella");
    for (let i = 0; i < _div.length; i++) {
        _div[i].style.backgroundColor = "rgb(127, 127, 127)"
    }
}

function colora(id) {
    let _div = document.getElementById(id);  //puntatore alla cella che vogliamo far diventare rossa
    _div.style.backgroundColor = "rgb(255, 0, 0)";
}