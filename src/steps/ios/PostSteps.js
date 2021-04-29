import allureReporter from '@wdio/allure-reporter'
import PostPage from "../../pages/ios/app/PostPage";
import BaseSteps from "../BaseSteps";

class PostSteps extends BaseSteps{

    goToMore() {
        allureReporter.startStep(`выбран пункт меню "Еще"`)
        PostPage.moreBtn.waitUntil(function () {
            PostPage.moreBtn.click()
            console.log("get attribute" + PostPage.moreBtn.getAttribute("value") )
            return PostPage.moreBtn.getAttribute("value") === "1"
        }, {
            timeout: 60000,
            timeoutMsg: 'не выполнен клик по элементу "Еще" за 60 секунд'
        });
        allureReporter.endStep("passed")

    }

    search(name) {
        allureReporter.startStep(`выполняется поиск отправления "${name}"`)
        super.setValue(PostPage.searchInput, "Поиск", name)
        super.click(PostPage.searchButton, "Найти")
        // PostPage.searchInput.setValue(name)
        // PostPage.searchButton.click()
        if (PostPage.okButton.isExisting()) {
            // PostPage.okButton.click()
            super.click(PostPage.okButton, "Ok")
        }
        allureReporter.endStep("passed")
    }

}

export default new PostSteps()