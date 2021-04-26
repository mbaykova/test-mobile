import MenuPage from "./MenuPage";

const termsOfUse = 'label == "Пользовательское соглашение"'
const linkSelector = 'type == "XCUIElementTypeLink"'
const titleSelector = 'type == "XCUIElementTypeNavigationBar"'

class AboutAppPage extends MenuPage {

    get termOfUseBtn() { return $(`-ios predicate string:${termsOfUse}`) }
    get link() { return $(`-ios predicate string:${linkSelector}`) }
    get title() { return $(`-ios predicate string:${titleSelector}`) }
    get closeTermsOfUse() { return $('~Остановить') }
}

export default new AboutAppPage()