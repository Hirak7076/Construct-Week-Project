class RegisterINFO{
    enterURL(){
        //cypress opens the website for testing in the browser
        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home');
    }
    //registration process starts from here
    NewRegister(){
        cy.xpath('//a[@title="My Account"]').click();
        cy.xpath('//a[@href="https://tutorialsninja.com/demo/index.php?route=account/register"]').click();
        cy.xpath('//input[@name="firstname"]').clear().type('Hirak');
        cy.xpath('//input[@name="lastname"]').clear().type('Goswami');
        cy.xpath('//input[@id="input-email"]').clear().type('Hirakgoswaaaaaaaaaaaaaa89101@gmail.com');
        cy.xpath('//input[@name="telephone"]').clear().type('1234567890');
        cy.xpath('//input[@id="input-password"]').clear().type('1234');
        cy.xpath('//input[@id="input-confirm"]').clear().type('1234');
        cy.xpath('(//input[@name="newsletter"])[1]').click();
        cy.xpath('(//input[@name="newsletter"])[2]').click();
        cy.xpath('//input[@name="agree"]').click();
        cy.xpath('//input[@value="Continue"]').click();
        cy.url('').should('include','success');
        cy.xpath('//a[@class="btn btn-primary"]').click();
    }
    //Registration done
}
export default RegisterINFO;
