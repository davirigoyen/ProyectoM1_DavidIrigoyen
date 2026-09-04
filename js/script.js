let botonConColor = document.getElementsByClassName("btn-generado");
const botonGenerar = document.getElementById("btn-generar");
const botonHsl = document.getElementById("btn-hsl");
const botonHex = document.getElementById("btn-hex");
const caracteresHex = "0123456789ABCDEF";
const boton6 = document.getElementById("btn-6");
const boton8 = document.getElementById("btn-8");
const boton9 = document.getElementById("btn-9");
const renderBotones = document.getElementById("area-botones");

let cantidadDeColores = 9;
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
  botonHsl.style.backgroundColor = "lightblue";
  botonHex.style.backgroundColor = "";
  botonHsl.setAttribute("aria-pressed", true);
  botonHex.setAttribute("aria-pressed", false);
})

botonHex.addEventListener("click", function() {
  modoHsl = false;
  modoHex = true;
  botonHex.style.backgroundColor = "lightblue";
  botonHsl.style.backgroundColor = "";
  botonHsl.setAttribute("aria-pressed", false);
  botonHex.setAttribute("aria-pressed", true);
})

botonGenerar.addEventListener("click", function() {
  if (modoHsl) {
    pintarBotonesHsl();
    console.log("Pintando " + cantidadDeColores + " Colores en HSL");
  } else if (modoHex) {
    pintarBotonesHex();
    console.log("Pintando " + cantidadDeColores + " Colores en Hex");
  }
  });

function cantidadRender (cantidad) {
  cantidadDeColores = cantidad;
    for (let i = 0; i < renderBotones.children.length; i ++) {
      let boton = renderBotones.children[i];

      if (i < cantidad) {
        boton.style.display = "inline-block";
      } else {
        boton.style.display = "none";
      }
    }
}

boton6.addEventListener("click", function(){
  cantidadRender(6);
  boton6.style.backgroundColor = "lightblue";
  boton8.style.backgroundColor = "";
  boton9.style.backgroundColor = "";
});

boton8.addEventListener("click", function(){
  cantidadRender(8);
  boton6.style.backgroundColor = "";
  boton8.style.backgroundColor = "lightblue";
  boton9.style.backgroundColor = "";
});

boton9.addEventListener("click", function() {
  cantidadRender(9);
  boton6.style.backgroundColor = "";
  boton8.style.backgroundColor = "";
  boton9.style.backgroundColor = "lightblue";
})