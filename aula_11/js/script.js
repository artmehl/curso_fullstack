// alert('Ola essa é uma mensagem simples.');
// confirm('Deseja realmente apagar?');
// prompt('Digite o seu nome');

let nome = prompt('Digite o seu nome:');
let vax = confirm('Você possui comprovante de vacinação?');

if (vax) alert(`Seja bem vindo, ${nome}`);
else alert('Acesso negado!');

let x = parseInt(prompt('Digite o valor de X:'));
let y = parseInt(prompt('Digite o valor de Y:'));
let resultado = x + y;
alert(`${nome}, o resultado da soma foi ${resultado}`);
