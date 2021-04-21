import MenuPage from "./MenuPage";

const titleSelector = 'label == "Почта"'

class PostPage extends MenuPage {
    get title() { return $(`-ios predicate string:${titleSelector}`) }
}

export default new PostPage()