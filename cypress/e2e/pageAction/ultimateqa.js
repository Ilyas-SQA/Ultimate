/**************** [TC02] Selectors **********/

const LINK_UltimateProfessioanl = '//div[@class="et_pb_menu__menu"]//ul[@id="menu-home-page-menu"]//li//a[text() = "Professional Services"]'
const LINK_UltimateViewCaseStudies = '//div//a[text() = "View Case Studies"]'
const LINK_UltimateCaseStudyOne = '(//p[@class="et_pb_testimonial_meta"])[1]'

/******************* [TC03] Selectors */
const LINK_UltimateJavaSDET = '(//a[text() = "Java SDET Academy"])[1]'
const Page_UltimatePage = '(//div[@class="section__overlay"])[1]'
const LINK_UltimateLearnMore = '//a[@class="btn btn--solid btn--medium btn--auto"]'
const BTN_UltimateNextBTN = '//button[@aria-label="Next"]'
const LINK_UltimateExtendFirstone = '(//div[@class="accordion background-light"])[1]'
const LINK_UltimateExtendSecond = '(//div[@class="accordion background-light"])[2]'
const LINK_UltimateExtendThird = '(//div[@class="accordion background-light"])[3]'



/****************** [TC04] selectors */
const LINK_UltimateSuccessStories = '(//a[text() = "Success Stories"])[1]'
const VEDIO_UltimateVedio = '(//source[@type="video/webm"])[1]'

/********************* [TC05] selectors */
const LINK_UltimateLearning = '(//div//li[@class="et_pb_menu_page_id-217437 menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-217440"]//a[text() = "Learning"])[1]'
const LINK_UltimateAbout = '//div//ul[@id="menu-footer-menu"]//a[text() = "About"]'
const LINK_UltimateTermsCondition = '//div//ul[@id="menu-footer-menu"]//a[text() = "Terms and conditions"]'
const LINK_UltimateContactUs = '//div//ul[@id="menu-footer-menu"]//a[text() = "Contact Us"]'
const LINK_UltimateCancel = '//div//span[text() = "Cancel"]'
const LINK_UltimateLogo = '//div[@class="et_pb_menu__logo-wrap"]'

/************ [TC06] selectors */
const LINK_UltimateBlog = '(//div//li[@class="et_pb_menu_page_id-213448 menu-item menu-item-type-post_type menu-item-object-page menu-item-214031"]//a[text() = "Blog"])[1]'


/********************  [TC07] Selectors */
const LINK_UltimateSearch = '//input[@class="et_pb_s"]'
const TXT_UltimateSearchBtn = '//input[@class="et_pb_searchsubmit"]'

/**************** Learning  */
const DRP_UltimateLearning = '//div[@class="et_pb_menu__menu"]//ul//li//a[text() = "Learning"]'
const LINK_UltimateFreeCourse = '(//ul//li//a[text() = "Free Courses"])[1]'
const LINK_UltimateSecondpage = '(//li//a[@class="pagination__page-number"])[2]'
const IMG_UltimateLOGO = '//a//img[@class="logo img-responsive"]'

const link_Ultimate = '(//a[text() = "Case Study Results"])[1]'

class ultimateqa {



    ultimateqaMenu() {


        cy.scrollTo("bottom", { duration: 5000 })
        cy.wait(1000)
        cy.scrollTo("top", { duration: 5000 })
        //cy.xpath(link_Ultimate).click()
    }
    //Professional() {

    //  cy.xpath(LINK_UltimateProfessioanl).click()
    // cy.wait(1000)
    // cy.xpath(LINK_UltimateViewCaseStudies).click()
    //cy.wait(1000)
    // cy.xpath(LINK_UltimateCaseStudyOne).click({ Force: true })
    // cy.wait(1000)

    //}

    JavaSDET() {
        cy.xpath(LINK_UltimateJavaSDET).click()
        cy.wait(1000)
        // cy.xpath(LINK_UltimateLearnMore).click()
        // cy.wait(1000)
        // cy.xpath(BTN_UltimateNextBTN).click()
        // cy.wait(1000)
        // cy.xpath(BTN_UltimateNextBTN).click()
        // cy.wait(1000)
        // cy.xpath(LINK_UltimateExtendFirstone).click({ Froce: true })
        // cy.wait(4000)
        // cy.xpath(LINK_UltimateExtendFirstone).click({ Froce: true })
        // cy.wait(1000)
        // cy.xpath(LINK_UltimateExtendSecond).click({ Froce: true })
        // cy.wait(4000)
        // cy.xpath(LINK_UltimateExtendSecond).click({ Froce: true })

        // cy.wait(1000)
        // cy.xpath(LINK_UltimateExtendThird).click({ Froce: true })
        // cy.wait(4000)
        // cy.xpath(LINK_UltimateExtendThird).click({ Froce: true })
        // cy.xpath(LINK_UltimateLearning).click()


    }

    SuccessStories() {

        //cy.visit('https://ultimateqa.com/')
        cy.xpath(LINK_UltimateSuccessStories).click()
        cy.wait(2000)
        cy.scrollTo("bottom", { duration: 5000 })
        cy.wait(1000)
        cy.scrollTo("top", { duration: 5000 })

    }

    Learning() {

        //cy.wait(2000)
        cy.xpath(DRP_UltimateLearning).realHover()
        cy.wait(4000)
        cy.xpath(LINK_UltimateFreeCourse).click()
        cy.wait(4000)
        cy.scrollTo("bottom", { duration: 2000 })
        // cy.wait(1000)
        // cy.scrollTo("top", { duration: 5000 })
        //cy.wait(1000)
        cy.xpath(LINK_UltimateSecondpage).click()
        cy.wait(1000)
        cy.xpath(IMG_UltimateLOGO).click()
        cy.wait(1000)
        cy.xpath(IMG_UltimateLOGO).click()

        // cy.xpath(LINK_UltimateAbout).click()
        // cy.xpath(LINK_UltimateAbout).should('contain', "About")
        // cy.wait(2000)
        // cy.xpath(LINK_UltimateLearning).click()
        // cy.wait(2000)
        // cy.xpath(LINK_UltimateProfessioanl).click()
        // cy.wait(2000)
        // cy.xpath(LINK_UltimateLearning).click()
        // cy.wait(2000)

        // cy.wait(2000)
        // cy.xpath(LINK_UltimateContactUs).click()
        // cy.wait(2000)
        // cy.xpath(LINK_UltimateContactUs).should('contain', "Contact Us")
        // cy.wait(2000)
        // cy.xpath(LINK_UltimateLogo).click()


    }

    Blog() {

        cy.xpath(LINK_UltimateBlog).click()
        cy.wait(2000)
        cy.scrollTo("bottom", { duration: 5000 })
        cy.wait(1000)
        cy.scrollTo("top", { duration: 5000 })

    }

    Search() {

        cy.EnterText(LINK_UltimateSearch, 'Blog')
        cy.wait(2000)
        cy.xpath(TXT_UltimateSearchBtn).click()
        cy.wait(1000)
        cy.scrollTo("bottom", { duration: 5000 })
        cy.wait(1000)
        cy.scrollTo("top", { duration: 5000 })

    }


}



export default new ultimateqa