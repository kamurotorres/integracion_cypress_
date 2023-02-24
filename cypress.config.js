const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth:1500,
  viewportHeight:900,
  chromeWebSecurity:false,
  defaultCommandTimeout: 15000,
  pageLoadTimeout : 19000,
  projectId: "dshyje", 
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
