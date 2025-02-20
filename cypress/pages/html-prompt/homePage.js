class HomePage {
  verifyWelcomeMessage() {
    cy.get("#welcome-page-header").should(
      "contain",
      "Vítej v testovací aplikaci Tredgate Project"
    );
  }

  logout() {
    cy.get("#user_dropdown").click(); // Nejprve otevřeme menu
    cy.get("#logout a").should("be.visible").click(); // Až pak klikneme na odhlášení
  }
}

export default new HomePage();
