Feature('Create User');
const assert = require ('chai').expect;

const pageCreateUser = require ('./api/page/create-user.js');
const dataCreateUser = require ('./api/data/createUser.json');

Scenario('Create User', async () => {
    const response = await pageCreateUser.createUser(dataCreateUser);
    assert(response.status).to.equal(201);
    console.log(response.body);
});
