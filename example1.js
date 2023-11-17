let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let answerFilmsFirst = prompt('Один из последних простмотренных фильмов', ''),
    answerFilmsSecond = prompt('Один из последних простмотренных фильмов', ''),
    answerEstimationFirst = prompt('На сколько оцените его', ''),
    answerEstimationSecond = prompt('На сколько оцените его', '');

personalMovieDB.movies[answerFilmsFirst] = answerEstimationFirst;
personalMovieDB.movies[answerFilmsSecond] = answerEstimationSecond;

console.log(personalMovieDB);