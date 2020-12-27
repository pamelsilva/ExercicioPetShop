//lição 5 - listarPets

// recebe um array de pets e listas todos os pets do sistema (com nome, raca e dono)

const pets = require('./Fonteindex')

function listaPets(pets) {
  
  let lista = []
  pets.forEach( (pet) => {    
    lista.push([pet.nome, pet.raca, pet.dono])
       })
    return lista
  }

console.log(listaPets(pets))
