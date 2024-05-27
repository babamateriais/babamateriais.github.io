function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu");
    if (sideMenu.style.width === "250px") {
        closeNav(); 
    } else {
        openNav();
    }
}

function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
}

function openNav() {
    document.getElementById("sideMenu").style.width = "250px";
}

// Adiciona um evento de clique para todos os links do menu
const menuLinks = document.querySelectorAll('.menu-bar a');
menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Verifica se o link é para o PDF
        if (this.getAttribute('href') === 'pdfs/catalogo.pdf') {
            // Link para o PDF, não impede o comportamento padrão
            return; 
        } else {
            // Link para uma seção, impede o comportamento padrão
            event.preventDefault(); 
            const targetId = this.getAttribute('href'); 
            const targetElement = document.querySelector(targetId); 
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});