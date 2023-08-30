let p = new Promise(function (cumprirPromessa) {
	cumprirPromessa([['Ana', "Bia", "Carlos", "Daniel"],["Bia", "Carlos", "Daniel", 'Ana'],["Carlos", "Daniel",'Ana', "Bia"],["Daniel", 'Ana', "Bia", "Carlos"]])
});

let r = new Promise(function (cumprirPromessa) {
	cumprirPromessa([['Ana', "Bia", "Carlos", "Daniel"],["Bia", "Carlos", "Daniel", 'Ana'],["Carlos", "Daniel",'Ana', "Bia"],["Daniel", 'Ana', "Bia", "Carlos"]])
});

p.then(arrayDeArrays => arrayDeArrays[0])
.then(primeiroArray => primeiroArray[0])
.then(primeiroNome => primeiroNome[0])
.then(primeiraLetra => primeiraLetra.toLowerCase())
.then(lowercase => console.log(lowercase))


function primeiroArray(arrayDeArrays) {
	return arrayDeArrays[0]
}

function primeiroNome(primeiroNome) {
	return primeiroNome[0]
}

function primeiraLetra(primeiraLetra) {
	return primeiraLetra[0]
}

function lowercase(lowercase) {
	return lowercase.toLowerCase()
}

r.then(primeiroArray)
.then(primeiroNome)
.then(primeiraLetra)
.then(lowercase)
.then(console.log)