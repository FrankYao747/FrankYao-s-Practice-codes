const form = document.querySelector('#searchForm');


const getMovie = async (searchTerm) => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`, config);
        return res.data;
        // console.log(res.data[0].show.image.medium);
        // return res.data[0].show.image.medium;
    } catch (e) {
        return "No Movies Available!"
    }

}




const makeImages = async (shows) => {

    for (let result of shows) {
        if (result.show.image) {
            // console.log(result.show.image.medium);
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // document.body.remove(img);
    // document.body.remove(h2);

    // console.log("Submited!");
    const searchTerm = form.elements.query.value;
    const resData = await getMovie(searchTerm);
    const h2 = document.createElement('h2');

    h2.innerText = `Results of "${searchTerm}":`;
    document.body.append(h2);
    await makeImages(resData);
    form.elements.query.value = '';



});












