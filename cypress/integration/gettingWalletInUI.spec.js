/// <reference types="cypress" />
const data = require('../../test/__mocks__/ethplorer-response-tokens-unsorted-mock')

// The most commonly used query is 'cy.get()', you can
// think of this like the '$' in jQuery
// https://on.cypress.io/get

context('Fresh Route', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('checks for a form and button', () => {
    let searchField = cy.get('.search-area input[type="text"]')
    searchField.should('have.value', '')
    searchField.type(data.address)
    searchField.should('have.value', data.address)
    
    cy.get('.search-area').submit()
    
    let walletInfo = cy.get('.results-area .wallet-info')
    walletInfo.find('.address').should('contain',data.address)
    
    let walletTable = cy.get('.results-area .wallet-holdings')
    walletTable.find('thead tr:first-of-type').should('contain', 'Asset')
  })
})

context('Existing Route', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/?address=${data.address}`)
  })

  it('checks for a form and button', () => {
    let searchField = cy.get('.search-area input[type="text"]')
    searchField.should('have.value', data.address)
    
    let walletInfo = cy.get('.results-area .wallet-info')
    walletInfo.find('.address').should('contain',data.address)
    
    let walletTable = cy.get('.results-area .wallet-holdings')
    walletTable.find('thead tr:first-of-type').should('contain', 'Asset')
  })
})
