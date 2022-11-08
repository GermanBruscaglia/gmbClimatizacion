export default function slider() {
    let $btnComenzar = document.getElementById("comenzar"),
        $btnAnterior = document.getElementById("anterior"),
        $infoForm = document.querySelector(".info-form"),
        $infoTecnica = document.querySelector(".info-tecnica"),
        $infoPersonal = document.querySelector(".info-personal"),
        $printPdf = document.querySelector(".container-print-pdf"),
        $btnrevisar = document.getElementById("revisar")

    document.addEventListener("click", e => {
         switch(e.target){
             case $btnComenzar:
             $infoForm.classList.remove("activo")
             $infoTecnica.classList.add("activo")
             return

             case $btnAnterior:
             $infoPersonal.classList.remove("activo")
             $infoTecnica.classList.add("activo")
             return

            case $btnrevisar:
                $printPdf.classList.remove("activo")
                $infoTecnica.classList.add("activo")
                return
         }
        
    } )
}

