let numeroDeAlunos = 10
/*Percorrer de zero até o número de alunos*/
for (let contador = 0; contador <= numeroDeAlunos; contador++) {
  
     /*Verificar se o número é zero, par ou ímpar*/
    if (contador === 0){
        console.log("O número atual é ZERO");
    } else if(contador % 2 == 0){
        console.log("O número " + contador + " é PAR")
    } else{
        console.log("O número " + contador + " é ÍMPAR")
    }
}