class ViewAffDetailINFO{
    AffDetailsView(){
        cy.url('').should('include','edit');
        cy.xpath('//input[@class="btn btn-primary"]').click();
    }
}
export default ViewAffDetailINFO;