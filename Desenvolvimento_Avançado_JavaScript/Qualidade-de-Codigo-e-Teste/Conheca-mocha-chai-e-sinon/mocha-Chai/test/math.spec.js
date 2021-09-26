const assert = require('assert');
const Math= require('../src/math.js')
const expect = require('chai').expect
const sinon = require('sinon')

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
      expect(value).to.equal(10)
      done()
    })
  })

// É possível pular um teste usando o it.skip e para centralizar apenas um teste com o .only

  it('Multiply two numbers', function () {
    const math = new Math()
    expect(math.multiply(value,5)).to.equal(0)
   })

  it('Comparable two objects', function () {
    const obj = {
      name:'Lucas'
    }

    const obj2 = {
      name:'Lucas'
    }
    expect(obj).to.deep.equal(obj2)
  })

  it('Calls req with sum and index value', function () {
    const req ={}
    const res = {
      load: sinon.spy(),
    }

    const math = new Math()

    math.printSum(req,res,5,5)

    expect(res.load.calledOnce).to.be.true
    expect(res.load.args[0][0]).to.equal('index')
    expect(res.load.args[0][1]).to.equal(10)
  })
})