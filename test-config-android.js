const {config} = require('./test-config-main')

config.specs =  [
        './src/tests/android/*.js'
]

config.capabilities = [{
        "platformName": "Android",
        "deviceName": "Pixel_3_XL",
        "platformVersion": "8.0",
        // "app": "/Users/user/WebstormProjects/test-mobile/Instagram-179.0.0.31.132.apk",
        "app": "https://nexus.appline.ru/repository/repo/mobile-app/Instagram-179.0.0.31.132.apk",
        "appPackage" : "com.instagram.android",
        "appActivity": "com.instagram.android.activity.MainTabActivity",
        "fullReset" : "true", //удаляет приложение
        "autoGrantPermissions" : "true"

    }]
exports.config = config