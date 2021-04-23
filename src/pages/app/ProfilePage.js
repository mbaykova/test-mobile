import MenuPage from "./MenuPage";

class ProfilePage extends MenuPage {
    get exitBtn() { return $('~Выйти') }
}

export default new ProfilePage()