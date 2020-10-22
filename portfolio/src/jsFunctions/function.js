/*CLOCK*/
// function clock(){
//     let data=new Date()
//     let hour=data.getHours()
//     let min=data.getMinutes()

//     if(hour<10){
//         hour="0"+hour
//     }
//     if(min<10){
//         min="0"+min
//     }

//     let hours=hour+":"+min
//     let time = document.getElementById("clock")
//     time.innerHTML = hours
// }
// setInterval(clock,1000)

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



/*close sections ainda nao foi usado*/
function closeAbout(){
    let fechar = document.getElementById("about")
    fechar.classList.remove("show");
    fechar.classList.add("hide");
}
function closePortfolio(){
    let fechar = document.getElementById("portfolio")
    fechar.classList.remove("show");
    fechar.classList.add("hide");
}
function closeServicos(){
    let fechar = document.getElementById("servicos")
    fechar.classList.remove("show");
    fechar.classList.add("hide");
}
function closeContato(){
    let fechar = document.getElementById("contato")
    fechar.classList.remove("show");
    fechar.classList.add("hide");
}






