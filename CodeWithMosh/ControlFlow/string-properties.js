const movie = {
    title: 'Superman',
    releaseYear: 2019,
    rating: 9,
    director: 'Tom'

};


showProperties(movie)

function showProperties(obj) {
    for (let key in obj)
        console.log(key);

}