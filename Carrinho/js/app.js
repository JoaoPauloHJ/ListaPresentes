/* Ao clicar no botão ele adiciona um produto selecionado, 
recuperando os valores ( nome produto, quantidade e valor)
Calculando o preço e o subtotal 
Adicionando no carrinho*/
function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    
    alert(nomeProduto.value);
    alert(quantidade.value);
}

function limpar() {

}