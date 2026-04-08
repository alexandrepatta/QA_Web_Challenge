import LoginPage from '../../pages/LoginPage'
import { getEnv } from '../../support/env'

describe('Login Tests', { tags: ['@regression', '@auth'] }, () => {

  it('should login successfully with valid credentials', () => {
    LoginPage.login(
     getEnv('username'),
     getEnv('password')
    )
    cy.url().should('include', '/profile')
  })

  it('should validate login API response',() => {

    cy.intercept('POST', '**/Account/v1/Login').as('loginRequest')

    LoginPage.login(
     getEnv('username'),
     getEnv('password')
    )

    cy.wait('@loginRequest').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
    })
  })
  
  it('should display an error message with invalid credentials', () => {
    LoginPage.login('invalidUser', 'invalidPassword')

    LoginPage.getErrorMessage()
      .should('contain', 'Invalid username or password')
  })

})
