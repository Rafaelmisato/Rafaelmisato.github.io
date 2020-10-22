import React from 'react'
import './MenuLarge.css'

export default props =>
    <div className="menu-large-wraper" id="menu-large">
        <div className="menu-large">
            <div className="mn"><div className="me"></div><h2>Rafael</h2></div>
            <div className="mn" onClick={portfolioOpen}><h4>portfolio</h4></div>
            <div className="mn" onClick={servicosOpen}><h4>Serviços</h4></div>
            <div className="mn" onClick={aboutOpen}><h4>Sobre</h4></div>
            <div className="mn" onClick={contatoOpen}><h4>Contato</h4></div>
        </div>
    </div>

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