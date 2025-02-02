// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

/* my Version 
function getAllDirectors(movies) {
  const allDirectors = movies.map((name) => {
    return name.director;
  });
}
*/

function getAllDirectors(movies) {
  return movies.map((name) => {
    return name.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevenSpielbergMovies = movies.filter((film) => {
    return film.director === "Steven Spielberg" && film.genre.includes("Drama");
  });
  return stevenSpielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const sumMovieScores = moviesArray.reduce((accumulator, movie) => {
    if (typeof movie.score === "undefined" || movie.score === "") {
      return accumulator;
    } else {
      return accumulator + movie.score / moviesArray.length;
    }
  }, 0);
  return Math.round(sumMovieScores * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  const dramaScoreAve = scoresAverage(dramaMovies);
  return dramaScoreAve;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesClone = [...moviesArray];
  moviesClone.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return moviesClone;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map((movie) => {
    return movie.title;
  });
  titles.sort();
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesClone = [...moviesArray];
  const newArray = moviesArray.map((movie) => {
    const durationArray = movie.duration.split(" ");
    const h = parseInt(durationArray[0]) * 60;
    const min = durationArray.length > 1 ? parseInt(durationArray[1]) : 0;
    return {
      ...movie,
      duration: h + min,
    };
  });
  return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
