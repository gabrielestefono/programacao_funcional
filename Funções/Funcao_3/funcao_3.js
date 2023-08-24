// Arrow funcions
const feliznatal = ()=>console.log("Feliz natal!!!");
feliznatal();

const saudacao = nome => "Fala "+nome+", blz!!!";
console.log(saudacao("Maria"));

const soma = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0
    for(let n of numeros){
        total += n
    }
    return total
}

console.log(soma(1,2,3,4,5,6,7,8,9,10));
console.log(soma(1,2,3));
console.log(soma(1,2,3,4,5));
console.log(soma(3,4,5));


let potencia = base => exp => Math.pow(base, exp);
console.log(potencia(2)(8));