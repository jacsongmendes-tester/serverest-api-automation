describe('API - Products', () => {

    beforeEach(() => {
        cy.generateToken();
    });

    it('Should list all registered products', () => {
        cy.request('GET', `${Cypress.env('baseUrl')}/produtos`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.quantidade).to.be.greaterThan(0);
            expect(response.body.produtos).to.be.an('array');
        });
    });

    it('Should register a new product successfully', () => {
        const uniqueProductName = `Qa Product Test ${Date.now()}`;

        cy.createProduct(uniqueProductName, 100, 'Product created by the automation tests', 10).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq('Cadastro realizado com sucesso');
            expect(response.body._id).to.exist;
        });
    });

    it('Should not allow duplicate product names', () => {
        const duplicateProductName = `Duplicate Product ${Date.now()}`;

        cy.createProduct(duplicateProductName, 100, 'Duplicate Test', 10);
  
        cy.createProduct(duplicateProductName, 200, 'Duplicate Test 2', 20,  false).then((response) => {
            expect(response.status).to.eq(400); 
            expect(response.body.message).to.eq('Já existe produto com esse nome');
        });
    });
});
