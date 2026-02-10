describe("เข้าเว็บ Cyber rich digital", () => {
  beforeEach(() => {
    // ดักจับ React Hydration Error ที่ทำให้ Cypress พัง
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit("https://cyberrichdigital.com/");
    cy.get('h1').should('contain', 'ไซเบอร์ริช');
  });

  it("เข้าไปที่หน้าบริการ โดยการคลิ๊กปุ่ม", () => {
   cy.contains('บริการ').first().click()
   cy.get('h1').should('contain', 'บริการของ Cyber Rich Digital');
  });

  it("เข้าไปที่หน้าผลิตภัณฑ์ โดยการคลิ๊กปุ่ม", () => {
   cy.contains('ผลิตภัณฑ์').first().click()
   cy.get('h1').should('contain', 'ผลิตภัณฑ์ของ Cyber Rich Digital');
  });

  it("เข้าไปที่หน้าผลงาน โดยการคลิ๊กปุ่ม", () => {
   cy.contains('ผลงาน').first().click()
   cy.get('h1').should('contain', 'ผลงานของ Cyber Rich Digital');
  });

   it("เข้าไปที่หน้าบทความ โดยการคลิ๊กปุ่ม", () => {
   cy.contains('บทความ').first().click()
   cy.get('h1').should('contain', 'บทความ และข่าวสารของ Cyber Rich Digital');
  });

  it("เข้าไปที่หน้าเกี่ยวกับเรา โดยการคลิ๊กปุ่ม", () => {
   cy.contains('เกี่ยวกับเรา').first().click()
   cy.get('h1').should('contain', 'เกี่ยวกับเรา');
  });

  it("เข้าไปที่หน้าติดต่อเรา โดยการคลิ๊กปุ่ม", () => {
   cy.contains('ติดต่อเรา').first().click()
   cy.get('h1').should('contain', 'ติดต่อเรา Cyber Rich Digital');
  });
  
  it("เปลี่ยนภาษา โดยการคลิ๊กปุ่ม", () => {
  cy.get('button[class*="ant-dropdown-trigger"]').contains('TH').click()
  cy.get('span[class*="ant-dropdown-menu-title-content"]').contains('EN').click()
  cy.get('h1').should('contain', 'Cyber Rich Digital');
  });

});
