"use strict";

const DIM=4;
let _wr;
let _cells;
let timer;
let timer1;

window.onload=function () {
    _wr=document.getElementById("wrapper");
    
    //let vt=[...Array(15).keys()+1];
    let vt=[];
    for(let i=0;i<=DIM*4-1;i++)
        vt.push(i);
    
    //generazione celle e assegnazione di un contenuto casuale
    for(let i=0;i<DIM;i++)
    {
        for(let j=0;j<DIM;j++)
        {
            //Creazione cella
            let _div=document.createElement("div");
            _div.setAttribute("class","cella");
            _div.setAttribute("id","btn"+i+"-"+j);

            if(i+j<6)
            {
                //Assegnazione contenuto
                _div.style.backgroundColor="rgb(0,0,255)";
                _div.innerHTML=randomSenzaRipetizioni(vt, 1, vt.length-1);
                _div.addEventListener("click", sposta);
            }
            else
                _div.innerHTML="&nbsp;";

            _wr.appendChild(_div);
        }
        _cells=document.getElementsByClassName("cella");
    }
};

function sposta() {
    let x=parseInt(this.getAttribute("id").substr(3,1));
    let y=parseInt(this.getAttribute("id").substr(5,1));
    let idAdiacente;
    let bool;

    if(x<3)
    {
        idAdiacente="btn"+(x+1)+"-"+y;
        bool=change(this, idAdiacente);
        if(controllo())
        {
            timer=setInterval(newGame, 5000);
            return;
        }
        if(bool)
            return;
    }
    if(y<3)
    {
        idAdiacente="btn"+x+"-"+(y+1);
        bool=change(this, idAdiacente);
        if(controllo())
        {
            timer=setInterval(newGame, 5000);
            return;
        }
        if(bool)
            return;
    }
    if(x>0)
    {
        idAdiacente="btn"+(x-1)+"-"+y;
        bool=change(this, idAdiacente);
        if(controllo())
        {
            timer=setInterval(newGame, 5000);
            return;
        }
        if(bool)
            return;
    }
    if(y>0)
    {
        idAdiacente="btn"+x+"-"+(y-1);
        change(this, idAdiacente);
        if(controllo())
            timer=setInterval(newGame, 5000);
    }
}

function randomSenzaRipetizioni(v, min, max) {
    let rnd=random(min,max);
    let n=v[rnd];

    v.splice(rnd, 1);
    return n;
}

function random(min, max) {
    return Math.floor((max - min + 1) * Math.random()) + min;
}

function change(sender, id) {
    let adiacente=document.getElementById(id);
    if(adiacente.innerHTML=="&nbsp;")
    {
        adiacente.innerHTML=sender.innerHTML;
        sender.innerHTML="&nbsp;";
        adiacente.style.backgroundColor="rgb(0,0,255)";
        sender.removeAttribute("style");
        sender.removeEventListener("click", sposta);
        adiacente.addEventListener("click", sposta);
        return true;
    }
    else
        return false;
}

function controllo() {
    let n=1;
    for(let i=0;i<DIM;i++)
    {
        for(let j=0;j<DIM;j++)
        {
            let element=document.getElementById("btn"+i+"-"+j);
            if(i==3 && j==1)
            {
                if(element.innerHTML==(n+1).toString()&& document.getElementById("btn"+i+"-"+(j+1)).innerHTML==n.toString())
                {
                    timer1=setInterval(function () {message("Hai perso!")}, 1500);
                    for(let cell of _cells)
                        cell.removeEventListener("click", sposta);
                    return true;
                }
                else if(element.innerHTML==n.toString() && document.getElementById("btn"+i+"-"+(j+1)).innerHTML==(n+1).toString())
                {
                    timer1=setInterval(function () {message("Hai vinto!")}, 1500);
                    for(let cell of _cells)
                        cell.removeEventListener("click", sposta);
                    return true;
                }
            }
            else
            {
                if(element.innerHTML==n.toString())
                    n++;
                else
                    return false;
            }
        }
    }
}

function message(mex) {
    alert(mex);
    clearInterval(timer1);
}

function newGame() {
    if (confirm("Vuoi iniziare una nuova partita?"))
        location.reload();
    clearInterval(timer);
}