/// <reference types="cypress" />

describe('Successfully login', () => {
    before(()=>{
        cy.visit('https://front.serverest.dev/login')
      })
    it('Successfully login', function() {
      cy.fixture('loginData').as('login').then(() =>{
        cy.get('#email').type(this.login.email_default)
        cy.get('#password').type(this.login.password_default)
      })
      cy.get('[data-testid="entrar"]').click()
      cy.get('h1').should('contain', "Bem Vindo  ")
    })
})

describe('Unsuccessfully login', () => {
    beforeEach(()=>{
        cy.visit('https://front.serverest.dev/login')
      })
    it('Login with an invalid email',function() {
      cy.fixture('loginData').as('login').then(() =>{
        cy.get('#email').type(this.login.email_invalid)
        cy.get('#password').type(this.login.password_default)
      })
      cy.get('[data-testid="entrar"]').click()
      cy.get('.alert > :nth-child(2)').should('have.text', "Email e/ou senha inválidos")
    })

    it('Login with an invalid password', function() {
      cy.fixture('loginData').as('login').then(() =>{
        cy.get('#email').type(this.login.email_default)
        cy.get('#password').type(this.login.password_invalid)
      })
      cy.get('[data-testid="entrar"]').click()
      cy.get('.alert > :nth-child(2)').should('have.text', "Email e/ou senha inválidos")
    })

    it('Login with invalid email and password', function() {
      cy.fixture('loginData').as('login').then(() =>{
        cy.get('#email').type(this.login.email_invalid)
        cy.get('#password').type(this.login.password_invalid)
      })
      cy.get('[data-testid="entrar"]').click()
      cy.get('.alert > :nth-child(2)').should('have.text', "Email e/ou senha inválidos")
    })

    it('Login with just the blank email', function() {
      cy.fixture('loginData').as('login').then(() =>{
        cy.get('#email').type(this.login.email_blank)
        cy.get('#password').type(this.login.password_default)
      })
      cy.get('[data-testid="entrar"]').click()
      cy.get('.alert > :nth-child(2)').should('have.text', "Email é obrigatório")
    })

    it('Login with just the blank password', function() {
      cy.fixture('loginData').as('login').then(() =>{
        cy.get('#email').type(this.login.email_default)
        cy.get('#password').type(this.login.password_blank)
      })
      cy.get('[data-testid="entrar"]').click()
      cy.get('.alert > :nth-child(2)').should('have.text', "Password é obrigatório")
    })

    it('Login with the blank email and password', function() {
      cy.fixture('loginData').as('login').then(() =>{
        cy.get('#email').type(this.login.email_blank)
        cy.get('#password').type(this.login.password_blank)
      })
      cy.get('[data-testid="entrar"]').click()
      cy.get(':nth-child(3) > :nth-child(2)').should('have.text', "Email é obrigatório")
      cy.get(':nth-child(4) > :nth-child(2)').should('have.text', "Password é obrigatório")
    })

})
