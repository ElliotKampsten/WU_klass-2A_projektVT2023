const links = document.getElementById("links")
const burgare = document.getElementById("burgare")
const Knapp = document.getElementById("DownLoadButton")
const KnappSkugga = document.getElementById("DownLoadButtonShadow")
function LinkToggle(){
    links.classList.toggle("links_active")
    burgare.classList.toggle("burgertoggle")
    Knapp.classList.toggle("DownloadInvis")
    KnappSkugga.classList.toggle("DownloadInvis")
    
}

burgare.addEventListener("click", LinkToggle)