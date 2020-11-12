# ExercicioPetShop

Tema: Sistema PetShop
Tecnologia: Javascript
O desafio consiste na criação de um sistema para atender o gerenciamento de um petshp. Serão desenvolvidas funções como cadastro de pets, vacinação e castração.

O sistema deverá ser elaborado utilizando a linguagem Javascript, se atentando aos padrões de desenvolvimento como, por exemplo, a utilização do camelCase. Todos os prints ou exibições deverão acontecer diretamente no console.

Forma de entrega
Você deverá fazer um fork desse projeto, e fazer o desenvolvimento dentro do mesmo. Após isso, deverá enviar para o professor o link do SEU repositório através do Slack.

Para mais informações de como fazer um fork: http://gabsferreira.com/forkando-e-clonando-um-repositorio-no-github

Além disso, esse exercício deverá ser feito de forma individual poderemos avaliar sua evolução no curso, e proporcionar a você uma auto-avaliação.

O que deverá ser desenvolvido?
Dentro do arquivo petshop.js desse repositório, há uma lista de pets. Em nosso sistema, um pet é descrito com as seguintes informações:

- Nome - String
- Raca - String
- Peso - Number
- Idade - Number
- Cor - String
- Porte - String
- Sexo - String
- Dono - String
- Alergias - Array
- Castrado - Boolean
- Vacinas - Array de objetos

Diante disso, deverá ser desenvolvido as seguintes funções:
 ```javascript
  function vacinarPet(pet:object, vacina:object) {
  /* ela vai adicionar uma nova vacina (cheque como é a estrutura do atributo vacinas)
   cada vacina deve ser um objeto que contem atributos nome e data
   não vá apagar as vacinas anteriores! */
}

function castrarPet(pet:object) {
  /* Se o pet não for castrado castre o pet
   se o pet for castrado mande uma mensagem de
   "esse pet já é castrado, não posso castra-lo de novo" */
}

function adicionarPet(pet:object) {
  /* Essa função irá receber um objeto contendo as informações do pet a ser criado.
 Seguindo o padrão dos pets já presentes no arquivo petshop.js e especificados anteriormente.
 */
}

function darBanhoPet(pet:object) {
  // retorna a mensagem "o NomeDoPet tomou banho hoje"
}

function listarPets() {
 /*Com essa função o usuário poderá ver todos os pets cadastrados atualmente no sistema. 
 Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
}
   ```

