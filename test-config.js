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
        './src/tests/LoginTest.js'
    ],
    capabilities : [{
        "platformName": "iOS",
        "deviceName": "IPhone (Aplana)",
        "platformVersion": "13.3",
        "udid": "f649838677d945dcc7b8856714aac703d1691d4b",
        "app": "ru.russianpost.Russian-Post"
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
    }
}