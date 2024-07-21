class EditAccountDetailsINFO{
    AccountDetailsedit(){
        cy.xpath('//input[@id="input-firstname"]').clear().type('HIRAK');
        cy.xpath('//input[@id="input-lastname"]').clear().type('GOSWAMI');
        cy.xpath('//input[@id="input-telephone"]').clear().type('1122334455');
        cy.xpath('//input[@type="submit"]').click();
        cy.xpath('//div[@class="alert alert-success alert-dismissible"]').should('be.visible').and('contain.text','Success: Your account has been successfully updated.');
    }
}
export default EditAccountDetailsINFO;
