import loginPage from "../../support/page/loginPage"
const data = require("../../fixtures/data.json")

describe('LOGIN', () => {
  beforeEach(() => {
    cy.visit('')
    loginPage.clickMenu()
    loginPage.clickLoginMenu()
    cy.url().should('contain', 'login')
  })
  
  //using fixture data
  it('C1 Invalid Username or Password', () => {
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
  
  it('C2 Credential Empty', () => {
    loginPage.clickButtton()
    cy.get('.text-danger').should('have.text', data.invalidLoginMessages)
  })
  
  //using POM
  it('C3 Valid Username And Password', () => {
    loginPage.inputUsername(data.username)
    loginPage.inputPassword(data.password)
    loginPage.clickButtton()
    loginPage.verifyLogin()
    cy.url().should('include', '/#appointment')
    loginPage.clickMenu()
    loginPage.clickLogoutMenu()
    cy.go('back')
  })
})