describe('coba',function(){
    it('coba Login Gagal',function(){
        cy.visit('https://admin.pkh.dojobox.id')
        cy.get('#input-email').type('farhan')
        cy.get('#input-password').type('farhan')
        cy.get('#btn-login').click()
        cy.contains('Nama Pengguna atau Kata Sandi Anda tidak cocok').should('exist')
    })
    it('coba Login berhasil',function(){
        cy.visit('https://admin.pkh.dojobox.id')
        cy.get('#input-email').type('e@dojobox.id')
        cy.get('#input-password').type('admin')
        cy.get('#btn-login').click()
        cy.contains('Super Admin').should('exist')
    })
})