let botonConColor = document.getElementsByClassName("btn-generado");

const botonGenerar = document.getElementById("btn-generar");

botonGenerar.addEventListener("click", function() {
  for (let boton of botonConColor) {
    let hue = Math.floor(Math.random() * 361);
    let sat = Math.floor(Math.random() * 101); 
    let light = Math.floor(Math.random() * 101);
    let color = "hsl(" + hue + ", " + sat + "%, " + light + "%)";
    boton.style.backgroundColor = color;
    boton.setAttribute("aria-label", "Color " + color);
}
});



