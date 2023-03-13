const burgare = document.getElementById("burgare")

function LinkToggle(){
    burgare.classList.toggle("links_active")
}

burgare.addEventListener("click", LinkToggle)