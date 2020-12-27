//lição 4 - darBanhoPet

// retorna a mensagem "o NomeDoPet já tomou banho hoje"

const pets = require('./FonteIndex')

function darBanhoPet(pet) {
 
    for(let i=0; i < pets.length; i++){
      if(pets[i].nome == pet){
      return `${pet} já tomou banho hoje`}
    }
  }
  console.log(darBanhoPet("Stark"))
