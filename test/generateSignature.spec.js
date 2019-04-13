const chai = require('chai')
chai.use(require('chai-match'))
const expect = chai.expect

const generateSignature = require('../src/generateSignature')

describe('generateSignature()', () => {
  it('should take a javascript object and return a hex encoded sha256 hash string', () => {
    const obj = {
      foo: 'bar'
    }

    const signature = generateSignature(obj)

    expect(signature).to.match(/[a-f0-9]{64}/i)
  })
})