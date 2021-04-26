import allureReporter from '@wdio/allure-reporter'
import LoginSteps from "../steps/android/LoginSteps";
import NewPostPage from "../pages/android/NewPostPage"
import PostSteps from "../steps/android/PostSteps";

describe('Android', function () {


    it('Авторизация', function () {
        LoginSteps.login("mobile_test43210", "test123456")
        PostSteps.addNewPostByCamera()
    });


    beforeEach(function () {
        browser.setTimeout({ 'implicit': 10000 })

    });

});