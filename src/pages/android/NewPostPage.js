

const cameraSelector = 'new UiSelector().resourceId("com.instagram.android:id/unified_camera_button")'
const nextSelector = 'new UiSelector().resourceId("com.instagram.android:id/next_button_imageview")'
const captionSelector = 'new UiSelector().resourceId("com.instagram.android:id/caption_text_view")'
const firstPhotoInGallerySelector = 'new UiSelector().description("Photo Thumbnail")'


class NewPostPage {

    get cameraBtn() { return $(`android=${cameraSelector}`)}
    get nextBtn() { return $(`android=${nextSelector}`)}
    get captionEdit() { return $(`android=${captionSelector}`)}
    get firstPhotoInGallery() { return $(`android=${firstPhotoInGallerySelector}`)}


}

export default new NewPostPage()