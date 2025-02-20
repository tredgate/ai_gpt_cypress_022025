const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://tredgate.com/pmtool/index.php?module=users/login",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000, // 10 sekund
    requestTimeout: 15000, // 15 sekund
    responseTimeout: 30000, // 30 sekund
    retries: {
      runMode: 2, // Opakovat test 2x při spuštění přes CLI
      openMode: 0, // Neopakovat testy při spuštění v GUI
    },
    env: {
      login_url: "/prihlaseni",
      api_url: "https://api.vaše-banka.cz",
      username: "ai_jaro2024",
      password: "AITredgate24",
      languages: ["en", "cs"],
      // Další environmentální proměnné
    },
    video: true, // Nahrávat videa z testů
    screenshotOnRunFailure: true, // Pořídit snímek obrazovky při selhání
    chromeWebSecurity: true, // Zachovat bezpečnostní nastavení prohlížeče
    // Další nastavení podle potřeby
  },
});
