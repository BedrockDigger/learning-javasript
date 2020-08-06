const citiesDB = require('all-the-cities')
const cities = require('all-the-cities')
const findAirports = require('./geography/airports')
const findCitySunset = require('./geography/sunset')

findCity = require('./geography/findcity')

subArray = citiesDB.filter(function (it) {
    if (it.population > 10000000) {
        return true
    }
    return false
})

console.log(subArray.length)



console.log(findCity('Seattle'))

showDiff = function (city1, city2) {

    const c1 = findCity('Chengdu')

    const c2 = findCity('Seattle')

    const diff = c1.population - c2.population

    return diff

}

console.log(showDiff('chengdu', 'seattle'))
console.log(findAirports('bEIjIng'))
console.log(findCitySunset('HonG KoNG'))