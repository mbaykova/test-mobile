import MenuPage from "./MenuPage";

const titleSelector = 'label == "Почта"'
const okBtnSelector = '//XCUIElementTypeAlert//XCUIElementTypeButton'

class PostPage extends MenuPage {
    get title() { return $(`-ios predicate string:${titleSelector}`) }
    get searchInput() {return $('~trackingItemList_searchBar') }
    get searchButton() {return $('~Search')}
    get okButton() { return $(okBtnSelector) }
}

export default new PostPage()