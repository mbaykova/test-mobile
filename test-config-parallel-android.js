const {config} = require('./test-config-main-parallel')


config.capabilities = [
    {
        "platformName": "Android",
        "platformVersion": "8.0",
        "app": "https://nexus.appline.ru/repository/repo/mobile-app/Instagram-179.0.0.31.132.apk",
        "appPackage" : "com.instagram.android",
        "appActivity": "com.instagram.android.activity.MainTabActivity",
        "fullReset" : "true", //удаляет приложение
        "autoGrantPermissions" : "true",
        "systemPort": 5001 ,
        port: 4724,
        udid : "emulator-5556",
        specs: [
            './src/tests/android/NewPostWithCameraTest.js'
        ]
     },
    {
        "platformName": "Android",
        "platformVersion": "8.0",
        "app": "https://nexus.appline.ru/repository/repo/mobile-app/Instagram-179.0.0.31.132.apk",
        "appPackage" : "com.instagram.android",
        "appActivity": "com.instagram.android.activity.MainTabActivity",
        "fullReset" : "true", //удаляет приложение
        "autoGrantPermissions" : "true",
        "systemPort": 5002 ,
        port: 4723,
        udid : "emulator-5554",
        specs: [
            './src/tests/android/NewPostFromGalleryTest.js'
        ]
    }
]

exports.config = config

