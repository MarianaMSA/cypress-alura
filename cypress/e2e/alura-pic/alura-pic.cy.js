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
  it("verifica mensagem de e-mail inválido", () => {
    cy.contains("a", "Register now").click();
    cy.get('input[formcontrolname="email"]').type("mariana");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Invalid e-mail").should("be.visible");
  });
  it("verifica mensagem de senha inválida", () => {
    cy.contains("a", "Register now").click();
    cy.get('input[formcontrolname="password"]').type("mariana");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is").should("be.visible");
  });
  it("verifica mensagem de senha com menos de 8 caracteres", () => {
    cy.contains("a", "Register now").click();
    cy.get('input[formcontrolname="password"]').type("mariana");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is ").should("be.visible");
  });

  it("verifica mensagem de letra maiuscula no user name", () => {
    cy.contains("a", "Register now").click();
    cy.get('input[formcontrolname="userName"]').type("MARIANA");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Must be lower case").should("be.visible");
  });
});
