let botonConColor = document.getElementsByClassName("btn-generado");
const botonGenerar = document.querySelector(".btn-generar");
const botonHsl = document.getElementById("btn-hsl");
const botonHex = document.getElementById("btn-hex");
const caracteresHex = "0123456789ABCDEF";
const boton6 = document.getElementById("btn-6");
const boton8 = document.getElementById("btn-8");
const boton9 = document.getElementById("btn-9");
let renderBotones = document.querySelector(".area-botones");

let cantidadDeColores = 9;
let modoHsl = true;
let modoHex = false;
botonHsl.setAttribute("aria-pressed", true);
botonHex.setAttribute("aria-pressed", false);

let colorPrimarioClaro = getComputedStyle(document.documentElement).getPropertyValue("--color-primario-claro").trim();

const toast = document.getElementById("toast");

const botonGuardarPaleta = document.querySelector(".btn-guardar-paleta");
let paletasGuardadas = [];
const botonPaletas = document.querySelector(".btn-paletas");
const desplegablePaletas = document.querySelector(".desplegable-paletas");
const botonCopiarPaleta =document.querySelector(".btn-copiar-paleta");

for (let boton of botonConColor) {

  boton.setAttribute(
    "data-bloqueado",
    "false"
  );

}

function pintarBotonesHsl () {
  for (let botonFinalHsl of botonConColor) {

    if (botonFinalHsl.getAttribute("data-bloqueado") === "true") {
      continue;
    }

    let hue = Math.floor(Math.random() * 361);
    let sat = Math.floor(Math.random() * 101); 
    let light = Math.floor(Math.random() * 101);
    let color = "hsl(" + hue + ", " + sat + "%, " + light + "%)";
    botonFinalHsl.style.backgroundColor = color;
    botonFinalHsl.setAttribute("aria-label", "Color " + color);
    botonFinalHsl.setAttribute("data-color", color);
    botonFinalHsl.setAttribute("data-hsl", color);
    botonFinalHsl.setAttribute("data-hex", hslAHex(hue, sat, light));
}
};


function pintarBotonesHex () {
  for (let botonFinalHex of botonConColor) {

    if (botonFinalHex.getAttribute("data-bloqueado") === "true") {
        continue;
    }

    let colorHex = "#";
    for (let i = 0; i < 6; i++) {
      let indiceHex = Math.floor(Math.random() * 16);
      colorHex = colorHex + caracteresHex[indiceHex];
      }
    botonFinalHex.style.backgroundColor = colorHex;
    botonFinalHex.setAttribute("aria-label", "Color " + colorHex);
    botonFinalHex.setAttribute("data-color", colorHex);
    botonFinalHex.setAttribute("data-hex", colorHex);
    botonFinalHex.setAttribute("data-hsl", hexAHslString(colorHex));
  }
}

botonHsl.addEventListener("click", function() {
  modoHsl = true;
  modoHex = false;
  botonHsl.style.backgroundColor = colorPrimarioClaro;
  botonHex.style.backgroundColor = "";
  botonHsl.setAttribute("aria-pressed", true);
  botonHex.setAttribute("aria-pressed", false);
})

botonHex.addEventListener("click", function() {
  modoHsl = false;
  modoHex = true;
  botonHex.style.backgroundColor = colorPrimarioClaro;
  botonHsl.style.backgroundColor = "";
  botonHsl.setAttribute("aria-pressed", false);
  botonHex.setAttribute("aria-pressed", true);
})

botonGenerar.addEventListener("click", function() {
  animarPulso(botonGenerar);
  if (modoHsl) {
    pintarBotonesHsl();
  } else if (modoHex) {
    pintarBotonesHex();
  }

  mostrarToast("¡Paleta generada!");

});

botonCopiarPaleta.addEventListener("click", function() {

    let textoParaCopiar = "";
    for (let i = 0; i < cantidadDeColores; i++) {
      
      let boton = botonConColor[i];
      let colorActual = modoHsl ? boton.getAttribute("data-hsl") : boton.getAttribute("data-hex");
      textoParaCopiar += colorActual + "\n";
    }
    navigator.clipboard.writeText(textoParaCopiar).then(function() {
        mostrarToast("¡Paleta copiada!");
      });
});

function cantidadRender(cantidad) {

  cantidadDeColores = cantidad;

  let botones = Array.from(botonConColor);

  let bloqueados = botones.filter(function(boton) {
    return boton.getAttribute("data-bloqueado") === "true";
  });

  let desbloqueados = botones.filter(function(boton) {
    return boton.getAttribute("data-bloqueado") !== "true";
  });

  botones.forEach(function(boton) {
    boton.style.display = "none";
  });

  let visibles = [];

  if (bloqueados.length >= cantidad) {

    visibles = bloqueados.slice(0, cantidad);

  } else {

    visibles = [
      ...bloqueados,
      ...desbloqueados.slice(
        0,
        cantidad - bloqueados.length
      )
    ];
  }

  botones.forEach(function(boton) {

    if (visibles.includes(boton)) {

      boton.style.display = "inline-block";
    }
  });
}

