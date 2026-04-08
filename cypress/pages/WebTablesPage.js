class WebTablesPage {

  visit() {
    cy.visit('/webtables')
  }

  clickAdd() {
    cy.get('#addNewRecordButton').click()
  }

  fillForm(user) {
    cy.get('#firstName').clear().type(user.firstName)
    cy.get('#lastName').clear().type(user.lastName)
    cy.get('#userEmail').clear().type(user.email)
    cy.get('#age').clear().type(user.age)
    cy.get('#salary').clear().type(user.salary)
    cy.get('#department').clear().type(user.department)
  }

  submit() {
    cy.get('#submit').click()
  }

  search(text) {
    cy.get('#searchBox').clear().type(text)
  }

  getTable() {
    return cy.get('table tbody tr')
  }

  deleteUser() {
    cy.get('[title="Delete"]').click()
  }

  getNoDataMessage() {
    return cy.contains('No rows found')
  }

  getNumPages(){
    return cy.get('strong')
  }
}

export default new WebTablesPage()
