describe('coba',function(){
    it('Login Berhasil',function(){
        cy.loginDashboard()
    })
    it('Login Gagal',function(){
        cy.bukaUrl()
        cy.get('#input-email').type('e@dojobox.id')
        cy.get('#input-password').type('admin1')
        cy.get('#btn-login').click()
        cy.contains('Nama Pengguna atau Kata Sandi Anda tidak cocok').should('exist')
    })
})