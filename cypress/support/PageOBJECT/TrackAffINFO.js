class TrackAffINFO{
    TrackAff(){
        cy.xpath('//input[@id="input-generator"]').click().wait(3000).contains('Apple Cinema 30"').click();

    }
}
export default TrackAffINFO;