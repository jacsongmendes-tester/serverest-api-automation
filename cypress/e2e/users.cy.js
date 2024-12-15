describe('API - Users', () => {
    before(() => {
        cy.generateToken();
    });

    const baseUrl = Cypress.env('baseUrl');

    it('Should list the registered users', () => {
        cy.request('GET', `${baseUrl}/usuarios`).then(({ status, body }) => {
            expect(status).to.eq(200);
            expect(body.quantidade).to.be.greaterThan(0);
            expect(body.usuarios).to.be.an('array');
        });
    });

    it('Should create a new user successfully', () => {
        const newUser = {
            nome: 'Usuário Teste',
            email: `qa-auto-api${Date.now()}@mail.com`,
            password: `Qa-auto@${Math.random()}`,
            administrador: 'true'
        };

        cy.request({
            method: 'POST',
            url: `${baseUrl}/usuarios`,
            body: newUser
        }).then(({ status, body }) => {
            expect(status).to.eq(201);
            expect(body.message).to.eq('Cadastro realizado com sucesso');
            expect(body._id).to.exist;
        });
    });

    it('Should not allow duplicate user emails', () => {
        const duplicateUser = {
            nome: 'Usuário Duplicado',
            email: Cypress.env('email'),
            password: Cypress.env('password'),
            administrador: 'true'
        };

        cy.request({
            method: 'POST',
            url: `${baseUrl}/usuarios`,
            body: duplicateUser,
            failOnStatusCode: false
        }).then(({ status, body }) => {
            expect(status).to.eq(400);
            expect(body.message).to.eq('Este email já está sendo usado');
        });
    });
});
