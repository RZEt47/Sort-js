
export class View {
    constructor() {

    }

    elements = {
        productList: document.querySelector(".productList"),
        sortTypeSelect: document.querySelector("#sortType"),
        sortCategorySelect: document.querySelector("#sortCategory"),
        sortOrderSelect: document.querySelector("#sortOrder"),
        filterInput: document.querySelector("#filterInput"),
        form: document.querySelector("#form"),
    }

    highlightFilterValue(name, filterValue) {
        const lowerCaseName = name.toLowerCase()
        const lowerCaseFilterValue = filterValue.toLowerCase()

        const startIdx = lowerCaseName.indexOf(lowerCaseFilterValue)

        if (startIdx !== -1) {
            const start = name.substring(0, startIdx)
            const interval = name.substring(startIdx, startIdx + filterValue.length)
            const end = name.substring(startIdx + filterValue.length)

            const highlightedName = `${start}<span class="active">${interval}</span>${end}`

            return highlightedName;
        }

        return name;
    }

    renderProducts(arrData) {

        this.elements.productList.innerHTML = "";

        arrData.forEach((product) => {

            const name = this.highlightFilterValue(
                product.name,
                this.elements.filterInput.value
            );

            const markUp = `
                <li>
                  <span>${product.subtitle}</span>
                  <h3>${name}</h3>
                  <p>Цена: ${product.price} руб.</p>
                  <p>Дата добавления: ${product.date}</p>
                </li>
                `
            this.elements.productList.insertAdjacentHTML("afterbegin", markUp )
        })
    }

    sortingElementValue() {
        return {
            sortType: this.elements.sortTypeSelect.value,
            sortOrder: this.elements.sortOrderSelect.value,
            sortCategory: this.elements.sortCategorySelect.value
        }
    }

    sortingElements() {
        return {
            sortType: this.elements.sortTypeSelect,
            sortOrder: this.elements.sortOrderSelect,
            sortCategory: this.elements.sortCategorySelect
        }
    }
}