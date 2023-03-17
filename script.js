const button = document.getElementById("button-value")
const select = document.getElementById("select-value")

const dolar = 5.25
const euro = 5.62
const bitcoins = 139329.75

const convertValue = () => {
    const inputReal = document.getElementById("input-real").value
    const valueReal = document.getElementById("value-real-text")
    const valueDolar = document.getElementById("value-dolar-text")

    valueReal.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReal);

    if (select.value === "US$ Dólar Americano") {
        valueDolar.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReal / dolar);
    }

    if (select.value === "€ Euro") {
        valueDolar.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReal / euro);
    }

    if (select.value === "₿ Bitcoin") {
        valueDolar.innerHTML = new Intl.NumberFormat('XBT',
            { style: 'currency', currency: 'BTC' }
        ).format(inputReal / bitcoins);
    }
}

valueSelect = () => {
    const textSection = document.getElementById("section-text")
    const imgSection = document.getElementById("section-img")

    if (select.value === "US$ Dólar Americano") {
        textSection.innerHTML = "Dólar Americano"
        imgSection.src = "./assets/estados-unidos (1) 1.svg"
    }

    if (select.value === "€ Euro") {
        textSection.innerHTML = "Euro"
        imgSection.src = "./assets/Design sem nome 1.svg"
    }

    if (select.value === "₿ Bitcoin") {
        textSection.innerHTML = "Bitcoin"
        imgSection.src = "./assets/bitcoins.png"
    }

    convertValue()

}

button.addEventListener("click", convertValue)
select.addEventListener("change", valueSelect)