//########## Generators##############
// São funções com pausa
/*
// Colocando * na função é possível colocar pausas através da palavra reservada yield.
function* hello(){
  console.log("Hello!")
  yield 1 // colocando valor após o yield atribui esse valor ao atributo value.
  console.log("From")
  const value = yield 2
  //é possível atribuir valores para yield, passando parâmetro no next().
  console.log(value)
}

const it = hello()
console.log(it.next())
console.log(it.next())
console.log(it.next('Outside!'))
*/

/*____________________________________________*/

// Usando Generators para construir iteradores
const obj = {
  values: [1,2,3,4],
  *[Symbol.iterator]() {
    for(let i = 0; i < this.values.length; i++) {
      yield this.values[i]
    }
  }
}

for (let value of obj) {
  console.log(value)
}