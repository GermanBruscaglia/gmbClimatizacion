export default function formContacto () {
    const $formContacto = document.querySelector(".contacto-form")
    document.addEventListener("submit", e => {
        if(e.target === $formContacto){
            alert("Gracias por contactarnos, en breve nos pondremos en contacto con vos.")
        }
    })
}