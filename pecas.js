const listaDePecas = ["Gabinete","Placa Mãe","Fonte"]

console.log(listaDePecas)
/* Capacidade máxima de peças cadastradas é de 10 unidades*/
if(listaDePecas.length < 10) {
    console.log("É possível cadastrar mais peças")
}else{
    console.log("Não há mais espaço na lista")
}

var peso = 300;
/* Peça deve possuir mais de 100g para ser cadastrada*/
if (peso > 100){
    console.log ("Peso da peça está adequado")
} else{
    console.log("Peso insuficiente")
}

let nomePeca = ("Processador")
/* Verificar se a peça possui um nome de mais de 3 caracters*/
if(nomePeca.length > 3){
    console.log("Nome adequado!!")
}else if(nomePeca.length == 0){
    console.log("O nome não pode ser vazio")
}else {
    console.log("O nome deve possuir mais de 3 caracteres")
}