class AddressBookINFO{
    checkAddressBook(){
        cy.xpath('//a[@class="btn btn-primary"]').click();
        cy.xpath('//input[@id="input-firstname"]').clear().type('Hirak');
        cy.xpath('//input[@id="input-lastname"]').clear().type('Goswami');
        cy.xpath('//input[@id="input-company"]').clear().type('Masai');
        cy.xpath('//input[@id="input-address-1"]').clear().type('A/B ABCD ROAD');
        cy.xpath('//input[@id="input-city"]').clear().type('Durgapur');
        cy.xpath('//input[@id="input-postcode"]').clear().type('713204');
        cy.xpath('//select[@id="input-country"]').select('India').should('have.value','99');
        cy.xpath('//select[@id="input-zone"]').select('West Bengal').should('have.value','1506');
        cy.xpath('//input[@checked="checked"]').click();
        cy.xpath('//input[@value="Continue"]').click();
        cy.xpath('//div[@class="alert alert-success alert-dismissible"]').should('be.visible').and('contain.text','Your address has been successfully added');
        cy.wait(2000);
        cy.xpath('//a[@class="btn btn-default"]').click()
    }
}
export default AddressBookINFO;