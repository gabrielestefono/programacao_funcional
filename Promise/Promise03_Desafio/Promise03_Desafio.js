const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

const abrirArquivo = (caminho)=>{
	return new Promise(resolve => {
		fs.readFile(caminho, function(_, conteudo){
			resolve(conteudo.toString())
		});
	})
}

abrirArquivo(caminho).then(conteudo => console.log(conteudo))