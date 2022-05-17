it('ボタンをクリックする', () => {
  cy.visit('/')
  cy.findByTestId("clickable-button").click()
})
