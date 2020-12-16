(function() {
    let hamActive = false
    let searchActive = false

    let hamButton = document.querySelector(".nav-bar__ham-btn")
    let searchButton = document.querySelector(".nav-bar__srh-btn")

    let navBarLogo = document.querySelector(".nav-bar__logo")
    let navBarMenu = document.querySelector(".nav-bar__ham-menu")
    let navBarSearchInput = document.querySelector(".nav-bar__srh-input")

    hamButton.addEventListener("click", function(){

        if(!hamActive && !searchActive)
        {
            navBarLogo.style.display = "none"
            navBarMenu.style.display = "block"
            hamActive = true
        }

        else if (hamActive && !searchActive) {
            navBarLogo.style.display = "flex"
            navBarMenu.style.display = "none"
            hamActive = false
        }
    })

    searchButton.addEventListener("click", function(){
        
        if(!searchActive && !hamActive)
        {
            navBarLogo.style.display = "none"
            navBarSearchInput.style.display = "block"
            searchButton.innerHTML = "&#10006;"
            searchActive = true
        }

        else if(searchActive && !hamActive)
        {
            navBarLogo.style.display = "flex"
            navBarSearchInput.style.display = "none"
            searchButton.innerHTML = "🔍"
            searchActive = false
        }
    })
})()