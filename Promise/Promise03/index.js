function gerarNumerosEntre(min, max) {
	if (min > max) {
		[max, min] = [min, max]
	}

	return new Promise(resolve => {
		const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
		resolve(aleatorio)
	})
}

gerarNumerosEntre(10, 30).then(num => num * 10).then(num => `O numero gerado foi o numero ${num}.`).then(console.log);