import leia from "readline-sync"

var nota1 = leia.questionFloat("Informe a nota 1: ");
var peso_nota1 = leia.questionFloat("Informe o peso da nota 1: ");
var nota2 = leia.questionFloat("Informe a nota 2: ");
var peso_nota2 = leia.questionFloat("Informe o peso da nota 2: ");
var nota3 = leia.questionFloat("Informe a nota 3: ");
var peso_nota3 = leia.questionFloat("Informe o peso da nota 3: ");

var media_ponderada = ((nota1*peso_nota1) + (nota2*peso_nota2) + (nota3*peso_nota3))/(peso_nota1+peso_nota2+peso_nota3);
console.log("A média ponderada das notas é: " + media_ponderada);