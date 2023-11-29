const countries = document.getElementById('countries-list')
const getCountries = async (fetchCountries) => {

try {
    const response = await fetch ("https://restcountries.com/v3/all");
    const data = await response.json()
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].name.common, data[i].flags[1], data[i].capital, data[i].population, data[i].car.side )
        let templateCountries = 
            `<div class="pais">
            <img src="${data[i].flags[1]}"></img>
            <h3>${data[i].name.common}</h3>
            <p>${data[i].capital}</p>
            <p>${data[i].population}</p>
            <p>${data[i].car.side}</p>
            </div>`
        countries.innerHTML += templateCountries
    }
    } catch (error) {
        console.log('Error al obtener los datos', error);
    }
}

getCountries()
