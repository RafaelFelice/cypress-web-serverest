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