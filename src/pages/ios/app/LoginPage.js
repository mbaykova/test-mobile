import MenuPage from "./MenuPage";

const usernameSelector = '//XCUIElementTypeStaticText[@name="Мобильный телефон/Email"]/../XCUIElementTypeTextField'
const passwordSelector = 'type == "XCUIElementTypeSecureTextField"'
const submitSelector = 'label == "Войти1"'

class LoginPage extends MenuPage{

    get username() { return $(usernameSelector)}
    get password() { return $(`-ios predicate string:${passwordSelector}`)}
    get submitBtn() { return $(`-ios predicate string:${submitSelector}`) }

}

export default new LoginPage()