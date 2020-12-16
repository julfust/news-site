(function() {
    let checked = false;
    let navBarButton = document.querySelector(".nav-bar__ham-btn");
    let navBarLogo = document.querySelector(".nav-bar__logo")
    let navBarMenu = document.querySelector(".nav-bar__ham-menu")

    console.log(navBarButton, navBarLogo, navBarMenu)

    navBarButton.addEventListener("click", function(){
        console.log("Debug")

        if(!checked)
        {
            navBarLogo.style.display = "none"
            navBarMenu.style.display = "block"
            checked = true
        }

        else {
            navBarLogo.style.display = "flex"
            navBarMenu.style.display = "none"
            checked = false
        }
    })
})()