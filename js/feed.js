// 1 - Capturar o elemento que exibe o nome visitante
const displayNome = document.querySelector(".avatar-content b");
console.log(displayNome);

// 2 - Levantar a informação do meu localStorage (.getItem)
const nome = localStorage.getItem("nomeDoVisitante");
console.log(nome);

// 3 - Escrever o nome do visitante (levantado do localStorage)
//     no elemento html capturado
displayNome.textContent = nome;

// Definindo constante URL que faz referência ao endereço para o qual
// mandamos e recebemos as fotos
const URL = 'https://foodgram-back.herokuapp.com';

// Definindo função que carrega Array de fotos
async function getFotos(){

    // Disparando requisição que carrega o array de fotos
    let response = await fetch(URL + '/posts');

    // Interpretando a resposta da requisição como json
    let fotos = await response.json();

    // Reordenando o vetor de fotos para que as fotos mais recentes sejam exibidas
    // no topo
    fotos.sort(
        (fotoA, fotoB) => fotoB.created_at - fotoA.created_at
    )

    // Executando a função responsável por mostrar as fotos
    showFotos(fotos);

}

function showFotos(fotos){

    // Limpando o elemento main
    document.querySelector("main").textContent = '';

    // Chamando a função showFoto para cada uma das fotos do array de fotos
    fotos.forEach(
        foto => {
            showFoto(foto);
        }
    );
}

function showFoto(foto){
    
    // Imprimindo no console as informações do objeto foto (só para fins de aprendizado)
    // desnecessário para funcionamento do sistema
    console.log(foto);
    
    // Criando um elemento div
    let div = document.createElement('div');

    // Aplicando a classe card a essa div (para que o css .card seja aplicado a ela)
    div.classList.add('card');

    // inserindo o conteúdo na div com base nas informações constantes no objeto foto
    div.innerHTML = `
        <div class="card-header">
            <div>
                <b>${foto.user}</b>
            </div>
            <img src="/images/icons/more-vertical.svg" />
        </div>
        <div class="card-img">
            <img src="${URL}/${foto.url}" />
        </div>
        <div class="card-body">
            <div class="card-itens">
                <b>Postado no dia: ${(new Date(foto.created_at)).toLocaleDateString()}</b>
            </div>
        </div>
    `;

    // Adicionando a divao elemento main
    document.querySelector("main").appendChild(div);
}

getFotos();
