
//var toggle = false
//const off = "url(imagens/toggle_off_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png)"
//const on = "url(imagens/toggle_on_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png)"

/*function trocar(){
    const modo = document.getElementById('modes')
    const header = document.getElementById("cabeça")
    if (toggle)
    {
        modo.style.backgroundImage = off
        cabeça.style.backgroundImage = "linear-gradient(to bottom,#2C3E50,#3b536a)"
    }
    else{
       modo.style.backgroundImage = on
       cabeça.style.backgroundImage = "linear-gradient(to bottom,black,black)"
}
toggle = !toggle
}*/
var toggle = true
const modo = document.getElementById('modes')
const csslink = document.getElementById('csslink')
function trocar(){
   
    if (toggle){
       csslink.href = "dark.css"
    }
    else{
        csslink.href = "style.css"
    }
    toggle = !toggle
}

