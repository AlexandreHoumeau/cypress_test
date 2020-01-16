// const server = require('../../index');
// const mongoose = require('mongoose');
// const todoItems = require('../../api/model/todoItem');
// const TodoItem = mongoose.model('TodoItem', todoItems);
// console.log(TodoItem)
describe('Testing API', function() {
    // beforeEach((done) => {
    //     TodoItem.remove({}, () => {
    //       done();
    //     })
    // });
      
    describe('Testing URL to respond 200', function() {
        it('Should return 200 if URL is correct', function() {
            cy.request('http://localhost:3000/todoitems').then((response) => {
                expect(response.status).to.eq(200)
            })
        })    
    })
    
    describe('Testing wrong URL to respond 500', function() {
        it('Should return 500 when body request is wrong', function() {
            cy.request({url: 'http://localhost:3000/todoitemskjlkjlkj', failOnStatusCode: false}).then((response) => {
                expect(response.status).to.eq(404)
            })
        })
    })

    describe('Testing POST to respond 200', function() {
        it('Should return 200 when using POST', function() {
            cy.request('POST','http://localhost:3000/todoitems', {
                'name': 'ma qsdljklqd',
                'status': 'done'
            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })    
    })

    describe('Testing DELETE to respond 200', function() {
        it('Should return 200 when using DELETE', function() {
            cy.request('DELETE','http://localhost:3000/todoitems/5e1ef1f1a3c34511928bf9d8').then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })

    describe('Testing PUT to respond 200', function() {
        it('Should return 200 when using PUT', function() {
            cy.request('PUT', 'http://localhost:3000/todoitems/5e1ef1e2a3c34511928bf9d7', {
                "name": "tâche update", 
                "status" : "not in progress"
            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })
    
    
    describe('Testing GET to respond 500', function() {
        it('Should return 500 when body request is wrong', function() {
            cy.request({url: 'http://localhost:3000/todoitems/:qlksdj', failOnStatusCode: false}).then((response) => {
                expect(response.status).to.eq(500)
            })
        })
    })
    
    
    // it('Should return JSON with GET', function() {
    //     cy.request('GET','http://localhost:3000/todoitems').then((response) => {
    //         expect(response.body).to.eq()
    //     })
    // })
})