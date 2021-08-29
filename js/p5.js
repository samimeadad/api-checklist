const loadData = ( url ) => {
    fetch( url )
        .then( res => res.json() )
        .then( data => displayCountries( data ) );
}

loadData( 'https://restcountries.eu/rest/v2/all' );

const displayCountries = ( countries ) => {
    countries.forEach( country => {
        const countryContainer = document.getElementById( 'container' );
        const div = document.createElement( 'div' );
        div.classList.add( 'col' );
        div.innerHTML = `
            <div class="card h-100" onclick="loadCountryByName('${ country.name }')">
                <img src="${ country.flag }" class="card-img-top w-50">
                <div class="card-body">
                    <h4 class="card-title"><b>Name:</b> ${ country.name }</h4>
                    <p class="card-text"><b>Capital:</b> ${ country.capital }</p>
                    <p class="card-text"><b>Region:</b> ${ country.region }</p>
                    <p class="card-text"><b>Native Name:</b> ${ country.nativeName }</p>
                    <p class="card-text"><b>Currency:</b> ${ country.currencies[ 0 ].name }</p>
                    <p class="card-text"><b>Language:</b> ${ country.languages[ 0 ].name }</p>
                    <p class="card-text"><b>Population:</b> ${ country.population }</p>
                    <p class="card-text"><b>Time Zone:</b> ${ country.timezones }</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary" onclick="loadCountryByName('${ country.name }')">See Details</button>
                </div>
            </div>
        `;
        countryContainer.appendChild( div );
    } );
}

const loadCountryByName = async countryName => {
    url = `https://restcountries.eu/rest/v2/name/${ countryName };`
    const res = await fetch( url );
    const data = await res.json();
    displayCountryInfo( data[ 0 ] );
}

const displayCountryInfo = country => {
    window.scrollTo( 0, 40 );
    const infoDiv = document.getElementById( 'country-info' );
    infoDiv.textContent = '';
    const div = document.createElement( 'div' );
    div.classList.add( 'card', 'mb-3', 'w-25' );
    div.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${ country.flag }" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h4 class="card-title"><b>Name:</b> ${ country.name }</h4>
                    <p class="card-text"><b>Capital:</b> ${ country.capital }</p>
                    <p class="card-text"><b>Region:</b> ${ country.region }</p>
                    <p class="card-text"><b>Native Name:</b> ${ country.nativeName }</p>
                    <p class="card-text"><b>Currency:</b> ${ country.currencies[ 0 ].name }</p>
                    <p class="card-text"><b>Language:</b> ${ country.languages[ 0 ].name }</p>
                    <p class="card-text"><b>Population:</b> ${ country.population }</p>
                    <p class="card-text"><b>Time Zone:</b> ${ country.timezones }</p>
                    <p class="card-text"><small class="text-muted">Last updated 1 mins ago</small></p>
                </div>
            </div>
        </div>
    `;
    infoDiv.appendChild( div );
}