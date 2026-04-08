class FormPage {

  visit() {
    cy.visit('/automation-practice-form')
  }

  fillForm(data) {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#userEmail').type(data.email)

    cy.contains(data.gender).click()

    cy.get('#userNumber').type(data.phone)
  }

  submit() {
    cy.get('#submit').click()
  }

  getSuccessModal() {
    return cy.get('.modal-content')
  }
}

export default new FormPage()
