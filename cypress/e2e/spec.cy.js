describe('ฝึกเทสหน้า Login', () => {
  it('ลองกรอก Login แบบผิดๆ ดูว่าระบบดักไหม', () => {
    // 1. ไปที่หน้าเว็บตัวอย่าง (เว็บนี้เขาอนุญาตให้เราฝึกเทสได้ครับ)
    cy.visit('https://opensource-demo.orangehrmlive.com/')

    // 2. ลองกรอก Username และ Password (ใช้คำสั่ง get แบบระบุ name)
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('wrong_password')

    // 3. กดปุ่ม Login
    cy.get('button[type="submit"]').click()

    // 4. ตรวจคำตอบ (Assertion)
    // เราคาดหวังว่ามันต้องขึ้นตัวหนังสือสีแดงเตือนว่า "Invalid credentials"
    cy.contains('Invalid credentials').should('be.visible')
  })
})