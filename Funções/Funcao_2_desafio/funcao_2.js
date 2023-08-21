function bomDia(){
    return "Bom Dia!";
}

const BoaTarde = function (){
    return "Boa Tarde!";
}


const BoaNoite = () => "Boa Noite!";

// 1) Passar uma função como parâmetro para outra função
function executarQualquerCoisa(fn){
    if(typeof fn === 'function'){
        console.log(fn())
    }
}

executarQualquerCoisa(bomDia)
executarQualquerCoisa(BoaTarde)
executarQualquerCoisa(BoaNoite)
executarQualquerCoisa(3)

// 2) Retornar uma função a partir de uma outra função

function potencia(base){
    return function(exp){
        return Math.pow(base, exp)
    }
}

const potenciade2 = potencia(2)
console.log(potenciade2(8))

const potenciade3 = potencia(3)
console.log(potenciade3(4))

// DESAFIO 

const somar = (a,b) => a + b;

const subtrair = (a,b) => a - b;

const multiplicar = (a,b) => a * b;

const dividir = (a,b) => a / b;

const calcular = (c)=>{
    return c(a,b)
}

let resultado = calcular(somar)(5,8);