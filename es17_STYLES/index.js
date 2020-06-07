"use strict";

let _titolo;
let _imgBox;

window.onload = function(){
    _titolo=document.getElementById("titolo");
    let _btnColore=document.getElementById("btnColore");
    _btnColore.addEventListener("click", cambiaColore);
    
    //cambia dimensione
    let _btnDimensione=document.getElementById("btnDimensione");
    _btnDimensione.addEventListener("click", cambiaDimensione);
    
    // cambia immagine sfondo
    let _btnSfondo=document.getElementById("btnSfondo");
    _btnSfondo.addEventListener("click", cambiaImgSfondo);
    
    //nascondi bordo
    let _btnBordo=document.getElementById("btnBordo");
    _btnBordo.addEventListener("click", nascondiBordo);
    
    //cambia immagini
    let _btnImg1=document.getElementById("btnImg1");
    let _btnImg2=document.getElementById("btnImg2");
    let _btnImg3=document.getElementById("btnImg3");
    _imgBox=document.getElementById("imgBox");
    
    // SOLUZIONE 1
    /*_btnImg1.addEventListener("click", function(){
        cambiaImmagine(1);
    });
    _btnImg2.addEventListener("click", function(){
        cambiaImmagine(2);
    });
    _btnImg3.addEventListener("click", function(){
        cambiaImmagine(3);
    });*/
    
    //SOLUZIONE 2
    _btnImg1.addEventListener("click", cambiaImmagine);
    _btnImg2.addEventListener("click", cambiaImmagine);
    _btnImg3.addEventListener("click", cambiaImmagine);
    
    let _btnClear=document.getElementById("btnClear");
    _btnClear.addEventListener("click", rimuoviImmagine);
    
    
}


function cambiaColore(){
    //alert(getComputedStyle(_titolo).color );
    if(getComputedStyle(_titolo).color=="rgb(255, 255, 0)"){
        _titolo.style.color="rgb(0, 0, 255)";
        _titolo.style.backgroundColor="rgb(255, 255, 0)";
    }
    else{
        //soluzione 1
        /*_titolo.style.cssText+="color:rgb(255, 255, 0); ";
        _titolo.style.cssText+="background-color:rgb(0, 0, 255); ";*/
        //soluzione 2
        //_titolo.removeAttribute("style");
        //soluzione 3
        //_titolo.style.backgroundColor="";
        //_titolo.style.color=""; 
        //soluzione 4
        _titolo.style.cssText=""; 
        
        
    }
    
}

function cambiaDimensione(){
    let _txtSize=document.getElementById("txtSize");
    let dimensione=parseInt(_txtSize.value);
    _titolo.style.cssText+="font-size:"+dimensione+"pt;";
    if(dimensione>30){
        _titolo.style.lineHeight="100px";
    }
    else
        _titolo.style.lineHeight="200px"
        
}

function cambiaImgSfondo(){
    //puntatore al body
    let _body=document.getElementsByTagName("body")[0];
    //alert(_body.style.background);
    if(_body.style.backgroundImage==""){
        _body.style.backgroundImage="url(img/bg.gif)";
        _body.style.backgroundRepeat="repeat-y";
        _body.style.backgroundPosition="center";
        _body.style.backgroundColor="rgb(234, 234, 234)";
    }
    else{
        _body.style.background="";
    }
    
}

function nascondiBordo(){
    //alert(getComputedStyle(_titolo).border);
    if(getComputedStyle(_titolo).borderColor=="rgb(255, 255, 255)"){
        _titolo.style.borderColor="rgb(0, 0, 0)";
    }
    else
        _titolo.style.borderColor="rgb(255, 255, 255)";
    
}

//SOLUZIONE 1
/*function cambiaImmagine(n){
    _imgBox.setAttribute("src","img/img"+n+".jpg");
}*/

//seconda soluzione dove,invece di usare il parametro n, usiamo this
// this è utilizzabile solo con addEventListener e rappresenta il puntatore all'oggetto che ha scatenato l'evento

//SOLUZIONE 2
function cambiaImmagine(){
    let id;
    id=this.id;
    id=this.getAttribute("id");
    let n=id.substr(id.length-1,1);
    _imgBox.setAttribute("src","img/img"+n+".jpg");
    _imgBox.style.visibility="visible";
}

function rimuoviImmagine(){
    _imgBox.style.visibility="hidden";
}
