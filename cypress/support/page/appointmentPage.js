const data = require("../../fixtures/data.json")

class appointmentPage {
  facility = '#combo_facility'
  checkbox = '#chk_hospotal_readmission'
  radio = '#radio_program_medicaid'
  inputDate = '#txt_visit_date'
  datePicker = '.datepicker-days'
  date = '.day'
  comment = '#txt_comment'
  buttonBookApp = '#btn-book-appointment'
  titleConfirm = 'h2'
  visitDate = '#visit_date'
  commentValue = '#comment'
  
  selectFacility(){
    cy.get(this.facility).select(data.facility3).should('have.value', data.facility3)
  }
  
  checkCheckbox(){
    cy.get(this.checkbox).check().should('be.checked')
  }
  
  radioHealthCareProgram(){
    cy.get(this.radio).check(data.program2).should('have.value', data.program2)
  }
  
  chooseDate(){
    cy.get(this.inputDate).click()
    cy.get(this.datePicker).should('be.visible')
    cy.get(this.date).contains('30').click()
  }
  
  typeComment(){
    cy.get(this.comment).should('be.visible').type(data.comment)
  }
  
  clickButtonBookApp(){
    cy.get(this.buttonBookApp).should('be.visible').click()
  }
  
  confirmation(){
    cy.get(this.titleConfirm).should('be.visible').and('have.text', data.titleConfirm)
  }
  
  visitDateResult(){
    cy.get(this.visitDate).contains('30')
  }
  
  commentResult(){
    cy.get(this.commentValue).should('have.text', data.comment)
  }
  
  
  
}

export default new appointmentPage()