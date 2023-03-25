const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navBarLinks = document.getElementsByClassName("nav-bar-right")[0]


toggleButton.addEventListener("click", () => {
    navBarLinks.classList.toggle("active")
})