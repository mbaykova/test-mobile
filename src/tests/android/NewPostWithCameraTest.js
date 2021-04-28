import allureReporter from '@wdio/allure-reporter'
import LoginSteps from "../../steps/android/LoginSteps";
import NewPostPage from "../../pages/android/NewPostPage"
import PostSteps from "../../steps/android/PostSteps";

describe('Android', function () {

    const login = "mobile_test43210"
    const password = "test123456"

    it('Добавление нового поста с использованием камеры', function () {
             LoginSteps.login(login, password)
             PostSteps.addNewPostByCamera()
             PostSteps.checkPostExist()
    });


    beforeEach(function () {
        driver.setTimeout({ 'implicit': 10000 })

    });


});