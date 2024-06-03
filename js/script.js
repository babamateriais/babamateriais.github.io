function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu");
    sideMenu.classList.toggle('open');
}

// Adiciona um evento de clique para todos os links do menu lateral
const sideMenuLinks = document.querySelectorAll('.side-menu a');
sideMenuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        if (this.getAttribute('href') === 'pdfs/catalogo.pdf' || this.getAttribute('href') === 'https://www.babamateriais.com.br/') {
            // Não impede o comportamento padrão
            return; 
        } else {
            event.preventDefault(); 
            const targetId = this.getAttribute('href'); 
            const targetElement = document.querySelector(targetId); 
            targetElement.scrollIntoView({ behavior: 'smooth' }); 
            toggleMenu(); // Fecha o menu lateral
        }
    });
});

// Adiciona um evento de clique para todos os links da barra de menu
const menuLinks = document.querySelectorAll('.menu-bar a');
menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Verifica se o link é para o PDF ou o site externo
        if (this.getAttribute('href') === 'pdfs/catalogo.pdf' || this.getAttribute('href') === 'https://www.babamateriais.com.br/') {
            // Não impede o comportamento padrão
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