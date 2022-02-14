/* Modelo de frase:
Arthur Mehl tem 19 anos, pesa 84 kg
tem 1.92 de altura e seu IMC é de 25.95955446545646354
*/

const nome = "Arthur Mehl";
const idade = 20;
let peso = 65;
let altura = 1.92;
let imc = peso / (altura * altura);
let anoNascimento = 2022 - idade; 

//Frases:
console.log(`${nome} tem ${idade} anos, pesa ${peso} kg`);

console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);

console.log(`${nome}, nasceu em ${anoNascimento}`);