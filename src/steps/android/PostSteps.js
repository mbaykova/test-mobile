import allureReporter from '@wdio/allure-reporter'
import MainPage from "../../pages/android/MainPage";
import NewPostPage from "../../pages/android/NewPostPage";
import CameraPage from "../../pages/android/CameraPage";
import PostPage from "../../pages/ios/app/PostPage";




class PostSteps {

    addNewPostByCamera() {
        MainPage.addBtn.click()
        NewPostPage.cameraBtn.click()
        CameraPage.doPhotoBtn.click()
        NewPostPage.nextBtn.click()
        NewPostPage.nextBtn.click()
    }


    checkPostExist(){
        chaiExpect(MainPage.status.isExisting()).to.equal(true)
    }

    addPhotoToDevice(fileName) {
        const fs = require('fs');
        fs.readFile(fileName, (error, data) => {
            if (error) {
                console.error(error);
                return;
            }
            console.log(data.toString('base64'));
            driver.pushFile('/sdcard/' + fileName, data.toString('base64'));
        })
    }

    addNewPostFromGallery() {
        MainPage.addBtn.click()
        NewPostPage.firstPhotoInGallery.click()
        NewPostPage.nextBtn.click()
        NewPostPage.nextBtn.click()
        NewPostPage.nextBtn.click()
    }

    deleteFileFromDevice(fileName) {

        driver.executeScript('mobile: shell', [{
            command: 'rm',
            args: ['/sdcard/' + fileName],
            includeStderr: true
        }]);
    }

    getFileFromDevice() {

        console.log(driver.executeScript('mobile: shell', [{
            command: 'ls',
            args: ['/sdcard/*.*'],
            includeStderr: true
        }]));
    }
}

export default new PostSteps()