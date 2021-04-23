import allureReporter from '@wdio/allure-reporter'
import AboutAppPage from "../pages/app/AboutAppPage";
import AgreementPage from "../pages/browser/AgreementPage";
import SearchResultPage from "../pages/app/SearchResultPage";

class AboutAppSteps {

    goToBrowserPage(link) {
        AboutAppPage.termOfUseBtn.click()
        AboutAppPage.link.click()
        AgreementPage.urlInput.setValue("")
        AgreementPage.urlInput.setValue(link)
        AgreementPage.go.click()
    }

    checkTitle(title) {
        chaiExpect(SearchResultPage.title.getAttribute("name")).to.equal(title)
    }

    goToBack() {
        AboutAppPage.closeTermsOfUse.click()
    }



}

export default new AboutAppSteps()