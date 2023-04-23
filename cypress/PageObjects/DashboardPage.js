class Dashboard 
{
  setSearchWord(word) {
    cy.get('input[placeholder="Search"]').type(word);
  }
  goBack() {
    cy.go('back');
  }
  pagePathContain(path){
    cy.url().should('include', path);
  }
  pageTitleContains(title) {
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have', title)
  }
  pageToVisit(page){
    cy.get('a[class="oxd-main-menu-item"]').contains(page).click();
  }
}

export default Dashboard;
