describe('E2E - Admin Search Journey', () => {
  it('ควรจะ Login และเข้าไปค้นหาชื่อพนักงานได้ถูกต้อง', () => {
    // เข้า website
    cy.visit('https://www.saucedemo.com/', { timeout: 15000 })
    cy.get('input[name="user-name"]', { timeout: 15000 }).type('standard_user')
    cy.get('input[name="password"]', { timeout: 15000 }).type('secret_sauce')
    cy.get('input[type="submit"]').click()
    //cy.get('[data-test="product-sort-container"]').select('lohi')
    // .select() ใช้สำหรับเลือก option ใน drop-down ได้แม่นยำกว่า .click()
    //cy.get('[data-test="add-to-cart-sauce-labs-onesie"]', { timeout: 15000 }).click()
    cy.get('[data-test="product-sort-container"]')
      .should('have.value','az')

    cy.get('[data-test="product-sort-container"]').select('Name (Z to A)')
    cy.get('[data-test="product-sort-container"]').should('have.value','za')
  })
})
