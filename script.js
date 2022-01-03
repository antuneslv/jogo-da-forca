let word = ''
let underline = []
let arrayStart = []
const a = ['a', 'á', 'â', 'à', 'ã']
const e = ['e', 'é', 'ê']
const i = ['i', 'í']
const o = ['o', 'ó', 'ô', 'õ']
const u = ['u', 'ú', 'ü']
const c = ['c', 'ç']

// Representação da Forca na tela
const gameOver = `<div>&nbsp; &nbsp;_______</div> 
<div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O</div> 
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /|\\</div>
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; / \\</div>
<div>&nbsp; |</div>
<div>----</div>`

const oneLife = `<div>&nbsp; &nbsp;_______</div> 
<div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O</div> 
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /|\\</div>
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /</div>
<div>&nbsp; |</div>
<div>----</div>`

const twoLives = `<div>&nbsp; &nbsp;_______</div> 
<div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O</div> 
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /|\\</div>
<div>&nbsp; |</div>
<div>&nbsp; |</div>
<div>----</div>`

const threeLives = `<div>&nbsp; &nbsp;_______</div> 
<div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O</div> 
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /|</div>
<div>&nbsp; |</div>
<div>&nbsp; |</div>
<div>----</div>`

const fourLives = `<div>&nbsp; &nbsp;_______</div> 
<div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O</div> 
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|</div>
<div>&nbsp; |</div>
<div>&nbsp; |</div>
<div>----</div>`

const fiveLives = `<div>&nbsp; &nbsp;_______</div> 
<div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O</div> 
<div>&nbsp; |</div>
<div>&nbsp; |</div>
<div>&nbsp; |</div>
<div>----</div>`

const fullLife = `<div>&nbsp; &nbsp;_______</div> 
<div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
<div>&nbsp; |</div> 
<div>&nbsp; |</div>
<div>&nbsp; |</div>
<div>&nbsp; |</div>
<div>----</div>`

class Start {
  constructor (word, underline) {
    this.word = word
    this.underline = underline
  }

  // métodos das categorias e suas listas de palavras
  animalCategory () {
    const list = ['Abelha', 'Aranha', 'Arara', 'Avestruz', 'Baleia', 'Barata', 'Borboleta', 'Cabra', 'Camaleão', 'Camelo', 'Canguru', 'Cachorro', 'Capivara', 'Caranguejo',
    'Cavalo', 'Coelho', 'Coruja', 'Elefante', 'Escorpião', 'Formiga', 'Gafanhoto', 'Gavião', 'Girafa', 'Golfinho', 'Grilo', 'Hipopótamo', 'Iguana', 'Jacaré', 'Javali',
    'Joaninha', 'Jumento', 'Leopardo', 'Lhama', 'Macaco', 'Minhoca', 'Morcego', 'Papagaio', 'Peixe', 'Periquito', 'Pinguim', 'Pombo', 'Porco', 'Raposa', 'Rinoceronte',
    'Tamanduá', 'Tartaruga', 'Tigre', 'Tubarão', 'Tucano', 'Zebra']
    const category = 'Animais'
  
    this.start (list, category)
   
  }
  
  nameCategory () {
    const list = ['Adalberto', 'Adelaide', 'Adriana', 'Aécio', 'Afonso', 'Airton', 'Albert', 'Alessandra', 'Alfredo', 'Alice', 'Amanda', 'Antônio', 'Aparecida', 'Arthur',
    'Bárbara', 'Beatriz', 'Benjamin', 'Bernardo', 'Bianca', 'Breno', 'Camila', 'Carolina', 'Catharine', 'Daniel', 'Danilo', 'Eduardo', 'Eliana', 'Felipe', 'Fernanda',
    'Francisco', 'Gabriel', 'Giovanna', 'Guilherme', 'Gustavo', 'Helena', 'Henrique', 'Igor', 'Isabella', 'Joana', 'João', 'Joaquim', 'Júlia', 'Juliana', 'Kaique', 'Larissa',
    'Leandro', 'Leonardo', 'Luana', 'Lucas', 'Luiz', 'Manuela', 'Maria', 'Mariana', 'Marina', 'Matheus', 'Miguel', 'Murilo', 'Natália', 'Nicolas', 'Otávio', 'Pablo', 'Pedro',
    'Pietro', 'Rafael', 'Rebeca', 'Ricardo', 'Rodrigo', 'Robson', 'Ruan', 'Samuel', 'Sarah', 'Sophia', 'Thiago', 'Vicente', 'Vinícius', 'Vitória', 'Vitor', 'Yasmin']
    const category = 'Nomes'
    
    this.start (list, category)
  }
  
