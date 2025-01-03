
function alterarStatus(id) {
 
    let jogoClicado = document.getElementById(`game-${id}`);
   
    let imagem = jogoClicado.querySelector('.dashboard__item__img');

    let botao = jogoClicado.querySelector('.dashboard__item__button');

    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');
;

    if(imagem.classList.contains('dashboard__item__img--rented')) {

        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Comprar';
        botao.classList.remove('dashboard__item__button--return');

    } else {

        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');

    }
}

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    
    alert(produto);
    alert(quantidade.value);
}

function limpar() {

}

function pagar() {
    let pagamento = document.getElementById('pagamento').value;

    alert(pagamento);
}

function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}