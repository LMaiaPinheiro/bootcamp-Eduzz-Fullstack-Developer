const arr = [1,2,3,4]

/*
const it = arr[Symbol.iterator]()

// Utilizando Iterador
// Iterador é uma interface para percorrer uma estrutura de dados.

while(true){
  let {value, done} = it.next()
  if (done){
    break
  }
  console.log(value)
}
*/

//Utilizando forma mais simplificada
/*
for(let value of arr){
  console.log(value)
}
*/


//É possível utilizar spred ou for of em estrutura dados que for iteravel.


//##### Criando um objeto iteravel.
const obj ={
  values: [1,2,3,4],
  [Symbol.iterator](){
    let indice =0
    return {
      next: ()=>{
        indice++
        return {
          value:this.values[indice - 1],
          done: indice >this.values.length
        }
      }
    }
  }
}

for(let value of obj){
  console.log(value)
}

const obj2 = [...obj]

console.log(obj2)
