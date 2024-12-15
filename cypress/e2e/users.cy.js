describe('API - Users', () => {

    beforeEach(() => {
        cy.generateToken();
    });


    it('Should list all registered users', () => {
        cy.request('GET', `${Cypress.env('baseUrl')}/usuarios`).then(({ status, body }) => {
            expect(status).to.eq(200);
            expect(body.quantidade).to.be.greaterThan(0);
            expect(body.usuarios).to.be.an('array');
        });
    });

    it('Should create a new user successfully', () => {
        const newUser = {
            nome: 'Test User',
            email: `qa-auto-api${Date.now()}@mail.com`,
            password: `Qa-auto@${Math.random()}`,
            administrador: 'true'
        };

        cy.createUser(newUser).then(({ status, body }) => {
            expect(status).to.eq(201);
            expect(body.message).to.eq('Cadastro realizado com sucesso');
            expect(body._id).to.exist;
        });
    });

    it('Should not allow duplicate user emails', () => {
        const duplicateUser = {
            nome: 'Duplicate User',
            email: Cypress.env('email'),
            password: Cypress.env('password'),
            administrador: 'true'
        };

        cy.createUser(duplicateUser, false).then(({ status, body }) => {
            expect(status).to.eq(400);
            expect(body.message).to.eq('Este email já está sendo usado');
        });
    });
});
