import allureReporter from '@wdio/allure-reporter'
import PostPage from "../pages/PostPage";

class PostSteps {

    goToMore() {
     //   PostPage.moreBtn.waitForClickable({ timeout: 3000 })
        PostPage.moreBtn.click()
    }

}

export default new PostSteps()