boton6.addEventListener("click", function(){
  cantidadRender(6);
  boton6.style.backgroundColor = colorPrimarioClaro;
  boton8.style.backgroundColor = "";
  boton9.style.backgroundColor = "";
});

boton8.addEventListener("click", function(){
  cantidadRender(8);
  boton6.style.backgroundColor = "";
  boton8.style.backgroundColor = colorPrimarioClaro;
  boton9.style.backgroundColor = "";
});

boton9.addEventListener("click", function() {
  cantidadRender(9);
  boton6.style.backgroundColor = "";
  boton8.style.backgroundColor = "";
  boton9.style.backgroundColor = colorPrimarioClaro;
})

pintarBotonesHsl();
botonHsl.style.backgroundColor = colorPrimarioClaro;
boton9.style.backgroundColor = colorPrimarioClaro;


function animarPulso(elemento) {
  elemento.classList.add("animar");
}

function mostrarToast(mensaje) {
  toast.textContent = mensaje;
  toast.classList.add("mostrar");

  setTimeout(function() {
    toast.classList.remove("mostrar");
  }, 1600);
}

for (let boton of botonConColor) {

  boton.addEventListener("click", function() {
    let colorDelBoton = modoHsl ? boton.getAttribute("data-hsl") : boton.getAttribute("data-hex");

    navigator.clipboard.writeText(colorDelBoton).then(function() {
        mostrarToast("¡Color copiado! " + colorDelBoton);
    });
  });
}

document.addEventListener("animationend", function(evento) {
  if (evento.animationName === "animacionBoton") {
    evento.target.classList.remove("animar");
  }
});

function hslAHex(h, s, l) {
  s /= 100;
  l /= 100;
  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs((h / 60) % 2 - 1));
  let m = l - c / 2;
  let r = 0, g = 0, b = 0;

  if (h < 60) { r = c; g = x; b = 0; }
  else if (h < 120) { r = x; g = c; b = 0; }
  else if (h < 180) { r = 0; g = c; b = x; }
  else if (h < 240) { r = 0; g = x; b = c; }
  else if (h < 300) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }

  let rHex = Math.round((r + m) * 255).toString(16).padStart(2, "0");
  let gHex = Math.round((g + m) * 255).toString(16).padStart(2, "0");
  let bHex = Math.round((b + m) * 255).toString(16).padStart(2, "0");

  return "#" + (rHex + gHex + bHex).toUpperCase();
}

function hexAHslString(hex) {
  hex = hex.replace("#", "");
  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h = 0;
  let l = (max + min) / 2;
  let s = 0;

  if (max !== min) {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h = h * 60;
  }

  return "hsl(" + Math.round(h) + ", " + Math.round(s * 100) + "%, " + Math.round(l * 100) + "%)";
}

for (let boton of botonConColor) {
  let tooltip = document.createElement("span");
  tooltip.classList.add("tooltip-color");
  boton.appendChild(tooltip);

  let tooltipCopiar = document.createElement("span");
  tooltipCopiar.classList.add("tooltip-copiar");
  tooltipCopiar.textContent ="Copiar color";
  boton.appendChild(tooltipCopiar);

  boton.addEventListener("mouseenter", function() {
    
    let colorMostrado = modoHsl ? boton.getAttribute("data-hsl") : boton.getAttribute("data-hex");
    tooltip.textContent = colorMostrado;
    
    tooltip.classList.add("mostrar");

    tooltipCopiar.classList.add("mostrar");
    clearTimeout(tooltipCopiar.timer);
    
    tooltipCopiar.timer = setTimeout(function() {
      tooltipCopiar.classList.remove("mostrar");
    }, 700);
  });

  boton.addEventListener("mouseleave", function() {
  tooltip.classList.remove("mostrar");
  });
} 

for (let boton of botonConColor) {
  let tooltipUnblock = document.createElement("span");
  tooltipUnblock.classList.add("tooltip-unblock");

  boton.appendChild(tooltipUnblock);

  boton.addEventListener("mouseover", function() {

  if (boton.getAttribute("data-bloqueado") !== "true") {

    tooltipUnblock.textContent = "\u{1F513}";
    tooltipUnblock.classList.add("mostrar");
  }
  });
    
  boton.addEventListener("mouseout", function() {
    if (boton.getAttribute("data-bloqueado")!== "true") {

    tooltipUnblock.classList.remove("mostrar");
  }
  });

  tooltipUnblock.addEventListener("click", function(eventoBlock) {
    eventoBlock.stopPropagation();

    if (boton.getAttribute("data-bloqueado")=== "true") {
      boton.setAttribute("data-bloqueado","false");
      tooltipUnblock.textContent ="\u{1F513}";
      tooltipUnblock.classList.remove("mostrar");
      mostrarToast("¡Color desbloqueado!");
    } else {
        boton.setAttribute("data-bloqueado","true");
        tooltipUnblock.textContent = "\u{1F512}";
        tooltipUnblock.classList.add("mostrar");
        mostrarToast("¡Color bloqueado!");
      }
    }
  )
};


