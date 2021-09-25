const assert = require('assert');
const Math= require('../src/math.js')

// OBS: para testes com Mocha, o máximo de espera é de 2000ms (2s)
let value = 0
describe('Math class', function () {
  // hooks: são formas de executar código sem repetição 
  beforeEach(function () {
   value = 0
  })

  it('Sum two numbers', function (done) {
    // done utilizado para funções assíncronas, serve para dizer quando esperar.
    const math = new Math()
    value = 5
    this.timeout(3000)
    // Com o this.timeout(), é possível alterar o tempo de espera máximo padrão do teste.

    math.sum(value, 5, (value)=>{
      assert.equal(value,10)
      done()
    })
  })

// É possível pular um teste usando o it.skip e para centralizar apenas um teste com o .only

  it('Multiply two numbers', function () {
    const math = new Math()

    assert.equal(math.multiply(value,5),0)
  })
})