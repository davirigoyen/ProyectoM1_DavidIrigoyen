let botonConColor = document.getElementsByClassName("btn-generado");
const botonGenerar = document.getElementById("btn-generar");
const botonHsl = document.getElementById("btn-hsl");
const botonHex = document.getElementById("btn-hex");
let caracteresHex = "0123456789ABCDEF";

let modoHsl = false;
let modoHex = false;
botonHsl.setAttribute("aria-pressed", false);
botonHex.setAttribute("aria-pressed", false);

function pintarBotonesHsl () {
  for (let botonFinalHsl of botonConColor) {
    let hue = Math.floor(Math.random() * 361);
    let sat = Math.floor(Math.random() * 101); 
    let light = Math.floor(Math.random() * 101);
    let color = "hsl(" + hue + ", " + sat + "%, " + light + "%)";
    botonFinalHsl.style.backgroundColor = color;
    botonFinalHsl.setAttribute("aria-label", "Color " + color);
}
};


function pintarBotonesHex () {
  for (let botonFinalHex of botonConColor) {
    let colorHex = "#";
    for (let i = 0; i < 6; i++) {
      let indiceHex = Math.floor(Math.random() * 16);
      colorHex = colorHex + caracteresHex[indiceHex];
      }
    botonFinalHex.style.backgroundColor = colorHex;
    botonFinalHex.setAttribute("aria-label", "Color " + colorHex);
  }
}

botonHsl.addEventListener("click", function() {
  modoHsl = true;
  modoHex = false;
  botonHsl.setAttribute("aria-pressed", true);
  botonHex.setAttribute("aria-pressed", false);
} ) 

botonHex.addEventListener("click", function() {
  modoHsl = false;
  modoHex = true;
  botonHsl.setAttribute("aria-pressed", false);
  botonHex.setAttribute("aria-pressed", true);
})

botonGenerar.addEventListener("click", function() {
  if (modoHsl) {
    pintarBotonesHsl();
    console.log("Pintando en HSL");
  } else if (modoHex) {
    pintarBotonesHex();
    console.log("Pintando en Hex");
  }
  }
);




