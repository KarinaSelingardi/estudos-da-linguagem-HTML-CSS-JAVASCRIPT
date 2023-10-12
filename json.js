const prompt = require("prompt-sync")();

function obter_aluno() {
  // pergunta ao usuário suas notas
  const nome = prompt("Nome Aluno?");
  const notas = [];
  notas.push(parseFloat(prompt("Nota 1: ")));
  notas.push(parseFloat(prompt("Nota 2: ")));
  notas.push(parseFloat(prompt("Nota 3: ")));
  return {
    nome: nome,
    notas: notas,
  };
}

function obter_media(aluno) {
  let soma = 0;
  for (var nota of aluno.notas) {
    soma += nota;
  }
  return soma / aluno.notas.length;
}

let alunos = [
  { nome: "João", notas: [7, 6, 8] },
  { nome: "Maria", notas: [5, 3, 6] },
  { nome: "Jose", notas: [8, 2, 5] },
];

let novoAluno = { nome: "Clara", notas: [5, 2, 8] };
alunos.push(novoAluno);

let media = obter_media(alunos[0]);
console.log(`Média Aluno 1: ${media}`);

if (media < 4) {
  console.log("Reprovado!");
} else if (media < 6) {
  console.log("De Sub!");
} else {
  console.log("Aprovado!");
}


