const { expect } = require('chai');
const { syncAndSeed, models: { Movie, Actor, Role} } = require('../db');
const app = require('supertest')(require('../app'));

describe('Routes', ()=> {

    beforeEach(() => syncAndSeed());

    describe('GET/', ()=> {
        it('Returns the page which describes the API', async() => {
            const response = await app.get('/');
            expect(response.status).to.equal(200)
        });
    });
});