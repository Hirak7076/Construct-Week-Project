class LogoutINFO{
    logout(){
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/logout"])[2]').click();
        cy.url('').should('include','logout');
        cy.xpath('//a[@class="btn btn-primary"]').click();
        cy.url('').should('include','home');
    }
}
export default LogoutINFO;
