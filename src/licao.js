const alunos = [
    {nome: 'flavia', nota: 6},
    {nome: 'olavo', nota: 3},
    {nome: 'murilo', nota: 9},
    {nome: 'anderson', nota: 10},
    {nome: 'ernesto', nota: 1}
]

const aprovados = alunos.filter((aluno) => {
    return aluno.nota >= 6
})

console.log(aprovados)

