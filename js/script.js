'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll(".promo__adv img"),
        poster = document.querySelector(".promo__bg"),
        gener = poster.querySelectorAll(".promo__genre"),
        movieList = document.querySelectorAll(".promo__interactive-list"),
        form = document.querySelector(".add"),
        addMovie = form.querySelector(".adding__input"),
        confirmAdd = form.lastElementChild,
        recycle = document.querySelectorAll(".delete"),
        makeFavorite = form.querySelectorAll("input");

    adv.forEach(item => {
        item.remove();
    });

    gener.textContent = "драма";

    poster.style.backgroundImage = "url(img/bg.jpg)";

    movieList[0].innerHTML = "";

    movieDB.movies.sort();

    movieDB.movies.forEach((film, i) => {
        movieList[0].innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
        `;
    });

    confirmAdd.addEventListener("click", confirmAddMovie);
    confirmAdd.addEventListener("click", addFavoriteMovie);

    confirmAdd.addEventListener("click", (event) => {
        event.preventDefault();
    });

    // recycle.addEventListener("click", deleteMovie);

    function confirmAddMovie() {
        if (addMovie.value) {
            movieDB.movies.push(addMovie.value);
            if (addMovie.value.length > 21) {
                movieList[0].innerHTML += `
                    <li class="promo__interactive-item">${movieDB.movies.length} ${addMovie.value.substr(0, 21) + '...'}
                        <div class="delete"></div>
                    </li>`;
            } else {
                movieList[0].innerHTML += `
                    <li class="promo__interactive-item">${movieDB.movies.length} ${addMovie.value}
                        <div class="delete"></div>
                    </li>`;
                console.log(movieDB.movies);
                console.log(addMovie.value.length);
            }
        }
    }

    function addFavoriteMovie() {
        makeFavorite.forEach(fav => {
            if (fav.type == 'checkbox') {
                if (fav.checked) {
                    console.log("Добавляем любимый фильм");
                }
            }
        });
    }
    // console
    function deleteMovie() {
        recycle.forEach((del, i) => {
            del.addEventListener("click", () => {
                recycle[i].parentNode.remove();
            });
        })
    }
    deleteMovie();
});




