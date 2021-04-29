Для разработки тестов использовались библиотеки:

* webdriver io - фреймворк автоматизации, запускает тесты на основе Appium и WebDriver
* mocha - тестовый фреймворк
* chai - библиотека ассертов 
* allure - генерация отчетов

Структура проекта

* src\pages\android - классы PageObject для андроид 
* src\pages\android - классы PageObject для ios
* src\steps\android - методы по работе с android
* src\steps\ios - методы по работе с ios
* src\tests\android - тесты для android
* src\tests\ios - тесты для ios
* test-config-android.js - конфигурационный файл для запуска тестов по android
* test-config-ios.js -  - конфигурационный файл для запуска тестов по ios
* test-config-main.js - общий конфигурационный файл
* test-config-main-parallel.js, * test-config-parallel-android.js - конфигурацонные файлы для параллельного запуска
* test-photo.png - фото для загрузки в галлерею

Запуск тестов

* Для запуска тестов по iOS выполнить команду: npm test run ./test-config-ios.js
* Для запуска тестов по android выполнить команду: npm test run ./test-config-android.js
* Для параллельного запуска тестов по андроид: npm test run ./test-config-parallel-android.js
* Для выполнения тестов должен быть запущен Appium, порт 4723
* Для параллельного запуска должно быть запущено 2 инстанса Appium (порты 4723 и 4724)

Отчет

* Allure - отчет формируется в директории ./allure-report, для открытия отчета в среде разарботки WebStorm 
  выбрать  index.html и в контекстном меню выбрать "Open in browser" или воспользоваться утилитой Allure command-line tool - https://www.npmjs.com/package/allure-commandline
  и выполнить команду - "allure open" в директории ./allure-report
