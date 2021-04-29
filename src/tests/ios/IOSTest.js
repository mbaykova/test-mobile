import allureReporter from '@wdio/allure-reporter'
import LoginSteps from "../../steps/ios/LoginSteps";
import MoreSteps from "../../steps/ios/MoreSteps";
import PostSteps from "../../steps/ios/PostSteps";
import ProfileSteps from "../../steps/ios/ProfileSteps";
import AboutAppSteps from "../../steps/ios/AboutAppSteps";
import BrowserSteps from "../../steps/ios/BrowserSteps";
import SearchResultSteps from "../../steps/ios/SearchResultSteps";


describe('iOS', function () {

    const login = "79107748572"
    const password = "12345678"
    const searchNumber = "RU123456789RU"

    it('Авторизация', function () {
        LoginSteps.login(login, password)
        PostSteps.goToMore()
        MoreSteps.checkExistMenuItem("Мой профиль")
    });

    it ('Поиск отправления', function (){
        LoginSteps.login(login, password)
        PostSteps.search(searchNumber)
        SearchResultSteps.checkResultSearch(searchNumber)
        SearchResultSteps.existInfoAboutTrackItem()
        SearchResultSteps.existRenameButton()
    });

    it ('Переход в браузер', function (){
        LoginSteps.login(login, password)
        PostSteps.goToMore()
        MoreSteps.goToMenuItem("О приложении")
        AboutAppSteps.goToBrowserPage("https://www.pochta.ru")
        BrowserSteps.backToApp()
        AboutAppSteps.checkTitle("Соглашение")
    });

    beforeEach(function () {
        browser.setTimeout({ 'implicit': 5000 })
        PostSteps.goToMore()
        if (MoreSteps.existMenuItem("Мой профиль")) {
            MoreSteps.goToMenuItem("Мой профиль")
            ProfileSteps.exit()
        }
    });

});