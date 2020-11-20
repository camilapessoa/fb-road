// Capturando o input de texto
const inputNome = document.getElementById("nome");
console.log(inputNome);

// Capturar o botão de logar
const buttonLogar = document.querySelector("button");
console.log(buttonLogar);

function logar() {
  // 1 - Guardar o nome do visitante no navegador
  localStorage.setItem("nomeDoVisitante", inputNome.value);

  // 2 - Direcionar o nosso visitante ao feed.html
  window.location = "feed.html";
}

buttonLogar.addEventListener("click", logar);

/*

const sections = document.querySelectorAll("section");
console.log(sections);

*/
