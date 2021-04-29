**Используемые библиотеки**

* webdriver io - фреймворк автоматизации, запускает тесты на основе Appium и WebDriver
* mocha - тестовый фреймворк
* chai - библиотека ассертов 
* allure - генерация отчетов

**Структура проекта**

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

**Запуск тестов**

* Для запуска тестов по iOS выполнить команду: npm test run ./test-config-ios.js
* Для запуска тестов по android выполнить команду: npm test run ./test-config-android.js
* Для параллельного запуска тестов по андроид: npm test run ./test-config-parallel-android.js
* Для выполнения тестов должен быть запущен Appium, порт 4723
* Для параллельного запуска должно быть запущено 2 инстанса Appium (порты 4723 и 4724)

**Отчет**

* Allure - отчет формируется в директории ./allure-report, для открытия отчета в среде разарботки WebStorm 
  выбрать  index.html и в контекстном меню выбрать "Open in browser" или воспользоваться утилитой Allure command-line tool - https://www.npmjs.com/package/allure-commandline
  и выполнить команду - "allure open" в директории ./allure-report
  
**Задание № 1 Написать автотесты на устройствоIOS (любое) на приложение: Почта России.**

* Для написания тестов использоваля паттерн PageObject
* Перед запуском в capabilities устанавливается language : "ru", также локаторы подобраны так, чтобы не зависеть от переключения языка
  (выполнялся запуск с русским и английским языком на устройстве)
* Разработано 3 теста (см. IOSTest):
  * Авторизация
  * Поиск заданного отправления 
  * Переход в браузер - выбирается пункт меню - "О приложении", переход в пользовательское соглашение, 
  в соглашении клик на ссылку, после которого происходит редирект в браузере, 
    в браузере выполняем переход по url "https://www.pochta.ru" и нажатием на кнопку "Открыть в приложении" переходим обратно в приложение "Почта России"
    

**Задание № 2  Написать автотесты на Android девайсы (можно использовать эмулятор) на приложение Инстаграм**

* Для разработки использовались эмуляторы
* Запуск тестов выполнялся на эмуляторах с андроидом версии 6,7,8
* Разработано 2 теста
  * Добавление поста через камеру
  * Добавление поста через галлерею
      * в тесте добавляется фото в галлерею устройство, командой appium   driver.pushFile('/sdcard/' + pushFileName, data.toString('base64'));
      * после теста, файл удаляем, также очищается директория, которую создает Instagram при добавление нового поста
        пример команды для удаления:
        
        driver.executeScript('mobile: shell', [{
          command: 'rm -f',
          args: ['/sdcard/' + fileName],
          includeStderr: true
        }]);
        
* в capabilities указаны параметры
  
  "fullReset" : true - удаляет приложени
  
  "app": "https://nexus.appline.ru/repository/repo/mobile-app/Instagram-179.0.0.31.132.apk" - ссылка на скачивание приложения перед запуском теста, и его дальнейшая установка


* Для параллельного запуска создан конфигурационный файл test-config-parallel-android.js
Было создано 2 эмулятор, для них добавляются соответвующие конфигурации, необходимо указать udid эмултора.

Для запуска должно быть запущено 2 инстанса Appium и в конфигурации устройств указан соотвующий порт Appium.
Также в каждую конфигурацию добавляется путь к тестам, которые планируется с ней запускать. 
  
