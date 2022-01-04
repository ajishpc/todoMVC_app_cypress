/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";
describe('todo actions',function(){
    const todoPage = new TodoPage()
    
    beforeEach(function(){
        todoPage.navigate()
        todoPage.addTodo('Clean room')
    })

    it('should add a new todo to the list', function(){

        cy.get('label').should('have.text', 'Clean room')
        cy.get('.toggle').should('not.be.checked')
    })
    
    it('should mark a todo as completed', function(){
        cy.get('.toggle').click()
        cy.get('label').should('have.css','text-decoration-line','line-through')
    })
    
    it('should clear completed todos', function(){
        cy.get('.toggle').click()
        cy.get('label').should('have.css','text-decoration-line','line-through')
        
        cy.get('.clear-completed').click()
        cy.get('.todo-list').should('not.have.descendants','li')
    })
})
