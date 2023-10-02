function gerarNumerosEntre(min, max, tempo) {
	if (min > max) {
		[max, min] = [min, max]
	}
	return new Promise(resolve => {
		setTimeout(function(){
			const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
			resolve(aleatorio)
		}, tempo)
	})
}

function gerarVariosNumeros(){
	return Promise.all([
		gerarNumerosEntre(1, 60, 110),
		gerarNumerosEntre(1, 60, 1000),
		gerarNumerosEntre(1, 60, 90),
		gerarNumerosEntre(1, 60, 800),
		gerarNumerosEntre(1, 60, 70),
		gerarNumerosEntre(1, 60, 600),
		gerarNumerosEntre(1, 60, 50),
		gerarNumerosEntre(1, 60, 400),
		gerarNumerosEntre(1, 60, 30),
		gerarNumerosEntre(1, 60, 200),
		gerarNumerosEntre(1, 60, 10),
	])
}

gerarVariosNumeros().then(numeros => console.log(numeros))