import ProfilePage from "../../pages/ios/app/ProfilePage";
import BaseSteps from "../BaseSteps";
import allureReporter from "@wdio/allure-reporter";

class ProfileSteps extends BaseSteps {

    exit(){
        allureReporter.startStep(`выполнен выход из приложения`)
        super.click(ProfilePage.exitBtn, "Выйти")
        super.click(ProfilePage.exitBtn, "Выйти")
        allureReporter.endStep("passed")
    }
}

export default new ProfileSteps()