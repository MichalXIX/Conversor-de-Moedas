const convertButton = document.querySelector(".covert-button")
const currencySelectA = document.querySelector(".currency-select-a")


function convertValues() {
    const currencyToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValue = document.querySelector(".value-currency")
    const inputCurrency = document.querySelector(".input-currency")

    const dolarToday = 5.45
    const euroToday = 5.86

    if (currencySelectA.value == "dolar") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency.value)

        currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency.value * dolarToday)
    }

    if (currencySelectA.value == "euro") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency.value)

        currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency.value * euroToday)
    }

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const imageOne = document.querySelector(".image-currency-to-convert")

    if (currencySelectA.value == "dolar") {
        imageOne.src = "./assets/estados-unidos (1) 1.png"
        currencyName.innerHTML = "Dólar"
    }

    if (currencySelectA.value == "euro") {
        imageOne.src = "./assets/euro.png"
        currencyName.innerHTML = "Euro"
    }

    convertValues()
}




convertButton.addEventListener("click", convertValues)
currencySelectA.addEventListener("change", changeCurrency)
