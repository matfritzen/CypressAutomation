const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  projectId: 'rp6vi9',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/integration/examples/BDD/*.feature',
    video: false,
    defaultCommandTimeout: 6000,
    pageLoadTimeout: 20000,
    reporter: "mochawesome",
    env:{

      url: "https://rahulshettyacademy.com"

    },

    retries:{

      runMode: 2

    }

  },
});
