import allureReporter from '@wdio/allure-reporter'
import LoginSteps from "../../steps/android/LoginSteps";
import NewPostPage from "../../pages/android/NewPostPage"
import PostSteps from "../../steps/android/PostSteps";

describe('Android', function () {

    const login = "mobile_test43210"
    const password = "test123456"
    const fileName = "test-photo.png"

    it('Добавление нового поста - фото из галереи', function () {
          PostSteps.addPhotoToDevice(fileName)
          PostSteps.getFileFromDevice()
         LoginSteps.login(login, password)
         PostSteps.addNewPostFromGallery()
         PostSteps.checkPostExist()
    });

    afterEach(function () {
         console.log("after each - Добавление нового поста - фото из галереи")
        PostSteps.deleteFileFromDevice(fileName)

    });

    beforeEach(function () {
        driver.setTimeout({ 'implicit': 10000 })

    });


});