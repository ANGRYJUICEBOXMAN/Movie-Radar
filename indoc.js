const apiKey = "81b513b14e6d63ac6ceea2ff873f5854";
const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        let content = '';
        data.results.forEach(({ title, overview, poster_path, id }) => {
            const movieCard = `
                <div class="card col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                    <img src="https://image.tmdb.org/t/p/w500/${poster_path}" class="card-img-top" alt="${title}">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${overview.substring(0, 100)}<span id="more${id}" class="collapse">${overview.substring(100)}</span></p>
                        <a href="reviews.html?movieId=${id}" class="btn btn-primary stretched-link">Read Reviews</a>
                    </div>
                </div>
            `;
            content += movieCard;
        });
        const container = document.getElementById("movies");
        container.innerHTML = `<div class="row">${content}</div>`;
    })
    .catch(error => console.log(error.message));