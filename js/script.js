function openNav() {
    document.getElementById("sideMenu").style.width = "250px";
}

function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
}

// Este script JavaScript é opcional e pode ser usado para ocultar o popup após um período de tempo
setTimeout(function(){
    document.getElementById("popup").style.display = "none";
}, 5000); // Oculta o popup após 5 segundos (5000 milissegundos)
