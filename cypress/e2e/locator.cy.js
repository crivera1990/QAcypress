//describe - groups test cases
//it are the individual test cases (takes 2 arguments)

describe('Locator Tests', () => {
  it('A consumer is able to load a locator page', () => {
    cy.visit('https://legacy.pctest.io/')
    cy.get('.locator__hero').should('be.visible')
  })


  it('A consumer inputs a valid locator search value and initiates the search', () => {
    cy.visit('https://legacy.pctest.io/')
    
    cy.get('#locator-search-input').type("33701")
    cy.get(".locator__submit").click()
    cy.get('#locator-map-target > div').should('be.visible')
  })

  it('The locator results page loads with dealer listings ', () => {
    cy.visit('https://legacy.pctest.io/')
    cy.get('#locator-search-input').type("33701")
    cy.get(".locator__submit").click()
    //validating LocatorResults class is present
    cy.get('#locator-results-1').should('be.visible')
    //validating result list is rendering
    cy.get('#locator-results-1').should('be.visible')
  })

  it('The locator results page loads a map with map pins on the locator results page', () => {
    cy.visit('https://legacy.pctest.io/')
    cy.get('#locator-search-input').type("33701")
    cy.get(".locator__submit").click()
    //Validating map is rendering and present
    cy.get('#locator-map-target > div').should('be.visible')  
  }) 

  it('Consumer is able to navigate to dealer site', () => {
    cy.visit('https://legacy.pctest.io/')
    cy.get('#locator-search-input').type("33701")
    cy.get(".locator__submit").click()
    cy.get('[aria-labelledby="Christian\'s Dealership"] > .details > :nth-child(8) > .cta').click()
    //validate selected dealer is rendering
    cy.get('.header__dealerName').should('have.text', 'Christian\'s Dealership')
  })

  it('Failed test example', () => {
    cy.visit('https://legacy.pctest.io/')
    cy.get('#locator-search-input').type("0000")
    cy.get(".locator__submit").click()
    cy.get('#6317a150469534000154ee2d-noResultsForm-name').type("John Wick")
    cy.get('#6317a150469534000154ee2d-noResultsForm-phone').type("Testing field")
    // will fail here b/c of the (s)
    cy.get('.locatorNoResults > .form-container > .form > .form__fields > :nth-child(4) > .form__field-label').should('have.text', 'Emails')

  })
})