  flowerCategory () {
    const list = ['Amarílis', 'Azaleia', 'Antúrio', 'Begônia', 'Camélia', 'Cravina', 'Cinerária', 'Crisântemo', 'Ciclame', 'Cravo', 'Gérbera', 'Gerânio', 'Hortênsia',
    'Gardênia', 'Íris', 'Girassol', 'Hibisco', 'Kalanchoê', 'Lírio', 'Lisianto', 'Magnólia', 'Jacinto', 'Moréia', 'Lavanda', 'Lótus', 'Margarida', 'Narciso', 'Peônia',
    'Prímula', 'Perpétua', 'Rosa', 'Torênia', 'Verbena', 'Violeta', 'Tagete', 'Tulipa', 'Orquídea', 'Papoula', 'Nemésia', 'Miosótis', 'Madressilva', 'Dália']
    const category = 'Flores'
  
    this.start (list, category)
  }

  objectCategory () {
    const list = ['Abajur', 'Alicate', 'Almofada', 'Aspirador', 'Bacia', 'Balança', 'Balde', 'Banco', 'Bengala', 'Bicicleta', 'Binóculo', 'Boneca', 'Borracha', 'Brinco',
    'Bússola', 'Cabide', 'Cadeado', 'Cadeira', 'Caderno', 'Calculadora', 'Caneca', 'Caneta', 'Capacete', 'Celular', 'Chinelo', 'Colchão', 'Computador', 'Despertador', 'Drone',
    'Envelope', 'Escada', 'Esfregão', 'Espelho', 'Estátua', 'Estojo', 'Filmadora', 'Fogão', 'Frasco', 'Freezer', 'Frigideira', 'Furadeira', 'Gaiola', 'Garrafa', 'Gaveta',
    'Guitarra', 'Helicóptero', 'Hidrante', 'Holofote', 'Impressora', 'Interfone', 'Interruptor', 'Isqueiro', 'Jaleco', 'Janela', 'Jornal', 'Lâmpada', 'Lancheira', 'Lápis',
    'Lapiseira', 'Lençol', 'Liquidificador', 'Livro', 'Lixeira', 'Luminária', 'Maçaneta', 'Maçarico', 'Mamadeira', 'Mangueira', 'Máquina', 'Martelo', 'Máscara', 'Microscópio',
    'Mochila', 'Monitor', 'Navio', 'Notebook', 'Óculos', 'Panela', 'Paraquedas', 'Peruca', 'Pincel', 'Prateleira', 'Prato', 'Pulseira', 'Rádio', 'Régua', 'Relógio', 'Rodapé',
    'Rolha', 'Sabão', 'Sabonete', 'Sacola', 'Saleiro', 'Sapateira', 'Serrote', 'Tabuleiro', 'Tampa', 'Tapete', 'telefone', 'Televisão', 'Tesoura', 'Tigela', 'Válvula',
    'Vassoura', 'Vestido', 'Vitrola']
    const category = 'Objetos'
  
    this.start (list, category)
  }
  
  start (list, category) {
    // gera uma palavra aleatória dentro da categoria escolhida
    const random = Math.floor(Math.random() * list.length)
    const word = list[random]
    
    document.getElementById('categories').innerHTML = `<p id="category">Categoria: <b>${category}</b></p>`
  
    const lengthOfLetter = word.length
    const underline = '_ '.repeat(lengthOfLetter).split(' ')
    underline.splice(-1, 1)
    // cria lista de botões com as letras
    document.getElementById('letter').innerHTML = `<p id="underline">${underline.join(' ')}</p>
    <p>Escolha uma letra:</p>`
    document.getElementById('buttons').innerHTML = `<button id="a" onclick="chosenL ('a')">A</button>
      <button id="b" onclick="chosenL ('b')">B</button>
      <button id="c" onclick="chosenL ('c')">C</button>
      <button id="d" onclick="chosenL ('d')">D</button>
      <button id="e" onclick="chosenL ('e')">E</button>
      <button id="f" onclick="chosenL ('f')">F</button>
      <button id="g" onclick="chosenL ('g')">G</button>
      <button id="h" onclick="chosenL ('h')">H</button>
      <button id="i" onclick="chosenL ('i')">I</button>
      <button id="j" onclick="chosenL ('j')">J</button>
      <button id="k" onclick="chosenL ('k')">K</button>
      <button id="l" onclick="chosenL ('l')">L</button>
      <button id="m" onclick="chosenL ('m')">M</button>
      <button id="n" onclick="chosenL ('n')">N</button>
      <button id="o" onclick="chosenL ('o')">O</button>
      <button id="p" onclick="chosenL ('p')">P</button>
      <button id="q" onclick="chosenL ('q')">Q</button>
      <button id="r" onclick="chosenL ('r')">R</button>
      <button id="s" onclick="chosenL ('s')">S</button>
      <button id="t" onclick="chosenL ('t')">T</button>
      <button id="u" onclick="chosenL ('u')">U</button>
      <button id="v" onclick="chosenL ('v')">V</button>
      <button id="w" onclick="chosenL ('w')">W</button>
      <button id="x" onclick="chosenL ('x')">X</button>
      <button id="y" onclick="chosenL ('y')">Y</button>
      <button id="z" onclick="chosenL ('z')">Z</button>`

    document.getElementById('gallows').innerHTML = fullLife

    const data = new Start (word, underline)
    arrayStart.push(data)
  }
}

