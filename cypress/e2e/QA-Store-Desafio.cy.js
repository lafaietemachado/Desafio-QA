/// <reference types="cypress" />
import TestPage from "../support/Views/pages/TestPage"

describe('homePage', () => {

    beforeEach(() => {
        cy.visit('/')
    })
    it('Verifica o título da página', () => {
        cy.title().should('be.equal', 'QA Store Desafio')
    })

    it('Verifica se o carrinho esta vazio', () => {
        cy.get('.span4 > .carrinho > a > .vazio-text').should('be.visible', 'Carrinho vazio')
    })

    it('Compra de produto com categoria - 1 Nível ao carrinho sem passar cupom', () => {
        TestPage.cupom()
        cy.get('.total').should('be.visible')
        cy.get('.descontos').should('be.visible')
    })

    it('Compra de produto com categoria - 1 Nível ao carrinho com cupom FRETEGRATIS', () => {
        cy.get(':nth-child(1) > ul > :nth-child(1) > .listagem-item > .acoes-produto > .botao').click()
        cy.get('h1.nome-produto.titulo').should('be.visible', '[CATEGORIA] Produto com categoria - 1 Nível')
        cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
        cy.get('h1.titulo.cor-secundaria').should('be.visible', ' Clique em finalizar compra para efetuar o seu pedido.')
        cy.get('.produto-info > .cor-secundaria').should('be.visible', '[CATEGORIA] Produto com categoria - 1 Nível')
        cy.get('.hidden-phone > .preco-produto > div > .preco-promocional').should('be.visible', '')
        cy.get('.input-mini').should('be.visible', '')
        cy.get('.preco-produto > .preco-promocional').should('be.visible', '')
        cy.get('.subtotal').should('be.visible', '')
        cy.get('#calcularFrete').type('01001000')
        cy.get('#btn-frete').click()
        cy.get(':nth-child(2) > .radio > input').click()
        cy.get('#usarCupom').type('FRETEGRATIS')
        cy.get('#btn-cupom').click()
        cy.get('.cupom-sucesso').should('be.visible')
        cy.get('.total').should('be.visible')
    })

    it('Compra de produto com categoria - 1 Nível ao carrinho com cupom CUPOMVENCIDO', () => {
        cy.get(':nth-child(1) > ul > :nth-child(1) > .listagem-item > .acoes-produto > .botao').click()
        cy.get('h1.nome-produto.titulo').should('be.visible', '[CATEGORIA] Produto com categoria - 1 Nível')
        cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
        cy.get('h1.titulo.cor-secundaria').should('be.visible', ' Clique em finalizar compra para efetuar o seu pedido.')
        cy.get('.produto-info > .cor-secundaria').should('be.visible', '[CATEGORIA] Produto com categoria - 1 Nível')
        cy.get('.hidden-phone > .preco-produto > div > .preco-promocional').should('be.visible', '')
        cy.get('.input-mini').should('be.visible', '')
        cy.get('.preco-produto > .preco-promocional').should('be.visible', '')
        cy.get('.subtotal').should('be.visible', '')
        cy.get('#calcularFrete').type('01001000')
        cy.get('#btn-frete').click()
        cy.get(':nth-child(2) > .radio > input').click()
        cy.get('#usarCupom').type('CUPOMVENCIDO')
        cy.get('#btn-cupom').click()
        cy.get('.alert-danger').should('be.visible')
        cy.get('.total').should('be.visible')
    })

    it('Compra de produto com categoria - 1 Nível ao carrinho com cupom AJJFLWBHH', () => {
        cy.get(':nth-child(1) > ul > :nth-child(1) > .listagem-item > .acoes-produto > .botao').click()
        cy.get('h1.nome-produto.titulo').should('be.visible', '[CATEGORIA] Produto com categoria - 1 Nível')
        cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
        cy.get('h1.titulo.cor-secundaria').should('be.visible', ' Clique em finalizar compra para efetuar o seu pedido.')
        cy.get('.produto-info > .cor-secundaria').should('be.visible', '[CATEGORIA] Produto com categoria - 1 Nível')
        cy.get('.hidden-phone > .preco-produto > div > .preco-promocional').should('be.visible', '')
        cy.get('.input-mini').should('be.visible', '')
        cy.get('.preco-produto > .preco-promocional').should('be.visible', '')
        cy.get('.subtotal').should('be.visible', '')
        cy.get('#calcularFrete').type('01001000')
        cy.get('#btn-frete').click()
        cy.get(':nth-child(2) > .radio > input').click()
        cy.get('#usarCupom').type('AJJFLWBHH')
        cy.get('#btn-cupom').click()
        cy.get('.cupom-sucesso').should('be.visible')
        cy.get('.total').should('be.visible')
    })
})