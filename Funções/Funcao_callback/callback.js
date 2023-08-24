function exec(fn, a, b) {
	return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (x, y) => console.log(x - y)
const subtrair = (x, y) => x - y

exec(somarNoTerminal, 56, 38)

exec(subtrairNoTerminal, 182, 27)

const r = exec(subtrair, 50, 25);

console.log(r)

const cb = () => console.log('exec...')

setTimeout(cb, 5000)