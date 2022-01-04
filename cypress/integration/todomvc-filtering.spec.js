/// <reference types="cypress" />

describe('todo actions',function(){

    beforeEach(function(){
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo',{timeout: 3000}).type("Clean room {Enter}")
        cy.get('.new-todo',{timeout: 3000}).type("Learn Javascript {Enter}")
        cy.get('.new-todo',{timeout: 3000}).type("Use Cypress {Enter}")
        cy.get('.todo-list li:nth-child(2) .toggle').click()
    })

    it('should filter "Active" todos', function(){
        cy.contains('Active').click()
        cy.get('.todo-list li').should('have.length',2)
    })

    it('should filter "Completed" todos', function(){
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length',1)
    })

    it('should filter "All" todos', function(){
        cy.contains('All').click()
        cy.get('.todo-list li').should('have.length',3)
    })
})