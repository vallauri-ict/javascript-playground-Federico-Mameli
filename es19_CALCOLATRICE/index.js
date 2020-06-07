"use strict"

let _txtDisplay;
let _btnNumeri;
let _btnOperatore;
let numero;
let operatore;
let cancella;

window.onload = function(){
    cancella = false;
    operatore = "";
    numero = "";
	_txtDisplay = document.getElementById("txtOp");
    _btnNumeri = document.getElementsByName("btnNum");
    _btnOperatore = document.getElementsByName("btnOperatore");
    
    for(let i = 0; i < _btnNumeri.length;i++)
    {
        _btnNumeri[i].addEventListener("click", visualizzaNumeri);
    }
    for(let i = 0; i < _btnOperatore.length; i++)
    {
        _btnOperatore[i].addEventListener("click", gestisciOperatore);
    }
}

function visualizzaNumeri(){
    if(cancella == true)
    {
        _txtDisplay.value = "";
        cancella = false;
    }
    _txtDisplay.value += this.value;
    if(this.value == ".")
        this.removeEventListener("click", visualizzaNumeri);
}

function gestisciOperatore(){
    if(_txtDisplay.value == "")
        alert("Inserire un numero");
    else
    {
        numero = parseFloat(_txtDisplay.value);
        operatore = this.value;
        cancella = true;
        riabilitaEvento();
    }   
}

function calcola(){
    let secondoNumero = ""; 
    if(_txtDisplay.value != "")
        secondoNumero = parseFloat(_txtDisplay.value);
    if((numero != "") && 
       (secondoNumero != "") && 
       (operatore != ""))
    {
        switch(operatore)
        {
            case "+": numero = numero + secondoNumero;break;
            case "-": numero = numero - secondoNumero;break;
            case "*": numero = numero * secondoNumero;break;
            case "/": numero = numero / secondoNumero;break;
        }  
        _txtDisplay.value = numero.toFixed(2);
    }
    else
        alert("Inserire un numero e scegliere un operatore");
}

function resetta(){
    _txtDisplay.value = "";
    numero = 0;
    operatore = "";
    riabilitaEvento();
}

function riabilitaEvento(){
        let _puntino = document.getElementById("puntino");
        _puntino.addEventListener("click", visualizzaNumeri);
}