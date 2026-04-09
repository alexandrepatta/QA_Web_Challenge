class LoginPage {
  visit() {
    cy.visit('/login')
  }

  fillUsername(username) {
    cy.get('#userName').type(username)
  }

  fillPassword(password) {
    cy.get('#password').type(password)
  }

  submit() {
    cy.get('#login').click()
  }

  getErrorMessage() {
    return cy.get('#name')
  }
}

export default new LoginPage()
