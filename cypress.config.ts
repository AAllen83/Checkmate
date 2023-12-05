import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    projectId: 'swhwxh',
    baseUrl: "https://www.gamesforthebrain.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});