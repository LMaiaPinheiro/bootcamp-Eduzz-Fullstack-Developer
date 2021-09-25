// Async / Await

const asyncTime = ()=> new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('12345');
  },1000)
})

const simpleFunc = async () => {
  const data = await asyncTime();
  console.log(data)
  const dataJSON = await fetch('/data.json').then(responseStream =>responseStream.json())
  return dataJSON
}


simpleFunc().then( data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})










/* Feach


fetch('/data.json')
.then(responseStream =>responseStream.json())
.then(data => {
  console.log(data)
}).catch(err =>{
console.log(err)
})

*/