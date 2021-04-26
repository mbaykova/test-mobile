

const addSelector = 'new UiSelector().resourceId("com.instagram.android:id/tab_icon")'

class MainPage {

    get addBtn() { return $(`android=${addSelector}`)}

}

export default new MainPage()