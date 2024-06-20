import leia from "readline-sync"

var horas_trabalhadas = leia.questionFloat("Informe a quantidade de horas trabalhadas: ");
var valor_hora = leia.questionFloat("Informe o valor da hora trabalhada: ");
var percentual_desconto = leia.questionFloat("Informe o percentual de desconto: ");

var bruto = horas_trabalhadas*valor_hora;
var desconto = bruto/100*percentual_desconto;
var liquido = bruto - desconto;
console.log("Salario bruto: R$"+ bruto);
console.log("Total descontado: R$" + desconto);
console.log("Salario liquido: R$"+ liquido);