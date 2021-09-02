var randomUser= generateRandoumUser()
function generateRandoumUser(){
    const time=new Date().getTime()
    return 'farhan'+time+'@dojobox.id'
}

describe('Facilitator',function(){
    this.beforeEach(()=>{
        cy.loginDashboard()
    })
    it('Tambah Facilitator',function(){
        cy.contains('Tambah Facilitator').click()
        cy.contains('Tambah Data Fasilitator').should('exist')
        cy.get('input[type="file"]').attachFile('logo.jpg')
        cy.get('#user_fullname').type('Farhan Test 1')
        cy.get('#user_email').type(randomUser)
        cy.get('#user_is_active').select('Aktif')
        
        cy.get('#user_password').type('admin123')
        cy.get('#user_province_id').select('JAWA BARAT')
        cy.get('#user_city_id').select('KAB. BOGOR')
        cy.get('#user_subdistrict_id').select('Kemang')
        cy.get('#user_address').type('Masih didunia')
        cy.get('#user_area_province_id').select('BALI')
        cy.get('#user_area_city_id').select('KOTA DENPASAR')
        cy.get('#user_area_subdistrict_id').select('Denpasar Timur')
        cy.contains('Simpan').click()
        cy.contains('Penambahan fasilitator berhasil diproses').should('exist')

    })
    it('Lihat Facilitator',function(){
        cy.get('#dataTable_filter > label > .form-control').type('Farhan')
        cy.wait(5000)
        cy.get('tbody > :nth-child(1) > .dt-center').click()
        cy.get('[href="facilitator/detail/70"]').contains('Lihat').click()
        cy.contains('Detail Data Fasilitator').should('exist')
    })
    it('Ubah Facilitator',function(){
        cy.get('#dataTable_filter > label > .form-control').type('Farhan')
        cy.wait(2000)
        cy.get('tbody > :nth-child(1) > .dt-center').click()
        cy.get('[href="facilitator/edit/70"]').contains('Ubah').click()
        // cy.get('a[class="dropdown-item"]').contains('Ubah').click()
    })
    it('Non-aktifkan Facilitator',function(){
        cy.get('#dataTable_filter > label > .form-control').type('Farhan')
        cy.wait(2500)
        cy.get('tbody > :nth-child(1) > .dt-center').click()
        cy.contains('Nonaktifkan').click()
        cy.contains('Perubahan fasilitator berhasil diproses').should('exist')
    })
    it('Aktifkan Facilitator',function(){
        cy.get('#dataTable_filter > label > .form-control').type('Farhan')
        cy.wait(2500)
        cy.get('tbody > :nth-child(1) > .dt-center').click()
        cy.contains('Aktifkan').click()
        cy.contains('Perubahan fasilitator berhasil diproses').should('exist')
    })
})