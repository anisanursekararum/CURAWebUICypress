describe('example to-do app', () => {
  // beforeEach(() => {
  //   cy.visit()
  // })
  it('login', () => {
    cy.visit('/profile.php#login')
    cy.url().should('contain', 'login')
    cy.fixture('userDynamic').its('data').then(user => {
      user.forEach((user) => {
        const username = user.username
        const password = user.password
        cy.login(username, password)
        // const dataUser = user[1];
        // cy.login(dataUser.username, dataUser.password)
        cy.klik('#btn-login')
      })
    })
  })
})