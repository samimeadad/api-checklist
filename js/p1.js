/* const loadCountriesData = async ( url ) => {
    const res = await fetch( url );
    const data = await res.json();
    displayCountriesData( data );
}

const url1 = 'https://restcountries.eu/rest/v2/all';
loadCountriesData( url1 );

const displayCountriesData = ( countries ) => {
    for ( const country of countries ) {
        const borders = country.borders;
        if ( borders.length == 0 ) {
            console.log( country.name );
        }
    }
} */

const loadCommentData = async ( url ) => {
    const res = await fetch( url );
    const data = await res.json();
    displayCommentData( data );
}

loadCommentData( 'https://jsonplaceholder.typicode.com/comments' );

//print only first 10 data
const displayCommentData = ( comments ) => {
    const slicedComments = comments.slice( 0, 10 );
    slicedComments.forEach( comment => console.log( comment ) );
}