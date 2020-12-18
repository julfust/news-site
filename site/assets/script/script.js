(function() {
    let hamActive = false
    let mobileSearchActive = false
    let deskSearchActive = false

    let hamButton = document.querySelector(".nav-bar__ham-btn")
    let mobileSearchButton = document.querySelector(".nav-bar__srh-btn")
    let deskSearchButton = document.querySelector(".desk-nav__srh-btn")

    let navBarLogo = document.querySelector(".nav-bar__logo")
    let navBarMenu = document.querySelector(".nav-bar__ham-menu")
    let navBarSearchInput = document.querySelector(".nav-bar__srh-input")

    let deskNavLinks = document.querySelectorAll(".desk-nav__link")
    let deskSearchInput = document.querySelector(".desk-nav__srh-input")

    hamButton.addEventListener("click", function(){

        if(!hamActive && !mobileSearchActive)
        {
            navBarLogo.style.display = "none"
            navBarMenu.style.display = "block"
            hamActive = true
        }

        else if (hamActive && !mobileSearchActive) {
            navBarLogo.style.display = "flex"
            navBarMenu.style.display = "none"
            hamActive = false
        }
    })

    mobileSearchButton.addEventListener("click", function(){
        
        if(!mobileSearchActive && !hamActive)
        {
            navBarLogo.style.display = "none"
            navBarSearchInput.style.display = "block"
            mobileSearchButton.innerHTML = "&#10006;"
            mobileSearchActive = true
        }

        else if(mobileSearchActive && !hamActive)
        {
            navBarLogo.style.display = "flex"
            navBarSearchInput.style.display = "none"
            mobileSearchButton.innerHTML = "🔍"
            mobileSearchActive = false
        }
    })

    deskSearchButton.addEventListener("click", function() {
        if(!deskSearchActive)
        {
            for(let i = 0; i < deskNavLinks.length; i++)
            {
                deskNavLinks[i].style.display = "none"
            }

            deskSearchInput.style.display = "block"
            deskSearchButton.innerHTML = "&#10006;"
            deskSearchActive = true
        }

        else
        {
            for(let i = 0; i < deskNavLinks.length; i++)
            {
                deskNavLinks[i].style.display = "flex"
            }

            deskSearchInput.style.display = "none"
            deskSearchButton.innerHTML = "🔍"
            deskSearchActive = false
        }
    })
})()