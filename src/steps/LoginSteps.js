import allureReporter from '@wdio/allure-reporter'
import LoginPage from "../pages/LoginPage";
import MorePage from "../pages/MorePage";
import PostPage from "../pages/PostPage";

class LoginSteps {

    login(login, password) {
            MorePage.menuButton("Регистрация и вход").click()
            LoginPage.username.setValue(login)
            LoginPage.password.setValue(password)
            LoginPage.submitBtn.click()
            chaiExpect(PostPage.title.isExisting()).to.equal(true)

    }

}

export default new LoginSteps()