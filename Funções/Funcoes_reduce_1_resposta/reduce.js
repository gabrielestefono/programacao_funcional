const carrinho = [
	{ nome: "Caneta", qtde: 10, preco: 7.99, fragil: true },
	{ nome: "Impressora", qtde: 1, preco: 649.50, fragil: true },
	{ nome: "Caderno", qtde: 4, preco:  27.10, fragil: false},
	{ nome: "Lápis", qtde: 3, preco:  5.82, fragil: false},
	{ nome: "Tesoura", qtde: 1, preco: 19.20, fragil: true },
]

// 1. Retornar todos os com fragil = true

const fragil = item => item.fragil
let resultado = carrinho.filter(fragil)
console.log(resultado)

// 2. Multiplicar a quantidade pelo preço
const calcular = item => item.preco * item.qtde
resultado = resultado.map(calcular)
console.log(resultado)

// 3. Gerar a média dos valores
const media = (acc, el) => {
	const novaQtde = acc.qtde + 1;
	const novoTotal = acc.total + el
	return {
		qtde: novaQtde,
		total: novoTotal,
		media: novoTotal / novaQtde
	}
}
resultado = resultado.reduce(media, {qtde: 0, total: 0, media: 0}).media
console.log(resultado)