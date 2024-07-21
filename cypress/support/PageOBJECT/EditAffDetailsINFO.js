class EditAffDetailINFO{
    AffDetailsEdit(){
        //cy.xpath('//a[@href="https://tutorialsninja.com/demo/index.php?route=account/affiliate/add"]').click();
        cy.xpath('//input[@id="input-company"]').clear().type('Masai');
        cy.xpath('//input[@id="input-website"]').clear().type('Masai.com');
        cy.xpath('//input[@id="input-tax"]').clear().type('abcd1234');
        cy.xpath('//input[@value="cheque"]').click();
        cy.xpath('//input[@id="input-cheque"]').clear().type(12345678);
        cy.xpath('//input[@value="Continue"]').click();
        cy.xpath('//div[@class="alert alert-success alert-dismissible"]').should('be.visible').and('contain.text','Success: Your account has been successfully updated.');
    }
}
export default EditAffDetailINFO;