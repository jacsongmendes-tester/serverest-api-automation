const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    video: false,
    screenshotOnRunFailure: true,
    watchForFileChanges: false,
    experimentalStudio: false,
    retries: {
      runMode: 2,
      openMode: 0
    },
    setupNodeEvents(on, config) {
    },
  },
})