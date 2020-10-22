import React from 'react'
import './MenuDesktopIcons.css'

export default props =>
<div className="icons">
    <input id="menu-hamburguer" type="checkbox" />
    <label htmlFor="menu-hamburguer">
        <div className="menu-wraper" id="menu-toggle" onClick={menuOpen} >
            <div className="firstline"></div>
            <div className="secondline"></div>
            <div className="thirdline"></div>
        </div>
    </label>
    <i className="fa fa-briefcase" onClick={portfolioOpen}><p>portfolio</p></i>
    <i className="fas fa-clipboard-list" onClick={servicosOpen}><p>serviços</p></i>
    <i className="far fa-user" onClick={aboutOpen}><p>sobre</p></i>
    <i className="far fa-envelope" onClick={contatoOpen}><p>contato</p></i>
</div>


/*MENU*/
function menuOpen() {
    document.getElementById("menu-large").classList.toggle("show")
}

/*OPEN SECTIONS*/
function portfolioOpen(){
    const portfolio = document.getElementById("portfolio")
    const zAbout = document.getElementById("zAbout")
    const zPortfolio = document.getElementById("zPortfolio")
    const zServicos = document.getElementById("zServicos")
    const zContato = document.getElementById("zContato")

    portfolio.classList.remove("hide")
    portfolio.classList.add("show")
    zAbout.classList.remove("zfront")
    zPortfolio.classList.add("zfront")
    zServicos.classList.remove("zfront")
    zContato.classList.remove("zfront")
}

function servicosOpen(){
    const servicos = document.getElementById("servicos")
    const zAbout = document.getElementById("zAbout")
    const zPortfolio = document.getElementById("zPortfolio")
    const zServicos = document.getElementById("zServicos")
    const zContato = document.getElementById("zContato")

    servicos.classList.remove("hide")
    servicos.classList.add("show")
    zAbout.classList.remove("zfront")
    zPortfolio.classList.remove("zfront")
    zServicos.classList.add("zfront")
    zContato.classList.remove("zfront")
}

function aboutOpen(){
    const about = document.getElementById("about")
    const zAbout = document.getElementById("zAbout")
    const zPortfolio = document.getElementById("zPortfolio")
    const zServicos = document.getElementById("zServicos")
    const zContato = document.getElementById("zContato")

    about.classList.remove("hide")
    about.classList.add("show")
    zAbout.classList.add("zfront")
    zPortfolio.classList.remove("zfront")
    zServicos.classList.remove("zfront")
    zContato.classList.remove("zfront")
}

function contatoOpen(){
    const contato = document.getElementById("contato")
    const zAbout = document.getElementById("zAbout")
    const zPortfolio = document.getElementById("zPortfolio")
    const zServicos = document.getElementById("zServicos")
    const zContato = document.getElementById("zContato")

    contato.classList.remove("hide")
    contato.classList.add("show")
    zAbout.classList.remove("zfront")
    zPortfolio.classList.remove("zfront")
    zServicos.classList.remove("zfront")
    zContato.classList.add("zfront")
}