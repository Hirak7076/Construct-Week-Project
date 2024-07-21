const { defineConfig } = require("cypress");
async function setupNodeEvents(on, config){
  // implement node event listeners here
  return on,config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/Construct week project/*.js'
  },
});