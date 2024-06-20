import leia from "readline-sync"

var ano = leia.questionInt("Informe um ano: ");

var div = ano%4
var div2 = ano&100 
var div3 = ano&400
if(div == 0 && div2 != 0){
console.log("Este ano é bissexto.");
}else if(div == 0 && div3 == 0){
        console.log("Este ano e bissexto.");
}else{
    console.log("Este ano nao e bissexto.");
}git 