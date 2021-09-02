//Data evento 
var strDate = "31/10/2021".split('/').reverse();
//Data atual
var currentDate = new Date(strDate).valueOf();

var dateNow = new Date().valueOf();
//Verificar se a data do evento é posterior à data atual
if (currentDate < dateNow) {
console.log("Data Inválida!");  
} else {
console.log("Cadastrar Evento.")  
}
//Idade do participante
var idade = 18;
//Verifica se idade do participante é maior ou igual a 18 anos
if (idade >= 18) {
    console.log("Informar título do Evento.")
} else {
    console.log("Cadastro não permitido para participentes menores de 18 anos.")
}
//Informar o evento
var evento = 2;
//Verifica se é Evento 1 ou Evento 2
if (evento === 1) {
    console.log("Cadastrar participante no Evento 1.")
} else {
    console.log("Cadastrar participante no Evento 2.")
}
//Listar participantes e palestrantes
var numPart = ["João - Evento 1" , "Antonio - Evento 2" , "Carlos - Evento 2" , "José - Evento 1" , "Henrique - Evento 1"];
    console.log(numPart);
//Verificar se a quantidade de participantes é inferior a 100
if (numPart.length <= 100) {
    console.log("Efetuar cadastro.")
} else {
    console.log("Limite de participantes atingido.")
}




