class LoginPage {
  visit() {
    cy.visit("/"); // Přejde na login stránku
  }

  fillUsername(username) {
    cy.get("#username").type(username);
  }

  fillPassword(password) {
    cy.get("#password").type(password);
  }

  submit() {
    cy.get(".btn-info").click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }
}

export default new LoginPage();
