const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '032023',
    reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/report/mochawesome-report',
    overwrite: true,
    html: true,
    json: false,
    timestamp: 'mmddyyyy_HHMMss,',
    charts: true,
    code: true,
    reportPageTitle: 'QA-Store-Desafio',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: 'https://qastoredesafio.lojaintegrada.com.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
