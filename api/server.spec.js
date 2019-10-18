const server = require('./server');

const request = require('supertest');



describe('/login', () => {
    
    it('should return a JSON object', async () => {
        const response = await request(server).post('/api/auth/login');

        expect(response.type).toEqual('application/json');
    })

    it('should return status 200', async () => {
        const expectedStatusCode = 200;
        const response = await request(server).post('/api/auth/login')
        .send({
            "username": "Franky",
            "password": "pass"
        })
        expect(response.status).toEqual(expectedStatusCode);
    })
})



describe('/register', () => {
    
    it('should return a JSON object', async () => {
        const response = await request(server).post('/api/auth/login');

        expect(response.type).toEqual('application/json');
    })

    it('should return status 200', async () => {
        const expectedStatusCode = 200;
        const response = await request(server).post('/api/auth/login')
        .send({
            "username": "Franky",
            "password": "pass"
        })
        expect(response.status).toEqual(expectedStatusCode);
    })
})