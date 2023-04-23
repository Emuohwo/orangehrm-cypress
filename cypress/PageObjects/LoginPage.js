class Login 
{
  setUserName(username){
    cy.get('input[name="username"]').type(username)
  }
  setPassword(password){
    cy.get('input[name="password"]').type(password,  { sensitive: true })
  }

  clickSubmit() {
    cy.get('button[type="submit"]').click();
  }

  verifyLoginSuccess() {
    cy.get('h6.oxd-topbar-header-breadcrumb-module').should('have.text', /Dashbord/);
  }
}

export default Login;
