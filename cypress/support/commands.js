Cypress.Commands.add('register', register => {
  
  cy.get('.bem-vindo > .cor-principal').click();
  cy.get('fieldset > div > #id_email').type(register.email.toLowerCase());
  cy.get('fieldset > div > .botao').click();
  cy.get('#id_confirmacao_email').type(register.email.toLowerCase());
  cy.get('#id_senha').type('1234asdf');
  cy.get('#id_confirmacao_senha').type('1234asdf');
  cy.get('#id_tipo_0').click();
  cy.get('#id_nome').type(register.randomName);
  cy.get('#id_cpf').type(register.randomCPF);
  cy.get('#id_telefone_celular').type('21994343767');
  cy.get('#id_telefone_principal').type('2135795266');
  cy.get('#id_sexo').select('Feminino');
  cy.get('#id_data_nascimento').type('25041993');
  cy.get('#id_cep').type('21351250');
  cy.get('#id_endereco').should('have.value', 'Rua General Aurélio Vieira');
  cy.get('#id_numero').type('768');
  cy.get('#id_bairro').should('have.value', 'Turiaçu');
  cy.get('#id_cidade').should('have.value', 'Rio de Janeiro');
  cy.get('#id_estado').should('have.value', 'RJ');
  cy.get('.span3 > .principal').click()
})

Cypress.Commands.add('login', register => {
  cy.get('.bem-vindo > .cor-principal').click();
  cy.get('fieldset > div > #id_email').type(register.email.toLowerCase());
  cy.get('fieldset > div > .botao').click();
  cy.get('#id_confirmacao_email').type(register.email.toLowerCase());
  cy.get('#id_senha').type('1234asdf');
  cy.get('#id_confirmacao_senha').type('1234asdf');
  cy.get('#id_tipo_0').click();
  cy.get('#id_nome').type(register.randomName);
  cy.get('#id_cpf').type(register.randomCPF);
  cy.get('#id_telefone_celular').type('21994343767');
  cy.get('#id_telefone_principal').type('2135795266');
  cy.get('#id_sexo').select('Feminino');
  cy.get('#id_data_nascimento').type('25041993');
  cy.get('#id_cep').type('21351250');
  cy.get('#id_endereco').should('have.value', 'Rua General Aurélio Vieira');
  cy.get('#id_numero').type('768');
  cy.get('#id_bairro').should('have.value', 'Turiaçu');
  cy.get('#id_cidade').should('have.value', 'Rio de Janeiro');
  cy.get('#id_estado').should('have.value', 'RJ');
  cy.get('.span3 > .principal').click();
  cy.get('.btn-group > .botao').click();
  cy.get('.menu-user-logout').click();
  cy.get('.bem-vindo > .cor-principal').click();
  cy.get('.controls > #id_email').type(register.email);
  cy.get('#id_senha').type('1234asdf', { log: false });
  cy.get('.controls > .botao').click();
  
  })