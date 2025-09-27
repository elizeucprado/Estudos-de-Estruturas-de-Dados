const objs = [
    {
        "nome": "Elizeu",
        "idade": 18,
        "esta_trabalhando": true,
        "hobbies": ["Jogar", "Ouvir Música", "Programar"],
        "detalhes_profissao": {
            "profissao": "Desenvolvedor",
            "empresa": "EmpresaXYZ"
        }
    },
    {
        "nome": "Samuel",
        "idade": 19,
        "esta_trabalhando": true,
        "hobbies": ["Jogar", "Programar"],
        "detalhes_profissao": {
            "profissao": "Desenvolvedor",
            "empresa": "EmpresaZ"
        }
    }
]

// JSON

// Converter Objeto para JSON
// Semelhante a um POST

const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// Converter JSON para Objeto
// Semelhante a um GET

const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.detalhes_profissao)
})

