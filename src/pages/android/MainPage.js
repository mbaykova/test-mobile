

const addSelector = 'new UiSelector().description("Camera")'
const statusSelector = 'new UiSelector().textContains("Finish")'
const buttonFeedSaveSelector = 'new UiSelector().resourceId("com.instagram.android:id/row_feed_button_save")'

class MainPage {

    get addBtn() { return $(`android=${addSelector}`)}
    get status() { return $(`android=${statusSelector}`)}
    get buttonFeedSave() { return $(`android=${buttonFeedSaveSelector}`)}
}

export default new MainPage()