import allureReporter from '@wdio/allure-reporter'
import LoginPage from "../pages/ios/app/LoginPage";
import MorePage from "../pages/ios/app/MorePage";
import PostPage from "../pages/ios/app/PostPage";

class MoreSteps {

    goToMenuItem(menuItem) {
        MorePage.menuButton(menuItem).click()
    }

    checkExistMenuItem(menuItem) {
        chaiExpect(this.existMenuItem(menuItem)).to.equal(true)
    }

    existMenuItem(menuItem) {
        return MorePage.menuButton(menuItem).isExisting()
    }
}

export default new MoreSteps()