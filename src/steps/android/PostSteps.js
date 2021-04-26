import allureReporter from '@wdio/allure-reporter'
import MainPage from "../../pages/android/MainPage";
import NewPostPage from "../../pages/android/NewPostPage";
import CameraPage from "../../pages/android/CameraPage";




class LoginSteps {

    addNewPostByCamera() {
        MainPage.addBtn.click()
        NewPostPage.cameraBtn.click()
        CameraPage.doPhotoBtn.click()
        NewPostPage.nextBtn.click()
        NewPostPage.captionEdit.setValue("AutoTest" + new Date().toDateString())
        NewPostPage.nextBtn.click()



    }

}

export default new LoginSteps()