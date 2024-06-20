/* Um comerciante comprou um produto e quer vendê-lo com lucro de 45% se o valor da compra for menor que R$20,00;
 caso contrário, o lucro será de 30%. Faça um algoritmo que receba o valor de compra do produto e ele retorne o valor de venda desse mesmo produto.
  (Opcional, utilizar o INTL para formatar saída).*/ 

  import leia from "readline-sync"

  def calcular_valor_venda(valor_compra):
    if valor_compra < 20:
        lucro = 0.45
    else:
        lucro = 0.30
    valor_venda = valor_compra * (1 + lucro)
    return valor_venda

# Exemplo de uso:
valor_compra = float(input("Digite o valor de compra do produto: R$"))
valor_venda = calcular_valor_venda(valor_compra)
print(f"O valor de venda do produto deve ser: R${valor_venda:.2f}")


import leia from "readline-sync"

// Recebe o valor de compra do produto
let valorCompra = parseFloat(prompt("Digite o valor de compra do produto (em R$):"));

// Verifica se o valor de compra é menor que R$20,00
if (valorCompra < 20) {
    // Calcula o lucro de 45%
    let lucro = valorCompra * 0.45;
    let valorVenda = valorCompra + lucro;
    console.log(`O valor de venda do produto é R$${valorVenda.toFixed(2)}.`);
} else {
    // Calcula o lucro de 30%
    let lucro = valorCompra * 0.30;
    let valorVenda = valorCompra + lucro;
    console.log(`O valor de venda do produto é R$${valorVenda.toFixed(2)}.`);
}


import leia from "readline-sync"

var valor_compra = leia.questionFloat("Informe o valor do produto: ");

if (valor_compra < 20){
console.log("O valor de venda do produto será: R$"+ (valor_compra*1.45));

}else{
    console.log("O valor de venda do produto será: R$"+ (valor_compra*1.30));
}