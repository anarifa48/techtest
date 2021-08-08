const supertest = require('supertest');

const api = supertest('https://reqres.in');

const createUser = (payload) => api.post(`/api/users`).send()
.set('Content-Type','application/json')
.set('Accept','application/json')
.send(payload)

module.exports = {
    createUser,
};
