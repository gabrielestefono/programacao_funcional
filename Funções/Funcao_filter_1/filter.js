const carrinho = [
	{ nome: "Caneta", qtde: 10, preco: 7.99 },
	{ nome: "Impressora", qtde: 0, preco: 19.20 },
	{ nome: "Caderno", qtde: 4, preco:  27.10},
	{ nome: "Lápis", qtde: 3, preco:  5.82},
	{ nome: "Tesoura", qtde: 1, preco: 19.20 },
]


const nome = item => item.nome
const qtdeMaiorQueZero = item => item.qtde > 0
const qtdeMaiorIgualAZero = item => item.qtde >= 0
const qtdeMuitoGrande = item => item.qtde >= 1000

const itensValidos = carrinho.filter(qtdeMaiorQueZero)
const nomesItensValidos = carrinho.filter(qtdeMaiorQueZero).map(nome)
const nomesItensMaoresZero = carrinho.filter(qtdeMaiorIgualAZero).map(nome)
const nomesQuantidadeMuitoGrande = carrinho.filter(qtdeMuitoGrande).map(nome)

console.log(itensValidos)
console.log(nomesItensValidos)
console.log(nomesItensMaoresZero)
console.log(nomesQuantidadeMuitoGrande)