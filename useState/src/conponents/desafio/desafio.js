const users = [
  { id: 1, name: "Alice", age: 25, isAdmin: false, skills: ["JavaScript", "React"] },
  { id: 2, name: "Bruno", age: 32, isAdmin: true, skills: ["Node.js", "TypeScript"] },
  { id: 3, name: "Carla", age: 28, isAdmin: false, skills: ["Python", "Django"] },
  { id: 4, name: "Diego", age: 26, isAdmin: false, skills: ["HTML", "CSS", "JavaScript"] },
  { id: 5, name: "Elena", age: 35, isAdmin: true, skills: ["Java", "Spring"] },
];

//Pra resolver isso ai você vai usar métodos que vimos ontem: includes, some, every, find, filter, map

// Verifique se o array users[0].skills contém "React"
const encontrar = users[0].skills.includes("React");
//console.log(encontrar)


//Verifique se algum usuário tem menos de 23 anos true or false
const idade = users.some((element) => element.age < 23);
//console.log(idade)


//Verifique se existe algum administrador que saiba "TypeScript"
const verificar = users.some((user => user.isAdmin && user.skills.includes("TypeScript"))) // tive que apelar
//console.log(verificar) //includes só funciona dentro de array ou string


//Verifique se todos os usuários têm mais de 18 anos
const maiorDeIdade = users.every((user) => (user.age > 18))
//console.log(maiorDeIdade)


//Verifique se todos os usuários possuem pelo menos uma skill
const verificarSkill = users.every((user) => (user.skills.length > 0))
//console.log(verificarSkill)


//Verifique se todos os admins tem mais de 30 anos
const veio = users.every((user) => (user.age > 30))
//console.log(veio)

//Encontre o primeiro usuário que tenha "JavaScript" entre suas skills
const javero = users.find((user) => user.skills.includes("JavaScript"))
//console.log(javero)

//Filtre todos os usuários que não são administradores
const admins = users.filter((user) => !user.isAdmin)
//console.log(admins)

//Filtre todos os usuários que têm mais de 25 anos e sabem "JavaScript"
const javinha = users.filter((user) => (user.age > 25 && (user.skills.includes("JavaScript"))))
//console.log(javinha)

//Mapeie os usuários trazendo apenas os nomes dos usuários
const nomeDosCara = users.map((user) => user.name)
console.log(nomeDosCara)