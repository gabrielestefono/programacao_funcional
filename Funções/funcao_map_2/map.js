const carrinho = [
	{ nome: "Caneta", qtde: 10, preco: 7.99 },
	{ nome: "Impressora", qtde: 0, preco: 19.20 },
	{ nome: "Caderno", qtde: 4, preco:  27.10},
	{ nome: "Lápis", qtde: 3, preco:  5.82},
	{ nome: "Tesoura", qtde: 1, preco: 19.20 },
]

const cn = nome => nome.nome

const nomes = carrinho.map(cn)
console.log(nomes);

const value = valor => valor.qtde * valor.preco
console.log(carrinho.map(value))