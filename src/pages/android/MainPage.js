

const addSelector = 'new UiSelector().description("Camera")'
const commentSelector = 'new UiSelector().resourceId("com.instagram.android:id/feed_inline_composer_button_textview")'
const statusSelector = 'new UiSelector().textContains("Finish")'

class MainPage {

    get addBtn() { return $(`android=${addSelector}`)}
    get status() { return $(`android=${statusSelector}`)}

}

export default new MainPage()