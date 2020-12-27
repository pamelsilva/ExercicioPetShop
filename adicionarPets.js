//lição 3 - adicionarPet

// ou construir o objeto na função
// você pode tanto passar um objeto inteiro do pet
// ele vai receber um objeto pet para ser adicionado
// seguindo a estrutura dos pets dentro do array pets
// não vá apagar os pets já existentes!

const pets = require('./Fonteindex')

// function adicionarPet(nome, raca, peso, idade, cor, etc)
function adicionarPet(pet) {
      
      pets.push(pet);
    }
      
      adicionarPet(
      {
        nome: "Amora",
        raca: "Golden",
        peso: 29,
        idade: 9,
        cor: "Dourado",
        porte: "Grande",
        sexo: "f",
        dono: "Pam",
        alergias: ["AAS", "AntiInflamatório"],
        castrado: true,
        vacinas: [{ nome: "BC500", data: "10/12/2015" }],
      }
      )
      
      console.log(pets)