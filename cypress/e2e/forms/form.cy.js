import FormPage from '../../pages/FormPage'

describe('Practice Form', { tags: ['@regression', '@form'] }, () => {

  beforeEach(() => {
    FormPage.visit()
  })

  it('should submit form for multiple users', () => {
    cy.fixture('formData').then((users) => {

      users.forEach((user) => {

        FormPage.fillForm(user)
        FormPage.submit()

        FormPage.getSuccessModal()
          .should('contain', 'Thanks for submitting the form')

        cy.reload()
      })

    })
  })

})
