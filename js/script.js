const links = document.getElementById("links")
const burgare = document.getElementById("burgare")

function LinkToggle(){
    links.classList.toggle("links_active")
    burgare.classList.toggle("burgertoggle")
    
}

burgare.addEventListener("click", LinkToggle)