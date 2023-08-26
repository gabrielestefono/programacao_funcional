const carrinho = [
	{ nome: "Caneta", qtde: 10, preco: 7.99 },
	{ nome: "Impressora", qtde: 0, preco: 19.20 },
	{ nome: "Caderno", qtde: 4, preco:  27.10},
	{ nome: "Lápis", qtde: 3, preco:  5.82},
	{ nome: "Tesoura", qtde: 1, preco: 19.20 },
]

Array.prototype.meuFilter = function (fn) {
	const resultado = []
	for(let i = 0; i < this.length; i++){
		const result = fn(this[i], i, this)
		if (result) {
			resultado.push(this[i])
		}
	}
	return resultado
}

const nome = item => item.nome
const qtdeMaiorQueZero = item => item.qtde > 0
const qtdeMaiorIgualAZero = item => item.qtde >= 0
const qtdeMuitoGrande = item => item.qtde >= 1000

const itensValidos = carrinho.meuFilter(qtdeMaiorQueZero)
const nomesItensValidos = carrinho.meuFilter(qtdeMaiorQueZero).map(nome)
const nomesItensMaoresZero = carrinho.meuFilter(qtdeMaiorIgualAZero).map(nome)
const nomesQuantidadeMuitoGrande = carrinho.meuFilter(qtdeMuitoGrande).map(nome)

console.log(itensValidos)
console.log(nomesItensValidos)
console.log(nomesItensMaoresZero)
console.log(nomesQuantidadeMuitoGrande)