// função para validar os caracteres especiais
function chosenL (id) {
  switch (id) {
    case 'a':
      chosenLetter = a
      break;
    case 'e':
      chosenLetter = e
      break;
    case 'i':
      chosenLetter = i
      break;
    case 'o':
      chosenLetter = o
      break;
    case 'u':
      chosenLetter = u
      break;
    case 'c':
      chosenLetter = c
      break;
    default:
      chosenLetter = `${id}`
      break;
  }

  document.getElementById(`${id}`).setAttribute('disabled', 'disabled')
  answer (chosenLetter)
}

// função para chegar se a letra escolhida está na palavra
function answer (chosenLetter) {
  word = arrayStart[0].word
  underline = arrayStart[0].underline
  
  if (chosenLetter == a || chosenLetter == e || chosenLetter == i  || chosenLetter == o || chosenLetter == u || chosenLetter == c){
    for (let type of chosenLetter){
      for (let l in word) {
        if (type == word[l] || type.toUpperCase() == word[l]) {
          underline.splice(l, 1, word[l])
        }
        document.getElementById('letter').innerHTML = `<p id="underline">${underline.join(' ')}</p>
        <p>Escolha uma letra:</p>`
      }
    }
  } else {
    for (let l in word) {
      if (chosenLetter == word[l] || chosenLetter.toUpperCase() == word[l]) {
        underline.splice(l, 1, word[l])
      }
  }
    document.getElementById('letter').innerHTML = `<p id="underline">${underline.join(' ')}</p>
    <p>Escolha uma letra:</p>`
  }

  // função para tirar uma "vida" do jogador caso ele erre a letra
  function lessLife() {
    if (!word.includes(chosenLetter)) {
      if (document.getElementById('gallows').innerHTML == fullLife) {
        document.getElementById('gallows').innerHTML = fiveLives
      } else if (document.getElementById('gallows').innerHTML == fiveLives) {
        document.getElementById('gallows').innerHTML = fourLives
      } else if (document.getElementById('gallows').innerHTML == fourLives) {
        document.getElementById('gallows').innerHTML = threeLives
      } else if (document.getElementById('gallows').innerHTML == threeLives) {
        document.getElementById('gallows').innerHTML = twoLives
      } else if (document.getElementById('gallows').innerHTML == twoLives) {
        document.getElementById('gallows').innerHTML = oneLife
      } else if (document.getElementById('gallows').innerHTML == oneLife) {
        document.getElementById('gallows').innerHTML = gameOver
      }
    }
  }

  let count = 0

  if (chosenLetter == a || chosenLetter == e || chosenLetter == i || chosenLetter == o || chosenLetter == u || chosenLetter == c){
    while (true) {
      for (let types of chosenLetter){
        if (word.includes(types.toUpperCase())){
          count = 1
          break
        } else if (word.includes(types)){
          count = 1
          break
        }
      }
      break
    }
    if (count == 0) {
      lessLife ()
    }
  } else if (!word.includes(chosenLetter.toUpperCase())){
      lessLife ()
  }

  if (!underline.includes('_')) {
    document.getElementById('buttons').innerHTML = ''
    document.getElementById('letter').innerHTML = `<p>A palavra era <b>${word}</b>!</p>`
    document.getElementById('result').innerHTML = `<p style="color:green">Parabéns, você venceu!!!</p>
    <div><button onclick="document.location.reload(true)">Novo Jogo</button></div>`
  }

  if (document.getElementById('gallows').innerHTML == gameOver){
    document.getElementById('buttons').innerHTML = ''
    document.getElementById('letter').innerHTML = `<p>A palavra era <b>${word}</b>!</p>`
    document.getElementById('result').innerHTML = `<p style="color:red">Você perdeu. Game Over!</p>
    <div><button onclick="document.location.reload(true)">Novo Jogo</button></div>`
  }
}
