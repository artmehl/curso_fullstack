const a = 10;
const b = 5;

console.log(a + b); // soma
console.log(a - b); // subtracao
console.log(a * b); // multiplicacao
console.log(a / b); // divisao
console.log(a ** b); // pontenciacao
console.log(a % b); // resto da divisao

if (a % 2 == 0) console.log("a eh par");
else console.log("a eh impar");

if (b % 2 == 0) console.log("b eh par");
else console.log("b eh impar");

console.log();

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log();

const passo = 10;
let cont = 0;

//+= equivalente a cont = cont + passo
cont += passo;
console.log(cont);

cont += passo;
console.log(cont);

cont += passo;
console.log(cont);

console.log();

let x = 10;
let y = '5';

console.log(x + y + "\n");

y = parseInt(y); // Passa para um number

console.log(x + y + "\n");