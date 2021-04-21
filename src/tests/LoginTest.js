import allureReporter from '@wdio/allure-reporter'
import LoginSteps from "../steps/LoginSteps";
import MoreSteps from "../steps/MoreSteps";
import PostSteps from "../steps/PostSteps";
import ProfileSteps from "../steps/ProfileSteps";

describe('iOS', function () {


    it('Авторизация', function () {
        LoginSteps.login("79107748572", "12345678")
        PostSteps.goToMore()
        MoreSteps.checkExistMenuItem("Мой профиль")
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