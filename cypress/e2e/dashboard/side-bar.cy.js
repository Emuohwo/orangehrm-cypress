/// <reference types="cypress" />

import Login from "../../PageObjects/LoginPage";
import Dashboard from "../../PageObjects/DashboardPage";

const LOGIN_REF = new Login();
const DASHBOARD_REF = new Dashboard();


describe('Side Bar Navigation', () => {
  beforeEach(() => {
    cy.visit('/auth/login');
    // Fill the form
    LOGIN_REF.setUserName('Admin');
    LOGIN_REF.setPassword('admin123');
    LOGIN_REF.clickSubmit();
    cy.visit('/dashboard/index');
  });

  it('Visit "Admin" page', () => {
    DASHBOARD_REF.pageToVisit(/Admin/)
    DASHBOARD_REF.pagePathContain('/admin/viewSystemUsers');
    DASHBOARD_REF.goBack();
  })

  it('Visit "PIM" page', () => {
    DASHBOARD_REF.pageToVisit(/PIM/)
    DASHBOARD_REF.pagePathContain('/pim/viewEmployeeList');
    DASHBOARD_REF.goBack();
  })

  it('Visit "Leave" page', () => {
    DASHBOARD_REF.pageToVisit(/Leave/)
    DASHBOARD_REF.pagePathContain('/leave/viewLeaveList');
    DASHBOARD_REF.goBack();
  })

  it('Visit "Time" page', () => {
    DASHBOARD_REF.pageToVisit(/Time/)
    DASHBOARD_REF.pagePathContain('/time/viewEmployeeTimesheet');
    DASHBOARD_REF.goBack();
  })

})