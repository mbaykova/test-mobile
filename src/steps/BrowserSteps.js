import allureReporter from '@wdio/allure-reporter'
import PostMainPage from "../pages/ios/browser/PostMainPage";

class AboutAppSteps {

    fillFieldEmailAndSave(email) {
        PostMainPage.email.setValue(email)
        PostMainPage.save.click()
    }

    backToApp() {
        PostMainPage.openApp.click()
    }

}

export default new AboutAppSteps()