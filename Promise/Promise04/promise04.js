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

