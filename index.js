const inputFilmNode = document.querySelector('.input-film');
const addFilmBtn = document.querySelector('.add-btn');
const listOfFilmsNode = document.querySelector('.films');

const films = [];

addFilmBtn.addEventListener('click', function() {
    if (!inputFilmNode.value) {
        return;
    }

    addFilm(inputFilmNode.value);
    renderList();

});

listOfFilmsNode.addEventListener('click', function(event) {
    console.log(event.target);
    if (event.target.classList.contains("delete-btn")) {
        deleteFilm(event.target);
    } 
    if (event.target.classList.contains("check-film")) {
        checkFilm(event.target);
    }
})

function checkFilm(item) {
    let closestFilm = item.closest('.film-item');
    closestFilm.classList.toggle('checked-film');
}

function deleteFilm(item) {
    let closestFilm = item.closest('.film-item');
    closestFilm.remove();
}

function addFilm(film) {
    films.push({
        title: film,
    })
    inputFilmNode.value = '';
}

function renderList() {
    let filmsHTML = '';
    films.forEach(film => {
        filmsHTML += `
        <li class="film-item">
            <span>
                <input type="checkbox" class="check-film">
                <span class="film-title">${film.title}</span>
            </span>
            <span><img src="/assets/icons/remove-btn.png" class="delete-btn"></span>
        </li>`;
    });

    listOfFilmsNode.innerHTML = `<ul>${filmsHTML}<ul>`;
}
