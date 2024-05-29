function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu");
    sideMenu.classList.toggle('open');
}

function closeNav() {
    document.getElementById("sideMenu").classList.remove('open');
}

function openNav() {
    document.getElementById("sideMenu").classList.add('open');
}

// Adiciona um evento de clique para todos os links do menu
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