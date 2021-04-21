import allureReporter from '@wdio/allure-reporter'
import LoginPage from "../pages/LoginPage";
import MorePage from "../pages/MorePage";
import PostPage from "../pages/PostPage";

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