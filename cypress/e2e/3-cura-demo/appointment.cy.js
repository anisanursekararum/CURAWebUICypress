import loginPage from "../../support/page/loginPage"
import appointmentPage from "../../support/page/appointmentPage"
const data = require("../../fixtures/data.json")

describe('Appointment', () => {
  beforeEach(() => {
    cy.visit('')
    loginPage.clickMenu()
    loginPage.clickLoginMenu()
    cy.url().should('contain', 'login')
    loginPage.inputUsername(data.username)
    loginPage.inputPassword(data.password)
    loginPage.clickButtton()
    loginPage.verifyLogin()
  })

  it('Book Appointment All Form Filled', () => {
    appointmentPage.selectFacility()
    appointmentPage.checkCheckbox()
    appointmentPage.radioHealthCareProgram()
    appointmentPage.chooseDate()
    appointmentPage.typeComment()
    appointmentPage.clickButtonBookApp()
    appointmentPage.confirmation()
  })

  it('Mandatory Data Empty', () => {
    appointmentPage.clickButtonBookApp()
    cy.on('window:alert', function(alertMessages){
      expect(alertMessages).to.contains(data.warning)
    })
  })

})