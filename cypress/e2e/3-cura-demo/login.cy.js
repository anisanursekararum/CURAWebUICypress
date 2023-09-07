import loginPage from "../../support/page/loginPage"
const data = require("../../fixtures/data.json")

describe('LOGIN', () => {
  beforeEach(() => {
    cy.visit('/profile.php#login')
  })

  //using fixture data
  it('Login Failed', () => {
    cy.url().should('contain', 'login')
    cy.fixture('userDynamic').its('data').then(user => {
      user.forEach((user) => {
        const username = user.username
        const password = user.password
        cy.login(username, password)
        cy.klik('#btn-login')
        cy.get('.text-danger').should('have.text', data.invalidLoginMessages)
      })
    })
  })

  //using POM
  it('Login Success', () => {
    loginPage.inputUsername(data.username)
    loginPage.inputPassword(data.password)
    loginPage.clickButtton()
    loginPage.verifyLogin()
    cy.url().should('include', '/#appointment')
  })

})