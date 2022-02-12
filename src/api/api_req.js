const url = 'https://servicodados.ibge.gov.br/api/v1/paises/';

async function getCountries() {
    await fetch(url)
    .then(res => res.json())
    .then(countries => console.log(countries[0]))
    .catch(err => console.log('Error'));
}

export default getCountries;