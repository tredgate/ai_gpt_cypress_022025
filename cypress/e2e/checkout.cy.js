import LoginPage from "../pages/loginPage";

it("should login successfully", () => {
  LoginPage.visit();
  LoginPage.enterCredentials("user", "password");
});
