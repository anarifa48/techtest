Feature('Get List Users');
const assert = require ('chai').expect;

const page = require ('./api/page/get-listusers-page.js');

Scenario('Get List Users', async () => {
    const response = await page.getListUsers();
    assert(response.status).to.equal(200);
    console.log(response.body);
});
