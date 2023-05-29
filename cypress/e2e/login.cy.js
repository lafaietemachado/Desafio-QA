/// <reference types="cypress" />

import '../support/commands'

describe('login', () => {
      it('login', () => {
        cy.login()
       
        cy.get('.btn-group > .botao').contains('Olá, Alícia Luciana Almeida')
    })
})