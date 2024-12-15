// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('setEnvironmentVariables', () => {
    const environment = Cypress.env('ENV')
    Cypress.env('baseUrl', Cypress.env(environment).baseUrl)
    Cypress.env('email', Cypress.env(environment).email)
    Cypress.env('password', Cypress.env(environment).password)
});


Cypress.Commands.add('generateToken', () => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('baseUrl')}/login`,
        body: {
            email: Cypress.env('email'),
            password:  Cypress.env('password')
        }
    }).then((response) => {
        Cypress.env('authToken', response.body.authorization)
    })
})

Cypress.Commands.add('createProduct', (productName, price, description, quantity, failOnStatusCode = true) => {
    return cy.request({
        method: 'POST',
        url: `${Cypress.env('baseUrl')}/produtos`,
        headers: { Authorization:  Cypress.env('authToken') },
        body: {
            nome: productName,
            preco: price,
            descricao: description,
            quantidade: quantity,
        },
        failOnStatusCode
    });
})


Cypress.Commands.add('createUser',(userData, failOnStatusCode = true) => {
    return cy.request({
        method: 'POST',
        url: `${Cypress.env('baseUrl')}/usuarios`,
        body: userData,
        failOnStatusCode
    });
})
