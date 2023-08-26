const carrinho = [
	{ nome: "Caneta", qtde: 10, preco: 7.99, fragil: true },
	{ nome: "Impressora", qtde: 1, preco: 649.50, fragil: true },
	{ nome: "Caderno", qtde: 4, preco:  27.10, fragil: false},
	{ nome: "Lápis", qtde: 3, preco:  5.82, fragil: false},
	{ nome: "Tesoura", qtde: 1, preco: 19.20, fragil: true },
]

// 1. Retornar todos os com fragil = true

const fragil = item => item.fragil
const resultado = carrinho.filter(fragil)
console.log(resultado)

// 2. Multiplicar a quantidade pelo preço

const valorPorItem = item => item.preco * item.qtde
const valor = carrinho.map(valorPorItem)
console.log(valor)
const CalculaValorTotal = (item, vi) => item + vi
const valorTotal = valor.reduce(CalculaValorTotal)
console.log(valorTotal)

// 3. Gerar a média dos valores
const selecionaPreco = item => item.preco
const calcularMedia = (a,b) => (a + b) / 2
console.log(carrinho.map(selecionaPreco).reduce(calcularMedia))