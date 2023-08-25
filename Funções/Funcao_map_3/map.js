Array.prototype.meuMap = function (fn) {
	const novo = []
	for (let i = 0; i < this.length; i++) {
		const resultado = fn(this[i], i, this)
		novo.push(resultado)
	}
	return novo
}

const carrinho = [
	{ nome: "Caneta", qtde: 10, preco: 7.99 },
	{ nome: "Impressora", qtde: 0, preco: 19.20 },
	{ nome: "Caderno", qtde: 4, preco:  27.10},
	{ nome: "Lápis", qtde: 3, preco:  5.82},
	{ nome: "Tesoura", qtde: 1, preco: 19.20 },
]

const cn = nome => nome.nome
const nomes = carrinho.meuMap(cn)
console.log(nomes);

const value = valor => valor.qtde * valor.preco
console.log(carrinho.meuMap(value))