const { defineConfig } = require("cypress");
require('dotenv').config();

const ENV = process.env.ENV 

const baseUrls = {
  dev: process.env.DEV_URL,
  homolog: process.env.HOMOLOG_URL,
  prod: process.env.PROD_URL
};

module.exports = defineConfig({
  e2e: {
    baseUrl: baseUrls[ENV],
    viewportWidth: 1440,
    viewportHeight: 900,

    env: {
      username: process.env.CYPRESS_USERNAME,
      password: process.env.CYPRESS_PASSWORD
    },

    setupNodeEvents(on, config) {
      const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin')
      cypressGrepPlugin(config)
      return config;
    }
  },
});
