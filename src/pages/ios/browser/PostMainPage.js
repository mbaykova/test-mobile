import BrowserPage from "./BrowserPage";

const emailSelector = '//XCUIElementTypeStaticText[@name="Мобильный телефон/Email"]/../XCUIElementTypeTextField'
const openAppSelector = '//XCUIElementTypeOther[contains(@name,"Почта России")]/XCUIElementTypeButton/XCUIElementTypeStaticText/..'
class PostMainPage extends BrowserPage {
    get email() { return $(emailSelector) }
    get save() { return $('~Сохранить') }
    get openApp() { return $(openAppSelector) }
}

export default new PostMainPage()