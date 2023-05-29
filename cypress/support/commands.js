Cypress.Commands.add('login', (
    email = Cypress.env('user_email'),
    password = Cypress.env('user_password'),
  ) => {
    const login = () => {
      cy.visit('/')
      cy.get('.bem-vindo > .cor-principal').click()
      cy.get('.controls > #id_email').type(email)
      cy.get('#id_senha').type(password, { log: false })
      cy.get('.controls > .botao').click()
    }
  
    login()
  })