import allureReporter from "@wdio/allure-reporter";

class BaseSteps {

    click(element, title){
        allureReporter.startStep(`выполнено нажатие на "${title}"`)
        element.click()
        allureReporter.endStep("passed")
    }

    setValue(element, title, value){
        allureReporter.startStep(`поле "${title}" заполняется значением "${value}"`)
        element.setValue(value)
        allureReporter.endStep("passed")
    }

}

export default BaseSteps
