import {Modal} from "./modal.js"
import {View} from "./view.js"

const modal = new Modal()
const view = new View()


init()

async function init() {
    await modal.loadingData()

    const sortingElements = view.sortingElements()

    modal.updateFromUrl(sortingElements)

    sortProduct()

    addEventListeners()
}

function addEventListeners() {
    view.elements.sortTypeSelect.addEventListener("change", sortProduct)
    view.elements.sortOrderSelect.addEventListener("change", sortProduct)
    view.elements.sortCategorySelect.addEventListener("change", sortProduct)
    view.elements.filterInput.addEventListener("input", filterProducts)
    view.elements.form.addEventListener("submit", resetFilter)
}

function sortProduct() {
    const sortingValue = view.sortingElementValue()

    const sortingData = modal.sortingProducts(sortingValue)

    view.renderProducts(sortingData)

    modal.updateUrl(sortingValue)
}

function filterProducts() {
    const value = this.value.toLowerCase()

    modal.filterSearch(value)

    sortProduct()
}

function resetFilter(e) {
    e.preventDefault()

    const sortingElements = view.sortingElements()

    modal.resetFilter(sortingElements)

    sortProduct()
}