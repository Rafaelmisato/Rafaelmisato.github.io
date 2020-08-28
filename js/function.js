/**clock**/
function clock(){
    let data=new Date();
    let hour=data.getHours();
    let min=data.getMinutes();

    if(hour<10){
        hour="0"+hour;
    }
    if(min<10){
        min="0"+min;
    }

    let hours=hour+":"+min;
    let time = window.document.getElementById("clock");
    time.innerHTML = hours;
}
setInterval(clock,1000);

/**menu**/
document.getElementById("menu-toggle").onclick = function() {menuOpen()};
function menuOpen() {
    document.getElementById("menu-large").classList.toggle("show");
}

/*Open sections*/
function aboutOpen(){
    let about = document.getElementById("about")
    about.classList.remove("hide");
    about.classList.add("show");
}
function portfolioOpen(){
    let portfolio = document.getElementById("portfolio")
    portfolio.classList.remove("hide");
    portfolio.classList.add("show");
}
function servicosOpen(){
    let servicos = document.getElementById("servicos")
    servicos.classList.remove("hide");
    servicos.classList.add("show");
}
function contatoOpen(){
    let contato = document.getElementById("contato")
    contato.classList.remove("hide");
    contato.classList.add("show");
}

/*close sections*/
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

/*window z-index*/
function zAbout(){
    let zAbout = document.getElementById("zAbout");
    let zPortfolio = document.getElementById("zPortfolio");
    let zServicos = document.getElementById("zServicos");
    let zContato = document.getElementById("zContato");
    zAbout.classList.add("zfront");
    zPortfolio.classList.remove("zfront");
    zServicos.classList.remove("zfront");
    zContato.classList.remove("zfront");
}
function zServicos(){
    let zAbout = document.getElementById("zAbout");
    let zPortfolio = document.getElementById("zPortfolio");
    let zServicos = document.getElementById("zServicos");
    let zContato = document.getElementById("zContato");
    zAbout.classList.remove("zfront");
    zPortfolio.classList.remove("zfront");
    zServicos.classList.add("zfront");
    zContato.classList.remove("zfront");
}
function zPortfolio(){
    let zAbout = document.getElementById("zAbout");
    let zPortfolio = document.getElementById("zPortfolio");
    let zServicos = document.getElementById("zServicos");
    let zContato = document.getElementById("zContato");
    zAbout.classList.remove("zfront");
    zPortfolio.classList.add("zfront");
    zServicos.classList.remove("zfront");
    zContato.classList.remove("zfront");
}
function zContato(){
    let zAbout = document.getElementById("zAbout");
    let zPortfolio = document.getElementById("zPortfolio");
    let zServicos = document.getElementById("zServicos");
    let zContato = document.getElementById("zContato");
    zAbout.classList.remove("zfront");
    zPortfolio.classList.remove("zfront");
    zServicos.classList.remove("zfront");
    zContato.classList.add("zfront");
}