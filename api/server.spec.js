const request = require('supertest');

const server = require('./server');


describe('POST /api/auth/register', () => {
    it('should return 200 http status code', () => {
        request(server)
        .post('/register')
        .then(response => {
            expect(response.status).toBe(200);
            
        });
    });
    expect(response.body).toBe({ api: 'up'});
});

describe('POST /api/auth/login', () => {
    it('should return 200 http status code', () => {
        request(server)
        .post('/login')
        .auth('username', 'password')
        .then(response => {
            expect(response.status).toBe(200);
            
        });
    });
});


describe('GET /api/loggedin/users', () => {
    it('should return 200 http status code', () => {
        request(server)
        .get('/users')
        .auth('username', 'password')
        .then(response => {
            expect(response.status).toBe(200);
            
        });
    });
    
});
