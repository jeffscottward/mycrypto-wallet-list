/// <reference types="cypress" />
const data = require('../../test/__mocks__/ethplorer-response-tokens-unsorted-mock')

// The most commonly used query is 'cy.get()', you can
// think of this like the '$' in jQuery
// https://on.cypress.io/get

context('Fresh Route', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('checks for a bad input', () => {
    // Type in address
    let searchField = cy.get('.search-area input[type="text"]')
    searchField.should('have.value', '')
    searchField.type('askfnasfasofnasofnsaofnasoifnasof')
    
    // Submit Form
    cy.get('.search-area').submit()
    cy.get('.results-area .wallet-holdings').should('not.exist')
  })

  it('checks for a form and button', () => {
    // Type in address
    let searchField = cy.get('.search-area input[type="text"]')
    searchField.should('have.value', '')
    searchField.type(data.address)
    searchField.should('have.value', data.address)
    
    // Submit Form
    cy.get('.search-area').submit()
    
    // Check that a wallet is now loading with this address
    cy.get('.results-area .wallet-info').find('.address').should('contain',data.address)
    
    // Strange not found errors - have to requery
    cy.get('.results-area .wallet-holdings').find('tbody tr:first-of-type td:first-of-type').should('contain', 'Ethereum')
    cy.get('.results-area .wallet-holdings').find('tbody tr:nth-of-type(2) td:first-of-type').should('contain', 'Quantstamp')
  })
})

  it('checks for a form and button', () => {
    // Type in address
    let searchField = cy.get('.search-area input[type="text"]')
    searchField.should('have.value', '')
    searchField.type(data.address)
    searchField.should('have.value', data.address)
    
    // Submit Form
    cy.get('.search-area').submit()
    
    // Check that a wallet is now loading with this address
    cy.get('.results-area .wallet-info').find('.address').should('contain',data.address)
    
    // Strange not found errors - have to requery
    cy.get('.results-area .wallet-holdings').find('tbody tr:first-of-type td:first-of-type').should('contain', 'Ethereum')
    cy.get('.results-area .wallet-holdings').find('tbody tr:nth-of-type(2) td:first-of-type').should('contain', 'Quantstamp')
  })
})

context('Existing Route', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/?address=${data.address}`)
  })

  it('checks for a form and button', () => {
    // Check that there is an address already populated
    let searchField = cy.get('.search-area input[type="text"]')
    searchField.should('have.value', data.address)
    
    // Check that a wallet is now loading with this address
    cy.get('.results-area .wallet-info').find('.address').should('contain',data.address)
    
    // Strange not found errors - have to requery
    cy.get('.results-area .wallet-holdings').find('tbody tr:first-of-type td:first-of-type').should('contain', 'Ethereum')
    cy.get('.results-area .wallet-holdings').find('tbody tr:nth-of-type(2) td:first-of-type').should('contain', 'Quantstamp')
  })
})
