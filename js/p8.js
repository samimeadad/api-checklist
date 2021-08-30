document.getElementById( 'search-button' ).addEventListener( 'click', displayTeamData = () => {
    searchTeam();
} );


const loadSpinner = ( state ) => {
    const spinner = document.getElementById( 'spinner' );
    spinner.style.display = state;
}

loadSpinner( 'none' );

const loadTeamData = async url => {
    try {
        const res = await fetch( url );
        const data = await res.json();
        displayTeamInfo( data.teams );
    }
    catch ( error ) {
        clearWindow();
        displayApiError();
    }
}
document.getElementById( 'api-error' ).style.display = "none";
const displayApiError = () => {
    document.getElementById( 'api-error' ).style.display = "block";
}

const searchTeam = () => {
    const searchField = document.getElementById( 'search-field' );
    const searchText = searchField.value;
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${ searchText }`;
    searchField.value = '';
    if ( searchText.length == 0 ) {
        alert( 'NO EMPTY SEARCH!!!' );
    }
    else {
        loadTeamData( url );
        loadSpinner( 'block' );
    }

}

const displayTeamInfo = teams => {
    loadSpinner( 'none' );
    const teamContainer = document.getElementById( 'team-container' );
    clearWindow();
    teams.forEach( team => {
        const colDiv = document.createElement( 'div' );
        colDiv.classList.add( 'col' );
        colDiv.innerHTML = `
            <div onclick="loadTeamDetails('${ team.idTeam }')" id="team-card" class="card h-100 pt-3">
                <img src="${ team.strTeamBadge }" class="card-img-top img-fluid w-50 mx-auto" alt="NO BEDGE FOUND">
                <div class="card-body text-center">
                    <h5 class="card-title"><b>Team:</b> ${ team.strTeam }</h5>
                    <p class="card-text"><b>Established:</b> ${ team.intFormedYear }</p>
                    <p class="card-text"><b>Stadium:</b> ${ team.strStadium }</p>
                    <p class="card-text"><b>Nick Name:</b> ${ team.strKeywords }</p>
                    <p class="card-text"><b>Website:</b> ${ team.strWebsite }</p>
                </div>
                <div class="card-footer">
                    <a href="https://www.youtube.com/" class="btn btn-primary w-100" target="_blank">Go To Youtube</a>
                </div>
            </div>
        `;
        teamContainer.appendChild( colDiv );
    } );
}

function loadTeamDetails( teamId ) {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${ teamId }`;
    fetch( url )
        .then( res => res.json() )
        .then( data => displayDetails( data.teams[ 0 ] ) )
}

const clearWindow = () => {
    document.getElementById( 'api-error' ).style.display = "none";
    document.getElementById( 'details-container' ).textContent = '';
    document.getElementById( 'team-container' ).textContent = '';
}

const displayDetails = team => {
    window.scrollTo( 0, 40 );
    const detailContainer = document.getElementById( 'details-container' );
    detailContainer.textContent = '';
    const colDiv = document.createElement( 'div' );
    colDiv.classList.add( 'col' );
    colDiv.innerHTML = `
            <div onclick="displayDetails('${ team.strTeam }')" id="team-card" class="card h-100 pt-3" alt="NO BEDGE FOUND">
                <img src="${ team.strTeamJersey }" class="card-img-top img-fluid">
                <div class="card-body text-center">
                    <h5 class="card-title"><b>Team:</b> ${ team.strTeam }</h5>
                    <p class="card-text"><b>Established:</b> ${ team.intFormedYear }</p>
                    <p class="card-text"><b>Stadium:</b> ${ team.strStadium }</p>
                    <p class="card-text"><b>Nick Name:</b> ${ team.strKeywords }</p>
                </div>
                <div class="card-footer">
                    <a href="https://www.youtube.com/" class="btn btn-primary w-100" target="_blank">Go To Youtube</a>
                </div>
            </div>
        `;
    detailContainer.appendChild( colDiv );
}