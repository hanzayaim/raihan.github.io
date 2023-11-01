const navbar = document.getElementById("navbar")

function toggleNavbar() {
    if (window.scrollY > 50) {
        navbar.style.display = "block"
    } else {
        navbar.style.display = "none"
    }
}

window.addEventListener("scroll", toggleNavbar);
toggleNavbar();