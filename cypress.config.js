const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 100000,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true,
  },
  retries: {
    runMode: 1,
  },
  env: {
    url: 'https://rahulshettyacademy.com/angularpractice/',
  },
  projectId: 'vaj3v5',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      //return require('./cypress/plugins/index.js')(on, config)
      on('file:preprocessor', cucumber())
    },
    //specPattern: 'cypress/integration/examples/*.js',
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
})
