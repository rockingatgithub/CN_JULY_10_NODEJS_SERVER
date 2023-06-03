const assert = require('assert')
const chai = require('chai')
const chaihttp = require('chai-http')

chai.use(chaihttp)

// testing the array module
// describe('Array', function () {

//     // First test case...
//     describe('indexOf()', function () {

//         // first condition
//         it('it should be proper response', function () {

//             assert.equal([1, 2, 3, 5].includes(5), false)

//         })

//     })

// })


describe('Student API', function () {

    // Testing student creation API
    describe('signup', function () {

        it('The API should return valid JSON', function () {

            chai.request('http://localhost:8000')
            .post('/student')
            .send({ name: 'Mocha', password: '12345', email: 'abc6@test.com' })
            .end(function(err, res) {

                // chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200)
                chai.expect(res.body.data).to.haveOwnProperty('_id')

            })

        })

    })

    describe('signin with JWT', function () {

        it('The API should return valid JSON', function () {

            chai.request('http://localhost:8000')
            .post('/auth/jwt')
            .send({  email: 'abc5@test.com' })
            .end(function(err, res) {

                // chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200)
                chai.expect(res.body.user).to.haveOwnProperty('_id')

            })

        })

    })

})