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



//print only first 10 comments
const displayCommentData = ( comments ) => {
    // const slicedComments = comments.slice( 0, 10 );
    comments.forEach( comment => {
        // console.log( comment );
        const containerDiv = document.getElementById( 'commments-conainer' );
        const p = document.createElement( 'p' );
        const hr = document.createElement( 'hr' );
        p.innerText = `
            Post ID: ${ comment.postId }
            ID: ${ comment.id }
            Name: ${ comment.name }
            Email: ${ comment.email }
            Boddy: ${ comment.body }
        `;
        containerDiv.appendChild( p );
        containerDiv.appendChild( hr );
    } );

}

document.getElementById( 'display-button' ).addEventListener( 'click', () => {
    const url = 'https://jsonplaceholder.typicode.com/comments'
    loadCommentData( url );
} );