import leia from "readline-sync"

var nota = -1
while (nota <0 || nota >10){
    nota = leia.questionFloat("Informe a nota (0.0 a 10.0): ");
    if (nota <0 || nota >10){
        console.log("Nota invalida");
    }
  }

  var nota_mult = nota*10;

  if(nota_mult >= 90){
console.log("Nota A");
  }else if(nota_mult >= 80 && nota_mult<90){
    console.log("Nota B");
  }else if(nota_mult >= 70 && nota_mult<80){
    console.log("Nota C");
  }else if(nota_mult >= 60 && nota_mult<70){
    console.log("Nota D");
  }else {
    console.log("Nota F");
  }