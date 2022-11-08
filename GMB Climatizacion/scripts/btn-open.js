export default function openMenu() {
    let $botonMenuOpen = document.getElementById("btn-open-menu"),
        $botonMenuClose= document.getElementById("btn-close-menu"),
        $menuMobile = document.querySelector(".menu-mobile")
    document.addEventListener("click", e => {
        if(e.target == $botonMenuOpen || e.target.matches("#btn-open-menu *")){
            $menuMobile.classList.add("ml-0")
            $botonMenuOpen.classList.add("hidden")
        }
        if(e.target == $botonMenuClose || e.target.matches("#btn-close-menu *")){
            $menuMobile.classList.remove("ml-0")
            $botonMenuOpen.classList.remove("hidden")
        }

        if(e.target.matches(".content-menu-mobile a")){
            $menuMobile.classList.remove("ml-0")
            $botonMenuOpen.classList.remove("hidden")
        }

                    
        
        
        
    })
}