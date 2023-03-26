const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navBarLinks = document.getElementsByClassName("nav-bar-right")[0]


toggleButton.addEventListener("click", () => {
    navBarLinks.classList.toggle("active")
    // toggleButton.remove()


    const cancelTogglebttn = document.createElement("div")
    console.log(cancelTogglebttn)
    cancelTogglebttn.className = "cancel-button"
    cancelTogglebttn.innerText = "Hello"
    cancelTogglebttn.classList.toggle("active")
    
    navBarLinks.appendChilc(cancelTogglebttn)
})