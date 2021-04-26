import MenuPage from "./MenuPage";

const titleSelector = 'type == "XCUIElementTypeNavigationBar"'
const renameSelector = 'label == "Переименовать отправление"'

class SearchResultPage extends MenuPage {
    get title() { return $(`-ios predicate string:${titleSelector}`) }
    get aboutTrackItem() {return $('~aboutTrackItem') }
    get renameTrackItem() {return $(`-ios predicate string:${renameSelector}`) }
}

export default new SearchResultPage()