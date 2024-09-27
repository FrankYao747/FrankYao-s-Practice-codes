const form = document.querySelector('#searchForm');

const getMovie = async (searchTerm, config) => {
    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`, config);
        return res.data;
    } catch (e) {
        return "No Movies Available!"
    }

}


const makeImages = async (shows) => {
    n = 1;
    for (let result of shows) {
        if (result.show.image) {
            const h4 = document.createElement('h4');
            h4.innerText = `${n}. ${result.show.name}`;
            document.body.append(h4);

            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
            n += 1;
        }
    }
}



form.addEventListener('submit', async function (e) {
    e.preventDefault();
    if (form.elements.query.value != '') {
        const searchTerm = form.elements.query.value;
        const config = { params: { q: searchTerm }, headers: { Accept: 'application/json' } }

        const resData = await getMovie(searchTerm, config);
        const h2 = document.createElement('h2');

        h2.innerText = `Results of "${searchTerm}":`;
        document.body.append(h2);
        await makeImages(resData);
        form.elements.query.value = '';
    }
});



const clearButton = document.querySelector('#clear');
const deleteItems = function () {
    const h2_s = document.querySelectorAll('h2');
    for (let h2_ of h2_s) {
        h2_.remove();
    };

    const imgs = document.querySelectorAll('IMG');
    for (let img of imgs) {
        img.remove();
    };
    const h4s = document.querySelectorAll('h4');
    for (let h4 of h4s) {
        h4.remove();
    };

};

clearButton.addEventListener('click', deleteItems);