botonGuardarPaleta.addEventListener("click", function() {

    animarPulso(botonGuardarPaleta);

    if (paletasGuardadas.length >= 5) {
    mostrarToast("¡Límite de paletas guardadas alcanzado!");
    return;
  }

  let paletaActual = [];

  for (let i = 0; i < cantidadDeColores; i++) {

    let boton = botonConColor[i];

    paletaActual.push({
      color: boton.getAttribute("data-color"),
      hsl: boton.getAttribute("data-hsl"),
      hex: boton.getAttribute("data-hex"),
      formato: modoHsl ? "hsl" : "hex"
    });

  }
  paletasGuardadas.push(paletaActual);
  console.log(paletasGuardadas);
  renderizarPaletasGuardadas();
  mostrarToast("¡Paleta guardada!");
});

function renderizarPaletasGuardadas() {

  desplegablePaletas.innerHTML = "";

  paletasGuardadas.forEach(function(paleta, indice) {
    
    let filaPaleta = document.createElement("div");
    filaPaleta.classList.add("fila-paleta-guardada");

    let botonPaletaGuardada = document.createElement("button");
    botonPaletaGuardada.title = "Copiar paleta";
    botonPaletaGuardada.classList.add("paleta-guardada");

    let botonEliminar = document.createElement("button");
    botonEliminar.title = "Eliminar paleta";
    botonEliminar.textContent = "\u00D7";
    botonEliminar.classList.add("btn-eliminar-paleta");
    
    let botonRestaurar = document.createElement("button");
    botonRestaurar.title = "Restaurar paleta";
    botonRestaurar.textContent = "\u21BA";
    botonRestaurar.classList.add("btn-restaurar-paleta");

    botonEliminar.addEventListener("click", function(evento) {

    evento.stopPropagation();

    paletasGuardadas.splice(indice, 1);

    renderizarPaletasGuardadas();

    mostrarToast("¡Paleta eliminada!");
    });

    botonRestaurar.addEventListener("click", function(evento) {

      evento.stopPropagation();

      for (let boton of botonConColor) {
        boton.setAttribute("data-bloqueado","false");
        
        let tooltipUnblock =boton.querySelector(".tooltip-unblock");

        if (tooltipUnblock) {
          tooltipUnblock.textContent ="\u{1F513}";
          tooltipUnblock.classList.remove("mostrar");
        }
      }

      cantidadRender(paleta.length);
      
      botonHsl.style.backgroundColor = "";
      botonHex.style.backgroundColor = "";

      if (paleta[0].formato === "hsl") {

        modoHsl = true;
        modoHex = false;

        botonHsl.style.backgroundColor = colorPrimarioClaro;
        botonHsl.setAttribute("aria-pressed", true);
        botonHex.setAttribute("aria-pressed", false);

      } else {

        modoHsl = false;
        modoHex = true;

        botonHex.style.backgroundColor = colorPrimarioClaro;
        botonHex.setAttribute("aria-pressed", true);
        botonHsl.setAttribute("aria-pressed", false);

      }

      boton6.style.backgroundColor = "";
      boton8.style.backgroundColor = "";
      boton9.style.backgroundColor = "";

      if (paleta.length === 6) {
        boton6.style.backgroundColor = colorPrimarioClaro;
      } else if (paleta.length === 8) {
        boton8.style.backgroundColor = colorPrimarioClaro;
      } else if (paleta.length === 9) {boton9.style.backgroundColor = colorPrimarioClaro;}

      for (let i = 0; i < paleta.length; i++) {

        let boton = botonConColor[i];
        let colorGuardado = paleta[i];

        boton.style.backgroundColor = colorGuardado.color;
        boton.setAttribute("data-color", colorGuardado.color);
        boton.setAttribute("data-hsl", colorGuardado.hsl);
        boton.setAttribute("data-hex", colorGuardado.hex);

        boton.setAttribute("data-bloqueado","false");

        let tooltipUnblock = boton.querySelector(".tooltip-unblock");
        
        if (tooltipUnblock) {
          tooltipUnblock.textContent ="\u{1F513}";
          tooltipUnblock.classList.remove("mostrar");
        }

        boton.setAttribute("aria-label", "Color " + colorGuardado.color);
      }

      mostrarToast("¡Paleta restaurada!");
    });

    botonPaletaGuardada.addEventListener("click", function() {

    let textoParaCopiar = "";

    paleta.forEach(function(colorGuardado) {
    textoParaCopiar +=
      colorGuardado.color + "\n";
    });

    navigator.clipboard.writeText(textoParaCopiar)
    .then(function() {

      mostrarToast("¡Paleta copiada!");
    });
    });

    paleta.forEach(function(colorGuardado) {
      let miniColor = document.createElement("span");
      miniColor.classList.add("mini-color-paleta");
      miniColor.style.backgroundColor = colorGuardado.color;
      botonPaletaGuardada.appendChild(miniColor);
    });
    filaPaleta.appendChild(botonPaletaGuardada);
    filaPaleta.appendChild(botonRestaurar);
    filaPaleta.appendChild(botonEliminar);
    desplegablePaletas.appendChild(filaPaleta);
  });
}

botonPaletas.addEventListener("click", function() {
  desplegablePaletas.classList.toggle("mostrar");
});