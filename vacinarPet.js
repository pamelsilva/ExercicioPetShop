//lição 1 - vacinarPet

// ela vai adicionar uma nova vacina (cheque como é a estrutura do atributo vacinas)
// cada vacina deve ser um objeto que contem atributos nome e data
// não vá apagar as vacinas anteriores!

const pets = require('./FonteIndex')


function vacinarPet(pet, vacina) {
   

    for (let i = 0; i < pets.length; i++) {
            if (pets[i].nome == pet) {
              pets[i].vacinas.push(vacina);
            }
          }
        }
        vacinarPet("Stark", 
        {
          nome: "Anti-rábica",
          data: "15/12/2021"
        }
        )
        
        console.log(pets[0]);