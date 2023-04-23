/// <reference types="cypress" />
import Login from "../../PageObjects/LoginPage";

const LOGIN_REF = new Login();

describe('Login to the application', () => {
  beforeEach(() => {
    // Open the login page in the browser before running each test case
    cy.visit('/auth/login');
  })

  it('Ensure that Login is showing in the login page', () => {
    cy.get('h5.oxd-text oxd-text--h5').should('contain', /Login/)
  })

  it('Ensure login user can not login with invalid username and valid password', () => {
    cy.get('[name="username"]').type('ad');
    cy.get('[name="password"]').type('admin123');
    cy.get('[type="submit"]').click();
    cy.get('.oxd-text oxd-text--p oxd-alert-content-text').should('contain', /Invalid credentials/);
  })

  // Using POM approach
  it('Ensure login user can not login with  username and invalid password', () => {
    LOGIN_REF.setUserName('Admin');
    LOGIN_REF.setPassword('invalid');
    LOGIN_REF.clickSubmit();
    cy.get('.oxd-text oxd-text--p oxd-alert-content-text').should('contain', /Invalid credentials/);
  })

  it('Ensure login user can login with valid username and valid password', () => {
    // Enter a valid username in the username input field
    cy.get('[name="username"]').type('Admin');
    // Enter a valid password in the password input field
    cy.get('[name="password"]').type('admin123');
    // click on the login button
    cy.get('[type="submit"]').click();
    // Dashboard text should be on the page
    cy.contains('Dashboard');
    // Click on the profile image/name to open the logout in the dropdown menu
    cy.get('.oxd-userdropdown-tab').click();
    // Click in the the last item which corresponds to the logout button
    cy.get('ul.oxd-dropdown-menu li').last().click()
    
  })

  it('Ensure that "Forgot your password?" link is not broken', ()=> {
    // Click on the forgot your password link
    cy.get('.orangehrm-login-forgot-header').click();
    // check if the new url contains the path for password reset
    cy.url().should('include', '/auth/requestPasswordResetCode');
    // verify the the page contains text
    cy.get('p').should('contain', 'Please enter your username to identify your account to reset your password')
  })

})