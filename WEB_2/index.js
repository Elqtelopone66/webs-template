// Función para mostrar la ventana
function abrirVentana(idVentana) {
  document.getElementById(idVentana).classList.add('activa');
}

// Función para ocultar la ventana
function cerrarVentana(idVentana) {
  document.getElementById(idVentana).classList.remove('activa');
}

// --- NUEVA LÓGICA PARA LA ANIMACIÓN DEL TÍTULO Y EL SCROLL ---

document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.getElementById("titulo-principal");
    
    // 1. Animación de entrada
    // Aumentamos de 100ms a 300ms para que tenga un inicio un pelín más tardío al cargar
    setTimeout(() => {
        titulo.classList.add("visible");
    }, 300); 

    // 2. Animación de salida al hacer scroll
    window.addEventListener("scroll", () => {
        // Aumentamos el límite de 50 a 150. Hay que bajar más la pantalla para que se active la salida.
        if (window.scrollY > 150) {
            titulo.classList.remove("visible");
            titulo.classList.add("oculto");
        } else {
            titulo.classList.remove("oculto");
            titulo.classList.add("visible");
        }
    });
});

// --- NUEVA LÓGICA PARA LA ANIMACIÓN DEL TÍTULO Y EL LIENZO CON SCROLL ---

// --- NUEVA LÓGICA MULTI-LIENZO CON SCROLL ---

document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.getElementById("titulo-principal");
    // Seleccionamos TODOS los lienzos que tengan esta clase
    const lienzos = document.querySelectorAll(".contenedor-lienzo"); 
    
    // 1. Animación de entrada del título
    setTimeout(() => {
        titulo.classList.add("visible");
    }, 800); 

    // 2. Evento al hacer scroll
    window.addEventListener("scroll", () => {
        
        // --- ANIMACIÓN DEL TÍTULO ---
        if (window.scrollY > 150) {
            titulo.classList.remove("visible");
            titulo.classList.add("oculto");
        } else {
            titulo.classList.remove("oculto");
            titulo.classList.add("visible");
        }

        // --- ANIMACIÓN DE TODOS LOS LIENZOS ---
        lienzos.forEach(lienzo => {
            const posicionLienzo = lienzo.getBoundingClientRect();
            const alturaPantalla = window.innerHeight;

            // Verificamos de forma individual cada lienzo
            if (posicionLienzo.top < alturaPantalla - 150 && posicionLienzo.bottom > 150) {
                lienzo.classList.add("visible");
                lienzo.classList.remove("oculto-abajo");
            } 
            else if (posicionLienzo.bottom <= 150) {
                lienzo.classList.remove("visible");
                lienzo.classList.add("oculto-abajo");
            } 
            else {
                lienzo.classList.remove("visible");
                lienzo.classList.remove("oculto-abajo");
            }
        });
    });
});