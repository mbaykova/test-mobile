import MenuPage from "./MenuPage";

class MorePage extends MenuPage {

    menuButton(name) { return $('~' + name)}

}

export default new MorePage()