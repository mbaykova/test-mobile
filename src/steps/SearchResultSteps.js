import allureReporter from '@wdio/allure-reporter'
import SearchResultPage from "../pages/app/SearchResultPage";

class SearchResultSteps {

    checkTitle(title) {
        chaiExpect(SearchResultPage.title.getAttribute("name")).to.equal(title)
    }

    existInfoAboutTrackItem() {
        chaiExpect(SearchResultPage.aboutTrackItem.isExisting()).to.equal(true)
    }

    existRenameButton() {
        chaiExpect(SearchResultPage.renameTrackItem.isExisting()).to.equal(true)
    }

}

export default new SearchResultSteps()