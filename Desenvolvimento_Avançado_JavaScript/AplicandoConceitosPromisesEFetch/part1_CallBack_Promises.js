// Promises

const doSomethingPromise = ()=> new Promise((resolve, reject) => {
  setTimeout(function() {
    // did something
    resolve('First data')
  },1000)
})

const doOtherThingPromise = ()=> new Promise((resolve, reject) => {
  setTimeout(function() {
    // did something
    resolve('Second data')
  },1000)
  
})

//console.log(doSomethingPromise)
/* Console acima retorna a promise com status pending, devido a promise so ser concluída após alguns segundos,
 referente ao setTimeout()
*/
doSomethingPromise()
  .then(data => {
    console.log(data.split(''))
    return doOtherThingPromise()
  })
  .then(data2 => console.log(data2.split('')))
  .catch(err => console.log('Ops', err))


// o .then funciona de maneira que aguarda a promises ser concluída e caso queira tratar um erro basta colocar .catch para isso.

//Uma promise pode ter 3 status
// Pending: quando a promises ainda está em execução.
// Fulfilled: quando a promises é finalizada
// Rejected: quando acontece algum erro na promise

// É possível executar as promises em paralelo usando Promise.all([promise1,promise2])






/*#### CallBacks
function doSomething(callback) {
  setTimeout(function() {
    // did something
    callback('First data')
  },1000)
}

function doOtherThings(callback) {
  setTimeout(function() {
    // did other thing
    callback('Second data')
  },1000)
}

function doAll(){
  try {
    doSomething(function(data) {
      let processedData = data.split('')
  
      doOtherThings(function(data2){
        let processedData2 = data2.split('')
        setTimeout(function() {
          console.log(processedData,processedData2)
        },1000)
      })
    })
  }catch(err){

  }
  }
  

doAll()
*/