//lição 2 - castrarPet

// se o pet não for castrado castre o pet
// se o pet for castrado mande uma mensagem de  "esse pet já é castrado, não posso castra-lo de novo"

const pets = require('./FonteIndex')

function castrarPet(pet) {
   
   for (let i = 0; i < pets.length; i++) {
             if (pets[i].nome == pet){ 
               if (pets[i].castrado == true) {
                 console.log("Este cachorro já foi castrado, não posso castra-lo de novo")
               }else {
                 pets[i].castrado = true
                 console.log("Cachorro castrado, Obrigada!")
               }
              }
           } 
       }
       castrarPet("Ted")
       console.log(pets)