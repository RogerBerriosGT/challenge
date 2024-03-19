// Función para encriptar el texto
function encriptar() {
  let texto = document.getElementById("texto").value.toLowerCase(); // Convertir texto a minúsculas
  texto = quitarTildes(texto); // Eliminar tildes del texto
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  // Encriptación del texto
  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/encriptado.jpg";
  } else {
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

// Función para desencriptar el texto
function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  // Desencriptación del texto
  let textoDesencriptado = texto
    .replace(/(enter|imes|ai|ober|ufat)/gi, function(match) {
      switch (match.toLowerCase()) {
        case 'enter':
          return 'e';
        case 'imes':
          return 'i';
        case 'ai':
          return 'a';
        case 'ober':
          return 'o';
        case 'ufat':
          return 'u';
        default:
          return match; // Mantener cualquier otra coincidencia sin cambios
      }
    });

  if (texto.length != 0) {
    document.getElementById("texto").value = textoDesencriptado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/desencriptado.jpg";
  } else {
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

// Función para quitar tildes del texto
function quitarTildes(texto) {
  return texto
    .replace(/[áä]/g, "a")
    .replace(/[éë]/g, "e")
    .replace(/[íï]/g, "i")
    .replace(/[óö]/g, "o")
    .replace(/[úü]/g, "u");
}

// Obtener referencia al elemento textarea
let textarea = document.getElementById("texto");

// Agregar un evento 'input' para detectar cuando el usuario escriba en el textarea
textarea.addEventListener("input", function() {
  // Obtener el texto ingresado por el usuario
  let texto = textarea.value.toLowerCase(); // Convertir a minúsculas
  texto = quitarTildes(texto); // Eliminar tildes
  textarea.value = texto; // Actualizar el valor del textarea con el texto modificado
});
