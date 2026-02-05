describe('ลอง Test หน้า Lucablock', () => {

    beforeEach(() => {
    // ดักจับ React Hydration Error ที่ทำให้ Cypress พัง
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('https://lucablock.io/')
  })

  it('ลองเข้าหน้าเว็บ', () => {
    // ไปที่หน้าเว็บตัวอย่าง
    cy.get('h1').should('contain', 'Redefining PossibilitiesWith Lucablock')
  })

  it('เห็นปุ่ม logo-link กดได้', () => {
    // ใช้ *= ตามที่เราเรียนไป เพื่อหาปุ่มที่มีคำว่า pack
    cy.get('a[class*="logo-link"]').first().should('be.visible')
  })

  it('เห็นปุ่ม Join our pack', () => {
    // ใช้ *= ตามที่เราเรียนไป เพื่อหาปุ่มที่มีคำว่า pack
    cy.get('button').first().should('contain' , 'Join our pack')
  })

  it('หาปุ่มที่ชื่อ Join our pack' , () => {
    cy.get('button').filter(':contains("Join our pack")').then(($elements) =>{
        const count = $elements.lenght
        cy.log(`เจอทั้งหมด ${count} ปุ่ม`)
    })
  })

  it.only('Key ข้อมูลในช่อง Input' , () => {
    cy.get('input[id=name]').type('Thanapong')
    cy.get('input[id=email]').type('Thanapongtharakate@gmail.com')
    cy.get('textarea[id=message]').type('Hello iam Thanapong')
  })
})