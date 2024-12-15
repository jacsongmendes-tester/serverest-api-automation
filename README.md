<img src="https://front.serverest.dev/static/media/serverestlogo1.532833ba.png" alt="Logo" width="200">

# ServeRest Automation API Project

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

This project contains api automation tests for the ServeRest API, using [Cypress](https://www.cypress.io/).

---

## Prerequisites

Before running this project, make sure you have the following:

- Basic knowledge of **JavaScript** and **Cypress**.
- [Node.js](https://nodejs.org/en/) installed.
  - For **macOS** or **Linux** users, we recommend using [NVM](https://github.com/nvm-sh/nvm) to manage Node.js versions.
- A terminal of your choice (we recommend the integrated terminal in Visual Studio Code).
- A code editor such as [VS Code](https://code.visualstudio.com/).

---

## How to Run the Project Locally

Follow these steps to set up and run the automation project:

1. Clone the repository:
   ```bash
   git clone https://github.com/jacsongmendes-tester/serverest-api-automation.git
   ```

2. Navigate to the project folder:
   ```bash
   cd serverest-api-automation
   ```

3. Make sure you are in the project's root folder (where the `package.json` file is located).

4. Follow the instructions in the **Installation** section below.

5. Configure the test environment as described in the **Environment Configuration** section.

6. Run the tests as described in the **Running Tests** section.

---

## Installation

1. Make sure you are inside the project folder.
2. Install the necessary dependencies using the following command:
   ```bash
   npm install
   ```

> For more information on installing Cypress, refer to the [official documentation](https://docs.cypress.io/guides/getting-started/installing-cypress.html).

---

## Environment Configuration

Before running the tests, you need to configure the environment:

1. Create a file named `cypress.env.json` in the project root directory.
2. Copy the content from the `cypress.env.example.json` file into the newly created file.
3. Edit the `cypress.env.json` file with the environment details where you want to execute the tests:

   Example configuration:
   ```json
   {
       "dev": {
           "baseUrl": "http://your-api-url.com", // Enter the URL of the environment to be tested
           "email": "user@example.com", // Enter the user's email for authentication
           "password": "your-password" // Enter the corresponding password
       }
   }
   ```

---

## Running Tests

There are two main ways to execute the tests:

### **1. Headless Mode Execution**
To run tests in the terminal (headless mode), use the following command:
```bash
npm run cy:test-headless-dev
```

### **2. UI Mode Execution**
To run tests with the Cypress graphical interface, use:
```bash
npm run cy:test-ui-dev
```
