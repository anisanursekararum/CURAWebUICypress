const data = require("../../fixtures/data.json")

class LoginPage {
  
  username = '#txt-username'
  password = '#txt-password'
  loginButton = '#btn-login'
  verify = 'h2'
  
  inputUsername(username) {
    cy.get(this.username).type(username)
  }
  
  inputPassword(password) {
    cy.get(this.password).type(password)
  }
  
  clickButtton(){
    cy.get(this.loginButton).click()
  }

  verifyLogin(){
    cy.get(this.verify).should('have.text', data.title)
  }
  
}

export default new LoginPage()