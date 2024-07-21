class RegisterAffINFO{
    AffiRegister(){
        //Registration process starts here
        //cy.xpath('//a[@href="https://tutorialsninja.com/demo/index.php?route=account/affiliate/add"]').click();
        cy.xpath('//input[@id="input-company"]').type('Masai School');
        cy.xpath('//input[@id="input-website"]').type('Masaischool.com');
        cy.xpath('//input[@id="input-tax"]').type('1234abcd')
        cy.xpath('//input[@value="cheque"]').click();
        cy.xpath('//input[@id="input-cheque"]').type('Hirak');
        cy.xpath('//input[@type="checkbox"]').click();
        cy.xpath('//input[@value="Continue"]').click();
    }
    //Registration done
}
export default RegisterAffINFO;