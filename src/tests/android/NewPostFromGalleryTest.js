import LoginSteps from "../../steps/android/LoginSteps";
import PostSteps from "../../steps/android/PostSteps";

describe('Android', function () {

    const login = "mobiletest43210"
    const password = "test654321"
    const fileName = "test-photo.png"
    const pushFileName = "test-photo" + new Date().getTime() + ".png"

    it('Добавление нового поста - фото из галереи', function () {
         PostSteps.addPhotoToDevice(fileName, pushFileName)
         LoginSteps.login(login, password)
         PostSteps.getFileFromDevice()
         PostSteps.addNewPostFromGallery()
         PostSteps.checkPostExist()
    });

    afterEach(function () {
         PostSteps.deleteFileFromDevice(pushFileName)

    });

    beforeEach(function () {
        driver.setTimeout({ 'implicit': 10000 })

    });


});