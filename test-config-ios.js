const {config} = require('./test-config-main')

config.specs =  [
    './src/tests/ios/*.js'
]


config.capabilities = [{
        "platformName": "iOS",
        "deviceName": "IPhone (Aplana)",
        "platformVersion": "13.3",
        "udid": "f649838677d945dcc7b8856714aac703d1691d4b",
        "app": "ru.russianpost.Russian-Post",
         "language" : "ru",

    }]

exports.config = config