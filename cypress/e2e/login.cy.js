import { faker } from '@faker-js/faker';

const cpf = require('gerador-validador-cpf');

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/');
            })
          
    it('createRegister', () => {
        const register = {
            email: faker.internet.email(),
            randomName: `${faker.internet.userName()} ${faker.name.lastName()}`,
            randomCPF: cpf.generate()
        }
        
        cy.login(register);
    })
})