"use strict";

var alunos = [{
  nome: 'flavia',
  nota: 6
}, {
  nome: 'olavo',
  nota: 3
}, {
  nome: 'murilo',
  nota: 9
}, {
  nome: 'anderson',
  nota: 10
}, {
  nome: 'ernesto',
  nota: 1
}];
var aprovados = alunos.filter(function (aluno) {
  return aluno.nota >= 6;
});
console.log(aprovados);