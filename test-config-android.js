let chai = require("chai")
const allure = require('allure-commandline');

exports.config = {
    runner: 'local',
    port: 4723,
    hostname: 'localhost',
    path: '/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000  //время на выполнение всего теста
    },
    maxInstances: 1,
    sync: true,
    specs: [
        './src/tests/AndroidTest.js'
    ],
    capabilities : [{
        "platformName": "Android",
        "deviceName": "Pixel_3_XL",
        "platformVersion": "8.0",
        "app": "/Users/user/WebstormProjects/test-mobile/Instagram-179.0.0.31.132.apk",
        "appPackage" : "com.instagram.android",
        "appActivity": "com.instagram.android.activity.MainTabActivity",
        "ignoreHiddenApiPolicyError" : "true",
        "autoGrantPermissions" : "true"

    }],

    reporters: [
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableMochaHooks: true
        }]
    ],

    before: function () {
        global.chaiExpect = chai.expect
    },

    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                10000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },

    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if(error){
            browser.takeScreenshot()
        }
    }

}