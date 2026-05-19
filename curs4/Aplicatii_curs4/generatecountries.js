fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        const countriesData = data.map(country => ({
            name: country.name.common, // Numele comun al țării
            capital: country.capital ? country.capital[0] : 'Nu există capitală', // Capitala (verificare pentru cazul în care nu există)
            languages: country.languages ? Object.values(country.languages) : [], // Limbile (convertite din obiect în array)
            population: country.population,
            flag: country.flags.png, // Link către imaginea steagului
            currency: country.currencies ? Object.values(country.currencies)[0].name : 'Nu există monedă' // Moneda
        }));

        console.log(countriesData); // Afișează array-ul cu datele țărilor
    })
    .catch(error => console.error('Eroare la fetching date:', error));