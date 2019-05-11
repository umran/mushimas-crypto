const chai = require('chai')
chai.use(require('chai-match'))
const expect = chai.expect

const generateIdempotencyKey = require('../src/generateIdempotencyKey')

describe('generateIdempotencyKey()', () => {
  it('should return a random 64 byte hex string', () => {
    const idempotencyKey = generateIdempotencyKey()
    
    expect(idempotencyKey).to.match(/[a-f0-9]{64}/i)
  })
})