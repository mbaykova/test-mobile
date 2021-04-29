import allureReporter from '@wdio/allure-reporter'
import MainPage from "../../pages/android/MainPage";
import NewPostPage from "../../pages/android/NewPostPage";
import CameraPage from "../../pages/android/CameraPage";
import BaseSteps from "../BaseSteps";


class PostSteps extends BaseSteps {

    addNewPostByCamera() {
        allureReporter.startStep(`выполнено добавление нового поста через камеру`)
        if (MainPage.buttonFeedSave.getAttribute("selected") === "false"){
            super.click(MainPage.buttonFeedSave, "Сохранить пост")
        }
        super.click(MainPage.addBtn, "Добавить")
        super.click(NewPostPage.cameraBtn, "Камера")
        super.click(CameraPage.doPhotoBtn, "Фото")
        super.click(NewPostPage.nextBtn, "Дальше")
        NewPostPage.captionEdit.waitForExist()
        super.click(NewPostPage.nextBtn, "Дальше")
        allureReporter.endStep("passed")
    }


    checkPostExist(){
        allureReporter.startStep(`добавлен новый пост`)
        MainPage.status.waitUntil(function () {
            return !MainPage.status.isExisting()
        }, {
            timeout: 60000
        });
        chaiExpect(MainPage.buttonFeedSave.getAttribute("selected")).to.equal("false")
        allureReporter.endStep("passed")
    }

    addPhotoToDevice(fileName, pushFileName) {
        allureReporter.startStep(`на устройство сохранено фото с наименованием "${pushFileName}"`)
        const fs = require('fs');
        fs.readFile(fileName, (error, data) => {
            if (error) {
                console.error(error);
                allureReporter.endStep("failed")
                return;
            }
            console.log(data.toString('base64'));
            driver.pushFile('/sdcard/' + pushFileName, data.toString('base64'));
        })
        allureReporter.endStep("passed")
    }

    addNewPostFromGallery() {
        allureReporter.startStep(`выполнено добавление нового поста через галлерею`)
        super.click(MainPage.addBtn, "Добавить")
        super.click(NewPostPage.firstPhotoInGallery, "Первое фото в галлерее")
        super.click(NewPostPage.nextBtn, "Дальше")
        super.click(NewPostPage.nextBtn, "Дальше")
        super.click(NewPostPage.nextBtn, "Дальше")
        allureReporter.endStep("passed")
    }

    deleteFileFromDevice(fileName) {
        allureReporter.startStep(`с устройства выполнено удаление фото с наименованием "${fileName}"`)
        try {
            driver.executeScript('mobile: shell', [{
                command: 'rm -f',
                args: ['/sdcard/' + fileName],
                includeStderr: true
            }]);

            driver.executeScript('mobile: shell', [{
                command: 'rm -rR',
                args: ['/sdcard/Pictures/Instagram'],
                includeStderr: true
            }]);
            driver.executeScript('mobile: shell', [{
                command: 'rm -rR',
                args: ['/sdcard/DCIM/.thumbnails'],
                includeStderr: true
            }]);
        }catch (e){
            console.log("Ошибка при удалении файла " + fileName + ". " + e.toString())
        }
        allureReporter.endStep("passed")

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