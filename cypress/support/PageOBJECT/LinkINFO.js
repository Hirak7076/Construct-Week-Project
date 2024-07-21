class LinkOBJECT{
    //assigning a link variable
    linkclick(link){
        //clicking the value of variable
        
        cy.contains(link).click().should('be.visible'); 
        
    }
}
export default LinkOBJECT;