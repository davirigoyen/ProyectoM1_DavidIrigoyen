# 🎨 Palette

## 📖 Descripción

Palette es una aplicación web interactiva para la generación, exploración y gestión de paletas de colores.

La aplicación permite:

- Generar paletas aleatorias en formatos HSL y HEX.
- Copiar colores individuales al portapapeles.
- Copiar la paleta completa.
- Exportar la paleta actual como archivo descargable.
- Bloquear colores específicos para mantenerlos entre generaciones.
- Guardar paletas favoritas.
- Restaurar paletas previamente guardadas.
- Persistir las paletas guardadas mediante LocalStorage.
- Elegir entre paletas de 6, 8 o 9 colores.

---

## 🌐 Deploy

Puedes acceder a la aplicación desde:

🔗 **Deploy:**  
[Agregar aquí la URL del deploy]

Ejemplo:

```text
https://usuario.github.io/palette/
```

---

## 🚀 Instrucciones de uso

### Uso desde el navegador

1. Acceder al enlace de deploy.
2. Generar una nueva paleta mediante el botón correspondiente.
3. Seleccionar formato HSL o HEX.
4. Copiar colores individuales haciendo click sobre ellos.
5. Bloquear colores mediante el candado para conservarlos entre generaciones.
6. Guardar las paletas favoritas.
7. Restaurar o eliminar paletas guardadas.
8. Copiar o exportar la paleta completa.

---

### Ejecución local

Clonar el repositorio:

```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
```

Ingresar al directorio:

```bash
cd TU_REPOSITORIO
```

Abrir el archivo:

```text
index.html
```

con cualquier navegador moderno.

También puede ejecutarse utilizando la extensión Live Server de Visual Studio Code.

---

## 📦 Despliegue

### GitHub Pages

1. Subir el proyecto al repositorio remoto.
2. Acceder a:

```text
Settings → Pages
```

3. Seleccionar:

```text
Branch: main
```

4. Seleccionar:

```text
Folder: /root
```

5. Guardar la configuración.
6. Esperar la publicación automática.
7. Acceder a la URL generada por GitHub Pages.

---

## ⚙️ Decisiones técnicas

### Diseño responsive

Se utilizaron unidades relativas como:

- rem
- vw
- vh
- clamp()

para lograr una correcta adaptación a diferentes resoluciones.

### Persistencia local

Se implementó LocalStorage para mantener las paletas guardadas entre sesiones sin necesidad de backend.

### Sistema de bloqueo

Los colores pueden bloquearse individualmente para impedir su modificación durante la generación de nuevas paletas.

### Gestión del estado

Se utilizó el atributo:

```html
data-bloqueado
```

como fuente principal del estado de bloqueo de cada color.

### Exportación

La aplicación permite exportar la paleta actual como archivo descargable generado desde el navegador.

---

## 🔮 Mejoras futuras

### Funcionalidades previstas

- [ ] Exportación en formato JSON.
- [ ] Exportación directa a variables CSS.
- [ ] Exportación a formato Adobe ASE.
- [ ] Compartir paletas mediante URL.
- [ ] Sistema de etiquetas para clasificar paletas.
- [ ] Búsqueda dentro de las paletas guardadas.
- [ ] Historial de generaciones anteriores.
- [ ] Modo oscuro.
- [ ] Animaciones avanzadas para interfaces y transiciones.

> Completar esta sección con las mejoras ya planificadas para el proyecto.

---

## 🤖 Uso de Inteligencia Artificial

### Herramientas utilizadas

Durante el desarrollo del proyecto se emplearon herramientas de Inteligencia Artificial como apoyo para:

- Resolución de bugs.
- Refactorización de código.
- Optimización de lógica.
- Diseño de experiencia de usuario (UX).
- Generación de propuestas arquitectónicas.
- Mejora de la accesibilidad.
- Revisión y validación de decisiones técnicas.

### Tipo de asistencia recibida

La IA se utilizó como herramienta de apoyo técnico y consulta.

Todas las decisiones finales de implementación, integración y validación fueron realizadas por el desarrollador.

### Capturas de prompts relevantes

Agregar en esta sección las capturas de pantalla requeridas por la consigna.

#### Prompt 1

./documentacion/prompt-1.png

Descripción del impacto en el proyecto.

---

#### Prompt 2

./documentacion/prompt-2.png

Descripción del impacto en el proyecto.

---

#### Prompt 3

./documentacion/prompt-3.png

Descripción del impacto en el proyecto.

---

## 🎥 Flujo completo de la aplicación

A continuación se muestra el flujo de uso de la aplicación:

### Gif demostrativo

./documentacion/flujo-app.gif

### Funcionalidades mostradas

- Generación de paletas.
- Cambio entre HSL y HEX.
- Bloqueo y desbloqueo de colores.
- Copia de colores.
- Copia de paletas.
- Guardado de paletas.
- Restauración de paletas.
- Eliminación de paletas.
- Exportación de paletas.
- Persistencia mediante LocalStorage.

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Git
- GitHub
- GitHub Pages

---

## 👨‍💻 Autor

**David Irigoyen**

- GitHub: [Agregar perfil]
- LinkedIn: [Agregar perfil]

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos y de formación profesional.