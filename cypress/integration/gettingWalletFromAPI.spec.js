/// <reference types="cypress" />
const data = require('../../test/__mocks__/ethplorer-response-tokens-unsorted-mock')
const getAddressData = require('../../src/utils/getAddressData')

// The most commonly used query is 'cy.get()', you can
// think of this like the '$' in jQuery
// https://on.cypress.io/get

context('API TEST', () => {
  it('cy.request() - make an XHR request', () => {
    cy.request(`https://api.ethplorer.io/getAddressInfo/${data.address}?apiKey=freekey`,)
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('ETH')
      })
  })
})


