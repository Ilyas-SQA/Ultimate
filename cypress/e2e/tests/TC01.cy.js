import ultimateqa from '../pageAction/ultimateqa'




beforeEach(() => {
    cy.visit('https://ultimateqa.com/')

})




describe('empty spec', () => {
    it('[TC01] User Should be able to visit UltimateQa Website ', () => {
        ultimateqa.ultimateqaMenu()
    })

    it('[TC03] User Should be able to visit JavaSDET Menu option in Navigation Bar ', () => {
        ultimateqa.JavaSDET()

    })

    it.skip('[TC04] User Should be able to visit Success Stories Menu in Navigation Bar ', () => {
        ultimateqa.SuccessStories()

    })

    it.skip('[TC05] User Should be able to visit Learning Menu in Navigation Bar ', () => {
        ultimateqa.Learning()

    })

    it.skip('[TC06] User Should be able to visit Blog Menu in Navigation Bar ', () => {
        ultimateqa.Blog()

    })

    it.skip('[TC07] User Should be able to check the functionality of search bar in Navigation Bar ', () => {
        ultimateqa.Search()

    })



})
