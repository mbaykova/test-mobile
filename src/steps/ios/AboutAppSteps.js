import allureReporter from '@wdio/allure-reporter'
import AboutAppPage from "../../pages/ios/app/AboutAppPage";
import AgreementPage from "../../pages/ios/browser/AgreementPage";
import SearchResultPage from "../../pages/ios/app/SearchResultPage";
import BaseSteps from "../BaseSteps";

class AboutAppSteps extends BaseSteps {

    goToBrowserPage(link) {
        allureReporter.startStep(`выполнен переход в браузере "${link}"`)
        super.click(AboutAppPage.termOfUseBtn, "Пользовательское соглашение")
        super.click(AboutAppPage.link, "Ссылка")
        AgreementPage.urlInput.setValue("")
        super.setValue(AgreementPage.urlInput, "url", link)
        super.click(AgreementPage.go, "Перейти по ссылке")
        // AboutAppPage.termOfUseBtn.click()
        // AboutAppPage.link.click()
        // AgreementPage.urlInput.setValue(link)
        // AgreementPage.go.click()
        allureReporter.endStep("passed")
    }

    checkTitle(title) {
        allureReporter.startStep(`присутствует заголовок "${title}"`)
        chaiExpect(SearchResultPage.title.getAttribute("name")).to.equal(title)
        allureReporter.endStep("passed")
    }




}

export default new AboutAppSteps()