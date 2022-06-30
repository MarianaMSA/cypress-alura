describe("Login e registro de usuário alura pic", () => {
  beforeEach(() => {
    cy.visit("https://alura-fotos.herokuapp.com");
  });
  it("verifica mensagem de validação", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Email is required!").should("be.visible");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Full name is required!").should("be.visible");
    cy.contains("ap-vmessage", "User name is required!").should("be.visible");
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
  });
  it("verificação mensagem de e-mail inválido", () => {
    cy.contains("a", "Register now").click();
    cy.get('input[formcontrolname="email"]').type("mariana");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Invalid e-mail").should("be.visible");
  });
});
