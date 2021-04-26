

const usernameSelector = 'new UiSelector().resourceId("com.instagram.android:id/login_username")'
const passwordSelector = 'new UiSelector().resourceId("com.instagram.android:id/password")'
const submitSelector = 'new UiSelector().resourceId("com.instagram.android:id/button_text")'
const loginSelector = 'new UiSelector().resourceId("com.instagram.android:id/log_in_button")'

class LoginPage {

    get username() { return $(`android=${usernameSelector}`)}
    get password() { return $(`android=${passwordSelector}`)}
    get logIn() { return $(`android=${loginSelector}`)}
    get submit() { return $(`android=${submitSelector}`)}

}

export default new LoginPage()