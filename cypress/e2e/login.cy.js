/// <reference types="cypress" />

describe('Successfully login', () => {
    before(()=>{
        cy.visit('https://front.serverest.dev/login')
      })
    it('Successfully login', () => {
      cy.get('#email').type('fulano@qa.com')
      cy.get('#password').type('teste')
      cy.get('[data-testid="entrar"]').click()
      cy.get('h1').should('contain', "Bem Vindo  ")
    })
})

describe('Unsuccessfully login', () => {
    before(()=>{
        cy.visit('https://front.serverest.dev/login')
      })
    it('Login with an invalid email', () => {
      cy.get('#email').type('invalid@qa.com')
      cy.get('#password').type('teste')
      cy.get('[data-testid="entrar"]').click()
      cy.get('.alert > :nth-child(2)').should('have.text', "Email e/ou senha inválidos")
    })
})