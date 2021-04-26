import allureReporter from '@wdio/allure-reporter'
import LoginPage from "../pages/ios/app/LoginPage";
import MorePage from "../pages/ios/app/MorePage";
import PostPage from "../pages/ios/app/PostPage";
import BaseSteps from "./BaseSteps";


// const loginStep = allure.createStep("login", (login,password) => {
//     MorePage.menuButton("Регистрация и вход").click()
//     LoginPage.username.setValue(login)
//     LoginPage.password.setValue(password)
//     testStep(LoginPage.submitBtn)
//     LoginPage.submitBtn.click()
//     chaiExpect(PostPage.title.isExisting()).to.equal(true)
// });


class LoginSteps extends BaseSteps {

    login(login, password) {
            MorePage.menuButton("Регистрация и вход").click()
            LoginPage.username.setValue(login)
            LoginPage.password.setValue(password)
            // testStep(LoginPage.submitBtn)
            LoginPage.submitBtn.click()
            chaiExpect(PostPage.title.isExisting()).to.equal(true)

    }

}

export default new LoginSteps()