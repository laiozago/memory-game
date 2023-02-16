//* Description: Jogo da memória

//seleciona o botão
const btn = document.querySelector('#btn');
//adiciona o evento de click no botão
btn.addEventListener("click", jogo);

function jogo() {
    const numeros = [1,2,3,4];
    let sequencia = [];
    let certo = true;
    let pontuacao = sequencia.length;
    let marcaPontuacao = document.querySelector('#marca-pontuacao');

    while (certo) {
        let num = Math.floor(Math.random() * numeros.length+1);
        sequencia.push(num);
        confirm(`Sequência: ${sequencia}`);

        let arrayResposta = [];
        while(arrayResposta.length != sequencia.length){
            if(quadradoClicado()){
            arrayResposta.push(quadradoClicado());
            }
        }
        let resposta = arrayResposta;

        if (resposta == sequencia) {
            pontuacao++;
            marcaPontuacao.innerHTML = `Pontuação: ${pontuacao}`;
            alert(`Parabéns! Você acertou!`);
            certo = true;
        } else {
            alert(`Você errou!`);
            certo = false;
        }
    }
}

//função retorna o numero do quadrado clicado
function quadradoClicado() {
    let quadrado = this.id;
    return quadrado;
}

//função que adiciona o evento de click nos quadrados
function addEventos() {
    const quadrados = document.querySelectorAll('.quadrado');
    quadrados.forEach(quadrado => {
        quadrado.addEventListener('click', quadradoClicado);
    });
}

//função cria array com o número dos quadrados clicados
function criaArray() {
    let array = [];
    array.push(quadradoClicado());
    return array;
}
