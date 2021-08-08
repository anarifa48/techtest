const supertest = require('supertest');

const api = supertest('https://reqres.in');

const getListUsers = () => api.get(`/api/users?page=2`)

module.exports = {
    getListUsers,
};
