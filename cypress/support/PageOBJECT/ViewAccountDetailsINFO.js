class ViewAccountDetailsINFO{
    AccountDetailsview(){
        cy.url('').should('include','edit');
        cy.xpath('//input[@type="submit"]').click();
    }
}
export default ViewAccountDetailsINFO;
