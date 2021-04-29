import allureReporter from '@wdio/allure-reporter'
import LoginPage from "../../pages/android/LoginPage";
import BaseSteps from "../BaseSteps";


class LoginSteps extends BaseSteps {

    login(login, password) {
        allureReporter.startStep(`выполнена авторизация c логином "${login}" и паролем "${password}"`)
        super.click(LoginPage.logIn, "Log in")
        super.setValue(LoginPage.username, "Пользователь", login)
        super.setValue(LoginPage.password, "Пароль", password)
        super.click(LoginPage.submit, "Войти")
        allureReporter.endStep("passed")
    }

}

export default new LoginSteps()