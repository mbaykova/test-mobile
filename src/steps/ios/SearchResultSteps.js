import allureReporter from '@wdio/allure-reporter'
import SearchResultPage from "../../pages/ios/app/SearchResultPage";

class SearchResultSteps {

    checkResultSearch(title) {
        allureReporter.startStep(`присутствует результат поиск "${title}"`)
        chaiExpect(SearchResultPage.title.getAttribute("name")).to.equal(title)
        allureReporter.endStep("passed")
    }

    existInfoAboutTrackItem() {
        allureReporter.startStep(`присутствует поле "Об отправлении"`)
        chaiExpect(SearchResultPage.aboutTrackItem.isExisting()).to.equal(true)
        allureReporter.endStep("passed")
    }

    existRenameButton() {
        allureReporter.startStep(`присутствует поле "Переименовать"`)
        chaiExpect(SearchResultPage.renameTrackItem.isExisting()).to.equal(true)
        allureReporter.endStep("passed")
    }

}

export default new SearchResultSteps()