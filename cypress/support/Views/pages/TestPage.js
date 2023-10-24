export default new class TestPage {
    cupom() {
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
    }
}