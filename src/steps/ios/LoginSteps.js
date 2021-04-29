import allureReporter from '@wdio/allure-reporter'
import LoginPage from "../../pages/ios/app/LoginPage";
import MorePage from "../../pages/ios/app/MorePage";
import PostPage from "../../pages/ios/app/PostPage";
import BaseSteps from "../BaseSteps";



class LoginSteps extends BaseSteps {

    login(login, password) {
            allureReporter.startStep(`выполнена авторизация c логином "${login}" и паролем "${password}"`)
            super.click(MorePage.menuButton("Регистрация и вход"), "Регистрация и вход")
            super.setValue(LoginPage.username, "Пользователь", login)
            super.setValue(LoginPage.password, "Пароль", password)
            super.click(LoginPage.submitBtn, "Войти")
            // MorePage.menuButton("Регистрация и вход").click()
            // LoginPage.username.setValue(login)
            // LoginPage.password.setValue(password)
            // LoginPage.submitBtn.click()
            chaiExpect(PostPage.title.isExisting()).to.equal(true)
            allureReporter.endStep("passed")
    }

}

export default new LoginSteps()