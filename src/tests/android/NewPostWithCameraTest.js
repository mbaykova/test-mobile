import LoginSteps from "../../steps/android/LoginSteps";
import PostSteps from "../../steps/android/PostSteps";

describe('Android', function () {

    const login = "mobiletest43210"
    const password = "test654321"

    it('Добавление нового поста с использованием камеры', function () {
             LoginSteps.login(login, password)
             PostSteps.addNewPostByCamera()
             PostSteps.checkPostExist()
    });


    beforeEach(function () {
        driver.setTimeout({ 'implicit': 10000 })

    });


});