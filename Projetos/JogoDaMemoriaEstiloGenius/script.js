let order = []
let clickedOrder = []
let score = 0
let inputScore = document.getElementById('score')
/* 
0 - Verde
1 - Vermelho
2 - amarelo
3 - azul
*/

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

// Cria ordem aleatória de números
let shuffleOrder= () =>{
  let colorOrder = Math.floor(Math.random() * 4)
  order[order.length] = colorOrder
  clickedOrder = []

  for (let i in order) {
    let elementColor = createColorElement(order[i])
    lightColor(elementColor,Number(i)+1)
  }
}

// Função que retorna a cor
function createColorElement(color){
 if(color == 0){
    return green
  }else if(color == 1){
    return red
  }else if(color == 2){
    return yellow
  }else if(color == 3){
    return blue
  }
  
 }

// Acende a proxima cor
function lightColor(element, number){
  number = number * 500

  setTimeout(()=> {
    element.classList.add('selected')
  }, number)

  setTimeout(()=> {
    element.classList.remove('selected')
  }, number + 250)

}

// Verifica se os botões clicados estão na ordem mostrada
function checkOrder(){
  for (let i in clickedOrder){
    if(clickedOrder[i] != order[i]){
      gameOver()
      break
    }
  }
  if(clickedOrder.length == order.length){
    alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível `)
    inputScore.innerHTML = `Pontuação: ${score}`
    nextLevel()
  }
}

//função para clique do usuário
function click(color){
  clickedOrder[clickedOrder.length] = color
  createColorElement(color).classList.add("selected")

  setTimeout(()=> {
    createColorElement(color).classList.remove("selected")
    checkOrder()
  },250)

  
}

//função para iniciar proximo nível
function nextLevel(){
  score++;
  shuffleOrder()
}

//função para finalizar o jogo caso derrota.
function gameOver(){
  alert(`Pontuação: ${score}\n
  Fim do jogo\n
  Click em OK para iniciar novo jogo`)
  order = []
  clickedOrder = []
  playGame()
}

function playGame(){
  alert('Bem vindo ao Génesis! Iniciando novo jogo!')
  score = 0
  inputScore.innerHTML = `Pontuação: ${score}`
  nextLevel()
}

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

