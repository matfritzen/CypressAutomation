const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rp6vi9',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
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
