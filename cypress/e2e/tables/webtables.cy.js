import WebTablesPage from '../../pages/WebTablesPage'

describe('Web Tables - User CRUD Flow', { tags: ['@regression', '@table'] }, () => {

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
    WebTablesPage.search(user.email)

    // Validating presence in table
    WebTablesPage.getTable()
      .should('contain', user.firstName)
      .and('contain', user.lastName)
      .and('contain', user.email)

    // Deleting user
    WebTablesPage.deleteUser(user.email)

    // Validating removal
    WebTablesPage.getTable().should('not.contain', user.email)
  })
})
