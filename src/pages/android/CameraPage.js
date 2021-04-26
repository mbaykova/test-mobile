

const doPhotoSelector = 'new UiSelector().resourceId("com.instagram.android:id/camera_shutter_button")'

class MainPage {

    get doPhotoBtn() { return $(`android=${doPhotoSelector}`)}

}

export default new MainPage()