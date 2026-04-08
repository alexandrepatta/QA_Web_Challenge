import WebTablesPage from '../../pages/WebTablesPage'

describe('Web Tables - User CRUD Flow', () => {

  const user = {
    firstName: 'Alexandre',
    lastName: 'QA',
    email: `alex${Date.now()}@test.com`,
    age: '27',
    salary: '25000',
    department: 'Engineering'
  }

  it('should create, search, validate and delete a user successfully', () => {

    WebTablesPage.visit()

    // Creating new user
    WebTablesPage.clickAdd()
    WebTablesPage.fillForm(user)
    WebTablesPage.submit()

    // Searching for created user
    WebTablesPage.search(user.firstName)

    // Validating presence in table
    WebTablesPage.getTable()
      .should('contain', user.firstName)
      .and('contain', user.lastName)
      .and('contain', user.email)

    // Deleting user
    WebTablesPage.deleteUser()

    // Validating removal and validating number of pages
    WebTablesPage.getNumPages().then(($el) => {
      if ($el.text().includes("1 of 0")) {
        return
      } else {
        WebTablesPage.getTable()
        .should('not.contain', user.firstName)
        .and('not.contain', user.lastName)
        .and('not.contain', user.email)
      }
    })
  })
})
