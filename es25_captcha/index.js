"use strict"
let _txtUser;
let _txtPwd;
let _txtCaptcha;
let _divCaptcha;

let matrice = 	[["0", "1", "2", "3", "4", "5"],   
				["6", "7", "8", "9", "A", "B"], 
				["C", "D", "E", "F", "G", "H"], 
				["I", "J", "K", "L", "M", "N"],
				["O", "P", "Q", "R", "S", "T"],
				["U", "V", "W", "X", "Y", "Z"]];

let vetRiga =new Array(5);       
let vetColonna =new Array(5); 

window.onload = function () {
    _divCaptcha = document.getElementsByClassName("captcha");
    _txtUser = document.getElementById("txtUser");
    _txtCaptcha = document.getElementById("txtCaptcha");
    _txtCaptcha.maxLength = 5;
    _txtPwd = document.getElementById("txtPwd");
    _txtCaptcha.addEventListener("keyup", function () {
        this.value = this.value.toUpperCase();
    });
    generaCaptcha();

    _txtUser.ok = false;   
    _txtPwd.ok = false;
    _txtCaptcha.ok = false;
}

function controllaCredenziali(sender) {
    if (sender.value.length<8) {
        sender.style.borderColor = "rgb(255, 0, 0)";
        sender.ok = false;
    }
    else {
        sender.ok = true;
        sender.style.borderColor = "rgb(0, 255, 0)";
    }      
}

function generaCaptcha() {
    let x, y;
    for (let i = 0; i < _divCaptcha.length; i++) {
        x = random(0, 5);
        y = random(0, 5);
        vetRiga[i] = x;
        vetColonna[i] = y;
        _divCaptcha[i].style.backgroundPosition = (-50*y)+"px " +(-50*x)+"px";
    }
}

function controllaCaptcha() {
    let letteraUtente="";
    let letteraCaptcha="";
    let ok = true;
    let _imgOk = document.getElementById("imgOk");

    if (_txtCaptcha.value.length < 5)
        ok = false;
    else
    {
        for (let i = 0; i < _txtCaptcha.value.length; i++) {
            letteraUtente = _txtCaptcha.value.substr(i, 1);
            letteraCaptcha = matrice[vetRiga[i]][vetColonna[i]];
            if (letteraCaptcha != letteraUtente)
                ok = false;
        }
    }

    if (ok) {
        _txtCaptcha.setAttribute("disabled", "disabled");
        let _btnCaptcha = document.getElementById("btnCaptcha");
        _btnCaptcha.setAttribute("disabled", "disabled");
        _imgOk.src = "img/ok.png";
        _txtCaptcha.ok = true;
        document.getElementById("btnGenera").setAttribute("disabled", "disabled");
    }
    else
        _imgOk.src = "img/nok.png";
}

function random(min, max) {
    let rnd = Math.floor((max - min + 1) * Math.random()) + min;
    return rnd;
}

function invia(){
    if (_txtUser.ok && _txtPwd.ok && _txtCaptcha.ok)
        alert("Va bene");
    else {
        if (sender.id == "txtUser") {
            sender.ok = true;
            sender.style.borderColor = "rgb(0, 255, 0)";
        }
        else {
            controllaPwd();
        }
    }
}

function controllaPwd() {
    for (let i = 0; i < _txtPwd.value.length; i++) {
        if (_txtPwd.valu.charCodeAt[i]() >= 65 && _txtPwd.valu.charCodeAt[i]() <= 90) {
            return true;
        }
    }
    return false;
}




				
