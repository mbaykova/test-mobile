import allureReporter from '@wdio/allure-reporter'
import LoginSteps from "../steps/LoginSteps";
import MoreSteps from "../steps/MoreSteps";
import PostSteps from "../steps/PostSteps";
import ProfileSteps from "../steps/ProfileSteps";
import AboutAppSteps from "../steps/AboutAppSteps";
import BrowserSteps from "../steps/BrowserSteps";
import SearchResultSteps from "../steps/SearchResultSteps";


describe('iOS', function () {


    it('Авторизация', function () {
        LoginSteps.login("79107748572", "12345678")
     //   loginStep();
        PostSteps.goToMore()
        MoreSteps.checkExistMenuItem("Мой профиль")
    });

    // it ('Поиск отправления', function (){
    //     LoginSteps.login("79107748572", "12345678")
    //     PostSteps.search("RU123456789RU")
    //     SearchResultSteps.checkTitle("RU123456789RU")
    //     SearchResultSteps.existInfoAboutTrackItem()
    //     SearchResultSteps.existRenameButton()
    // });
    //
    // it ('Переход в браузер', function (){
    //     allure.createStep("выполнена авторизация", index=> {
    //         LoginSteps.login("79107748572", "12345678")
    //     })
    //
    //     PostSteps.goToMore()
    //     MoreSteps.goToMenuItem("О приложении")
    //     AboutAppSteps.goToBrowserPage("https://www.pochta.ru")
    //     BrowserSteps.backToApp()
    //     AboutAppSteps.checkTitle("Соглашение")
    // });

    beforeEach(function () {
        browser.setTimeout({ 'implicit': 5000 })
        PostSteps.goToMore()
        if (MoreSteps.existMenuItem("Мой профиль")) {
            MoreSteps.goToMenuItem("Мой профиль")
            ProfileSteps.exit()
        }

    });

});