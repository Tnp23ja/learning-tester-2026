describe('E2E - Admin Search Journey', () => {
  it('ควรจะ Login และเข้าไปค้นหาชื่อพนักงานได้ถูกต้อง', () => {
    // 1. Login เข้าไปก่อน
    cy.visit('https://opensource-demo.orangehrmlive.com/', { timeout: 15000 })
    cy.get('input[name="username"]', { timeout: 15000 }).type('Admin')
    cy.get('input[name="password"]').type('admin123') // รหัสจริงของเว็บเดโมครับ
    cy.get('button[type="submit"]').click()

    // 2. คลิกไปที่เมนู PIM (ระบบจัดการพนักงาน)
    // ใช้คำสั่ง .contains() เพราะมันหาง่ายจากตัวหนังสือ
    cy.contains('PIM', { timeout: 10000 }).click()

    // 3. ลองพิมพ์ชื่อพนักงานในช่อง Employee Name
    // เราจะรอให้หน้าโหลดเสร็จก่อนด้วยการหา element สักตัว
    cy.get('.oxd-autocomplete-text-input > input', { timeout: 10000 }).first().type('Amelia')
    
    // 4. กดปุ่ม Search
    cy.get('button[type="submit"]').click({force: true})

    // 5. ตรวจคำตอบ (Assertion)
    // เช็คว่าในตารางผลลัพธ์ มีคำว่า 'Charlie' โผล่มาไหม
   // cy.get('.oxd-table-card').should('contain', 'Charlie')
   // โดยเพิ่ม timeout ให้ยาวขึ้น เพราะบางที Server เดโมมันช้าครับ
    cy.get('.oxd-table-card', { timeout: 10000 }) // เพิ่มเป็น 10 วินาที
      .should('exist') // เช็คว่าแถวในตารางต้องเกิดขึันมาก่อน
      .should('contain', 'Amelia') // แล้วค่อยเช็คว่ามีชื่อ Charlie ไหม
  })
})