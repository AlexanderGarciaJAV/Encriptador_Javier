// Función para mostrar el mensaje de error
function mostrarMensaje(mensaje) {
    const error = document.querySelector('#error');
    error.textContent = mensaje;
    error.style.display = 'block';

    setTimeout(() => {
        error.style.display = 'none';
    }, 3000);
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    const resultInput = document.querySelector('.result-input');

    if (resultInput && resultInput.value.trim() !== "") {
        resultInput.select();
        document.execCommand('copy');
        mostrarMensaje('Texto copiado en el portapapeles');
    } else {
        mostrarMensaje('No hay texto para copiar');
    }
}

// Función para encriptar el texto
function encriptar() {
    const inputTexto = document.querySelector('.input-texto').value;
    const resultText = document.querySelector('#result-text');

    if (inputTexto.trim() === "") {
        mostrarMensaje('Por favor ingresa texto antes de encriptar.');
        return;
    }

    if (!/^[a-z\s]*$/.test(inputTexto)) {
        mostrarMensaje('Por favor ingresa solo letras minúsculas y sin acentos.');
        return;
    }

    const textoEncriptado = inputTexto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    resultText.innerHTML = `
        <textarea readonly class="result-input">${textoEncriptado}</textarea>
    `;
    document.querySelector('.result-input').style.display = 'block';
    habilitarBotones();
}

// Función para desencriptar el texto
function desencriptar() {
    const inputTexto = document.querySelector('.input-texto').value;
    const resultText = document.querySelector('#result-text');

    if (inputTexto.trim() === "") {
        mostrarMensaje('Por favor ingresa texto antes de desencriptar.');
        return;
    }

    if (!/^[a-z\s]*$/.test(inputTexto)) {
        mostrarMensaje('Por favor ingresa solo letras minúsculas y sin acentos.');
        return;
    }

    const textoDesencriptado = inputTexto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    resultText.innerHTML = `
        <textarea readonly class="result-input">${textoDesencriptado}</textarea>
    `;
    document.querySelector('.result-input').style.display = 'block';
    habilitarBotones();
}

// Función para habilitar o deshabilitar los botones según el contenido del textarea
function habilitarBotones() {
    const inputTexto = document.querySelector('.input-texto').value;
    const bot1 = document.querySelector('.bot1');
    const bot2 = document.querySelector('.bot2');
    const bot3 = document.querySelector('.bot3');

    if (inputTexto.trim() !== "") {
        bot1.disabled = false;
        bot2.disabled = false;
        bot3.disabled = false;
    } else {
        bot1.disabled = true;
        bot2.disabled = true;
        bot3.disabled = true;
    }
}

// Añadir evento al textarea para habilitar o deshabilitar los botones
document.querySelector('.input-texto').addEventListener('input', habilitarBotones);

// Llamar a la función al cargar la página
window.onload = habilitarBotones;

// Botón para subir al inicio
const backToTop = document.querySelector('#backToTop');

// Evento para mostrar el botón al hacer scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Cambiado de 300 a 100 píxeles
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

// Evento para subir al inicio al hacer clic en el botón
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});