// const request = require('supertest')
// const server = require('./server.js')

describe('server.js', () => {
    it('should set test environment', () => {
        expect(process.env.DB_ENV.toBe('testing'))
    })
})