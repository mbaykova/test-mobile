import allureReporter from '@wdio/allure-reporter'
import PostMainPage from "../../pages/ios/browser/PostMainPage";
import BaseSteps from "../BaseSteps";

class BrowserSteps extends BaseSteps {

    backToApp() {
        allureReporter.startStep(`выполнен возврат в приложение`)
        super.click(PostMainPage.openApp, "Открыть")
        allureReporter.endStep("passed")
    }

}

export default new BrowserSteps()