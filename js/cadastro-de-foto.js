// Definindo constante URL que faz referência ao endereço para o qual
// mandamos e recebemos as fotos
const URL = 'https://foodgram-back.herokuapp.com';

// Definindo função encarregada de enviar foto
async function sendFoto(){
    try {
        let response = await fetch(URL + '/posts',{
            method:'POST',
            body:document.getElementById('foto').files[0],
            headers:{user:localStorage.getItem('nomeDoVisitante')}
        })
    } catch (error) {
        alert(error);
        console.log(error);
        return;
    }
    
    window.location = 'feed.html';
}

// Associando o click do botão de enviar a execução da função sendFoto
document.querySelector("button").addEventListener('click',sendFoto);