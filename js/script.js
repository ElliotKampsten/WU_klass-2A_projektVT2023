const links = document.getElementById("links")
const burgare = document.getElementById("burgare")
const Knapp = document.getElementById("DownLoadButton")

function LinkToggle(){
    links.classList.toggle("links_active")
    burgare.classList.toggle("burgertoggle")
    Knapp.classList.toggle("DownloadInvis")
    
    
}

burgare.addEventListener("click", LinkToggle)