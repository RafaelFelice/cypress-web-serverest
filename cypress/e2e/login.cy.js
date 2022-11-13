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
    beforeEach(()=>{
        cy.visit('https://front.serverest.dev/login')
      })
    it('Login with an invalid email', () => {
      cy.get('#email').type('invalid@qa.com')
      cy.get('#password').type('teste')
      cy.get('[data-testid="entrar"]').click()
      cy.get('.alert > :nth-child(2)').should('have.text', "Email e/ou senha inválidos")
    })

    it('Login with an invalid password', () => {
      cy.get('#email').type('fulano@qa.com')
      cy.get('#password').type('invalid')
      cy.get('[data-testid="entrar"]').click()
      cy.get('.alert > :nth-child(2)').should('have.text', "Email e/ou senha inválidos")
    })

    it('Login with invalid email and password', () => {
      cy.get('#email').type('invalid@qa.com')
      cy.get('#password').type('invalid')
      cy.get('[data-testid="entrar"]').click()
      cy.get('.alert > :nth-child(2)').should('have.text', "Email e/ou senha inválidos")
    })

    it('Login with just the blank email', () => {
      cy.get('#email').type('{BACKSPACE}')
      cy.get('#password').type('teste')
      cy.get('[data-testid="entrar"]').click()
      cy.get('.alert > :nth-child(2)').should('have.text', "Email é obrigatório")
    })

    it('Login with just the blank password', () => {
      cy.get('#email').type('fulano@qa.com')
      cy.get('#password').type('{BACKSPACE}')
      cy.get('[data-testid="entrar"]').click()
      cy.get('.alert > :nth-child(2)').should('have.text', "Password é obrigatório")
    })

    it('Login with the blank email and password', () => {
      cy.get('#email').type('{BACKSPACE}')
      cy.get('#password').type('{BACKSPACE}')
      cy.get('[data-testid="entrar"]').click()
      cy.get(':nth-child(3) > :nth-child(2)').should('have.text', "Email é obrigatório")
      cy.get(':nth-child(4) > :nth-child(2)').should('have.text', "Password é obrigatório")
    })

})
