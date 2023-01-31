//* Description: Jogo da memória
function jogo() {
    const numeros = [1,2,3,4,5,6];
    let sequencia = [];
    let certo = true;

    while (certo) {
        let num = Math.floor(Math.random() * numeros.length+1);
        sequencia.push(num);
        confirm(`Sequência: ${sequencia}`);
        let resposta = prompt(`Digite a sequência:`);

        if (resposta == sequencia) {
            alert(`Parabéns! Você acertou!`);
            certo = true;
        } else {
            alert(`Você errou!`);
            certo = false;
        }
    }
}

//seleciona o botão
const btn = document.querySelector('#btn');
//adiciona o evento de click no botão
btn.addEventListener("click", jogo);