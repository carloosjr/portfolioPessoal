// Função para configurar o botão de menu do site para dispositivos móveis //

function onMenu(){
    var botao = document.getElementById("menu");

    if (botao.className === "menu"){
        botao.className += " menujs";
        document.getElementById("menu-icon").innerHTML = "&Cross;";
    } else {
        botao.className = "menu";
        document.getElementById("menu-icon").innerHTML = "&#9776;";
    }
}