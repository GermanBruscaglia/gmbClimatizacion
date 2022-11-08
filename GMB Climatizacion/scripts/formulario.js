export default function formularioPdf() {
    const $formDimensiones = document.getElementById("dimensiones"),
          $formPersonal = document.getElementById("form-personal"),
          $infoTecnica = document.querySelector(".info-tecnica"),
          $infoPersonal = document.querySelector(".info-personal"),
          $printPdf = document.querySelector(".container-print-pdf")

          
    document.addEventListener("submit", (e) => {
        if(e.target === $formDimensiones){
            e.preventDefault()
            let largo = $formDimensiones.largo.value,
                ancho = $formDimensiones.ancho.value,
                alto = $formDimensiones.alto.value,
                resultado = largo * ancho * alto * 50,
                $datoIngresados = document.querySelector(".datos-ingresados"),
                $resultadoSimulador = document.querySelector(".resultado-simulador")

        $infoTecnica.classList.remove("activo")
        $infoPersonal.classList.add("activo")

        $datoIngresados.innerHTML = `
        <div class="col"><strong>Largo:</strong> <span id="valor-largo">${largo}</span> metros</div>
        <div class="col"><strong>Ancho:</strong> <span id="valor-ancho">${ancho}</span> metros</div>
        <div class="col"><strong>Alto:</strong> <span id="valor-altura">${alto}</span> metros</div>
        `
        $resultadoSimulador.innerHTML = `
        <div class="col">Segun las medidas proporcionadas tu ambiente necesita <strong><span id="resultado">${resultado}</span></strong> frigorías</div>
        `
            }
        if(e.target === $formPersonal){
            e.preventDefault()
            let nombre = $formPersonal.nombre.value,
                apellido = $formPersonal.apellido.value,
                mail = $formPersonal.mail.value,
                $datosUsuario = document.querySelector(".datos-usuario")

                $infoPersonal.classList.remove("activo")
                $printPdf.classList.add("activo")
                $datosUsuario.innerHTML = `
                <div class="col"><strong>Nombre:</strong> <span id="nombre">${nombre.toUpperCase()}</span></div>
                <div class="col"><strong>apellido:</strong> <span id="apellido">${apellido.toUpperCase()}</span></div>
                <div class="col"><strong>Mail:</strong> <span id="mail">${mail.toLowerCase()}</span></div>
                `
        }
    })

    document.addEventListener("click", e => {
        const $btnPdf = document.getElementById("btnPdf")
        if(e.target === $btnPdf){
            let $nombre = document.getElementById("nombre"),
                $apellido = document.getElementById("apellido") ,
                $mail = document.getElementById("mail"),
                $largo = document.getElementById("valor-largo"),
                $ancho = document.getElementById("valor-ancho"),
                $alto = document.getElementById("valor-altura"),
                $resultado = document.getElementById("resultado")

            let doc = new jsPDF();
            doc.text("Calculador frigorías Online", 10, 10)
            doc.line(10,15,180,15)
            doc.text("Datos personales:", 70, 25)
            doc.text("- Nombre: " + $nombre.innerHTML, 10, 35)
            doc.text("- Apellido: " + $apellido.innerHTML, 10, 45)
            doc.text("- Mail: " + $mail.innerHTML, 10, 55)
            doc.line(10,65,180,65)
            doc.text("Medidas ingresadas:", 70, 75)
            doc.text("- Largo: " + $largo.innerHTML + " metros", 10, 85)
            doc.text("- Ancho: " + $ancho.innerHTML + " metros", 10, 95)
            doc.text("- Alto: " + $alto.innerHTML + " metros", 10, 105)
            doc.line(10,115,180,115)
            doc.text("Resultado:", 70, 125)
            doc.text("Según las medidas proporcinadas necesitas las siguientes frigorías: ", 10, 135)
            doc.text("~ " + $resultado.innerHTML + " ~", 70, 145)
            doc.line(10,220,200,220)
            doc.text("GMB Climatización", 10, 230)
            doc.text("Mail: gmbclimatizacion@gmail.com", 10, 240)
            doc.text("Telefono: 0341 - 4575175", 10, 250)
            doc.text("Whatsapp: 0341 - 153668415" , 10, 260)
            doc.text("Dirección: Calle Inventada 123", 10, 270)
            doc.text("Rosario, Santa Fe - Argentina", 10, 280)

            doc.save("resultado-simulador.pdf")
            
        }
    })

}