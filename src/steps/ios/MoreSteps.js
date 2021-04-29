import allureReporter from '@wdio/allure-reporter'
import LoginPage from "../../pages/ios/app/LoginPage";
import MorePage from "../../pages/ios/app/MorePage";
import PostPage from "../../pages/ios/app/PostPage";
import BaseSteps from "../BaseSteps";

class MoreSteps extends BaseSteps{

    goToMenuItem(menuItem) {
        allureReporter.startStep(`выбран пункт меню "${menuItem}"`)
        super.click(MorePage.menuButton(menuItem), menuItem)
        allureReporter.endStep("passed")
    }

    checkExistMenuItem(menuItem) {
        allureReporter.startStep(`присутствует пункт меню "${menuItem}"`)
        chaiExpect(this.existMenuItem(menuItem)).to.equal(true)
        allureReporter.endStep("passed")
    }

    existMenuItem(menuItem) {
        return MorePage.menuButton(menuItem).isExisting()
    }
}

export default new MoreSteps()