import allureReporter from '@wdio/allure-reporter'
import LoginPage from "../../pages/android/LoginPage";




class LoginSteps {

    login(login, password) {
        LoginPage.logIn.click()
        LoginPage.username.setValue(login)
        LoginPage.password.setValue(password)
        LoginPage.submit.click()
    }

}

export default new LoginSteps()