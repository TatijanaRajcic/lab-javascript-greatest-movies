/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  let sortedArray;
  if (array.length === 1) {
    sortedArray = array;
  } else if (array.length === 0) {
    sortedArray = ["Error"];
  } else {
    sortedArray = array.sort(function(movieA,movieB) {
      if (movieA.year !== movieB.year) {
        return movieA.year - movieB.year
      } else {
        return movieA.title.localeCompare(movieB.title)
      }
    })
  }
  return sortedArray
}
// orderByYear(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
  let number = array.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length
  return number
}
// howManyMovies(movies)

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
  let orderedArray = [...array];
  orderedArray.sort(function(movieA,movieB){
    return movieA.title.localeCompare(movieB.title)
  })
  let shortenArray;
  if (orderedArray.length > 20) {
    shortenArray = orderedArray.slice(0,20)
  } else {
    shortenArray = orderedArray
  }
  let finalArray = shortenArray.map(movie => movie.title)
  return finalArray
}
// orderAlphabetically(movies)

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
  let initialValue = 0;
  if (array.length === 0 ){
    return 0
  }
  let totalRates = array.reduce(function(accumulator,currentValue) {
    if (isNaN(currentValue.rate)) {
      return accumulator
    }
    return accumulator + currentValue.rate
  },initialValue) // we MUST supply an initial value to the reducer while working with an array of objects
  return Math.round((totalRates / array.length) * 100) / 100 
}
// ratesAverage(movies)

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
  let dramaMovies = array.filter(movie => movie.genre.includes("Drama"))
  return ratesAverage(dramaMovies) // we can't just call the function ratesAverage and expect a return value from it. We have to return smthing in every function
}
//dramaMoviesRate(movies)

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array){
  let newArray = array.map(function(movie){
    let modifiedMovie = {...movie};
    let duration = movie.duration;
    let hour = 0;
    let minutes = 0;
    if (duration.split("h").length !== 1) { // we don't have only minutes
      hour = parseInt(duration.split("h")[0])
    }
    if (duration.length === 8 ) {
      minutes = parseInt(duration.slice(duration.length-5, duration.length-3))
    } else if (duration.length !== 8 && duration.split("h").length === 1) { // we only have minutes
      minutes = parseInt(duration.slice(0,3))
    }
    let newTime = hour*60 + minutes;
    modifiedMovie.duration = newTime
    return modifiedMovie;
  })
  return newArray
}
// turnHoursToMinutes(movies)

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(array){
  
}