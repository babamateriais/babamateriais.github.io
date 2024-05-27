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