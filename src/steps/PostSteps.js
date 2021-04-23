import allureReporter from '@wdio/allure-reporter'
import PostPage from "../pages/app/PostPage";

class PostSteps {

    goToMore() {
        PostPage.moreBtn.waitUntil(function () {
            PostPage.moreBtn.click()
            console.log("get attribute" + PostPage.moreBtn.getAttribute("value") )
            return PostPage.moreBtn.getAttribute("value") === "1"
        }, {
            timeout: 60000,
            timeoutMsg: 'не выполнен клик по элементу "Еще" за 60 секунд'
        });


    }

    search(name) {
        PostPage.searchInput.setValue(name)
        PostPage.searchButton.click()
        if (PostPage.okButton.isExisting()) {
            PostPage.okButton.click()
        }
    }

}

export default new PostSteps()