const request = require('request');
const server = require('../index');

const endpoint = 'http://localhost:3000/login';

describe('login', function () {
    var user = {
        username: "erick123",
        password: "123456"
    }
    it('login 200', function (done) {
        request.post(endpoint, { json: true, body: user }, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });
});