describe("Login e registro de usuário alura pic", () => {
  beforeEach(() => {
    cy.visit("https://www.victorhugo.com.br/");
  });
  it("login correct, start in home", () => {
    cy.get(".flex > .h-6").click();
    cy.get("#username").type("mariana.assis@mkplace.com.br");
    cy.get("#password").type("a1234567");
    cy.contains("button", "Acessar minha conta").click();
    cy.contains("p", "Olá, ").should("be.visible");
  });
  // it("verifica mensagem de e-mail inválido", () => {
  //   cy.contains("a", "Register now").click();
  //   cy.get('input[formcontrolname="email"]').type("mariana");
  //   cy.contains("button", "Register").click();
  //   cy.contains("ap-vmessage", "Invalid e-mail").should("be.visible");
  // });
  // it("verifica mensagem de senha inválida", () => {
  //   cy.contains("a", "Register now").click();
  //   cy.get('input[formcontrolname="password"]').type("mariana");
  //   cy.contains("button", "Register").click();
  //   cy.contains("ap-vmessage", "Mininum length is").should("be.visible");
  // });
  // it("verifica mensagem de senha com menos de 8 caracteres", () => {
  //   cy.contains("a", "Register now").click();
  //   cy.get('input[formcontrolname="password"]').type("mariana");
  //   cy.contains("button", "Register").click();
  //   cy.contains("ap-vmessage", "Mininum length is 8").should("be.visible");
  // });

  // it("verifica mensagem de letra maiuscula no user name", () => {
  //   cy.contains("a", "Register now").click();
  //   cy.get('input[formcontrolname="userName"]').type("MARIANA");
  //   cy.contains("button", "Register").click();
  //   cy.contains("ap-vmessage", "Must be lower case").should("be.visible");
  // });
});
