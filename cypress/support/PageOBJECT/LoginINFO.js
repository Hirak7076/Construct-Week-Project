class LoginINFO{
    enterURL(){
        //cypress opens the website
        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home');
    }
    //login process starts from here
    login(){
        
        cy.xpath('//a[@title="My Account"]').click();
        cy.xpath('//a[@href="https://tutorialsninja.com/demo/index.php?route=account/login"]').click();
        cy.xpath('//input[@id="input-email"]').type('Hirakgoswaaaaaa89101@gmail.com');
        cy.xpath('//input[@placeholder="Password"]').type('1234');
        cy.xpath('//input[@type="submit"]').click();
    }
    //reset pasword process starts here
    clickforgotPASSWORD(){
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/forgotten"])[1]').click();
        cy.xpath('//input[@id="input-email"]').type('Hirakg89101@gmail.com');
        cy.xpath('//input[@value="Continue"]').click();
    }
}
export default LoginINFO;
