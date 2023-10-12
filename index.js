const prompt = require("prompt-sync")();

let notas = [10, 7, 6];

console.log(`Nota 1: ${notas[0]}`);
console.log(`Nota 2: ${notas[1]}`);
console.log(`Nota 3: ${notas[2]}`); // Use crase para inserir texto entre cifrões

notas[notas.length] = 8;
console.log(`Nota 4: ${notas[3]}`);

notas.push(3); // Empurra para o final do array
console.log(`Nota 5: ${notas[4]}`);

notas.unshift(1); // Empurra para o começo do array
console.log(notas);

const notaFinal = notas.pop(); // Remove do array, extrai o elemento
const notaInicial = notas.shift();
console.log(notas);
console.log(`Nota Inicial: ${notaInicial}`);
console.log(`Nota Final: ${notaFinal}`);




