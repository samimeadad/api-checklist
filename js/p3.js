const loadData = async () => {
    const url = 'https://randomuser.me/api/?results=30';
    const res = await fetch( url );
    const data = await res.json();
    displayUserData( data );
}

loadData();

const displayUserData = ( data ) => {
    const users = data.results;
    const spinner = document.getElementById( 'spinner' );
    spinner.style.display = "none";
    users.forEach( user => {
        const userContainer = document.getElementById( 'user-container' );
        const div = document.createElement( 'div' );
        div.classList.add( 'card', 'rounded-3', 'border', 'border-1', 'border-primary', 'bg-light' );
        div.innerHTML = `
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${ user.picture.large }" class="img-fluid rounded mt-3" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${ user.name.title } ${ user.name.first } ${ user.name.last }</h5>
                        <p class="card-text"><b>Email:</b> ${ user.email }</p>
                        <p class="card-text"><b>Mobile:</b> ${ user.cell }</p>
                        <p class="card-text"><b>Adress:</b> <br>${ user.location.street.number } ${ user.location.street.name }, ${ user.location.city }, ${ user.location.state }, ${ user.location.postcode }, ${ user.location.country } </p>
                        <p class="card-text"><b>Coordinates:</b> <br> Latitude: ${ user.location.coordinates.latitude }<br> Longitude: ${ user.location.coordinates.longitude } </p>
                        <p class="card-text"><b>Time Zone:</b> <br> Offset: ${ user.location.timezone.offset }<br> Description: ${ user.location.timezone.description } </p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        `;
        userContainer.appendChild( div );
    } );
}