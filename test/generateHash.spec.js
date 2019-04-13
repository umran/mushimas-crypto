const chai = require('chai')
chai.use(require('chai-match'))
const expect = chai.expect

const generateHash = require('../src/generateHash')

describe('generateHash()', () => {
  it('should take a string and return a hex encoded sha256 hash string', () => {
    const someString = "some string blah blah blah"

    const hash = generateHash(someString)

    expect(hash).to.match(/[a-f0-9]{64}/i)
  })
})