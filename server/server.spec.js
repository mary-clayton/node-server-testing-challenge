const request = require('supertest')
const server = require('./server.js')

describe('server.js', () => {
    it('should set test environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })
    describe('Get /projects', () => {
        it('should return 200 OK', async () => {
            const res = await request(server).get('/projects');
            expect(res.status).toBe(200)
        })
        it('should return JSON', async () => {
            const res = await request(server).get('/projects')
            expect(res.type).toBe('application/json')
        })
    }) 
})