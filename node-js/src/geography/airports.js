const citiesDB = require('all-the-cities')
const airports = require('airport-data')
const geodis = require('geodis')
const findCity = require('./findcity')
// const toFirstCaps = require('../utils/string')

findAirport = function (city) {
    cLat = city.loc.coordinates[1]
    cLong = city.loc.coordinates[0]
    const portslist = airports.filter(function (it) {
        distance = geodis(cLat, cLong, it.latitude, it.longitude)
        return distance < 100
    })
    return portslist
}

processCity = function (name) {
    cityObj = findCity(name)
    return findAirport(cityObj)
}

// console.log(processCity('Chengdu'))

// findShuangliu = function () {
//     const SLObj = airports.find(function (it) {
//         return it.iata === 'CTU'
//     })
//     return SLObj
// }
// const Chengdu = findCity('Chengdu')

// const testDis = geodis(findShuangliu().latitude, findShuangliu().longitude, Chengdu.loc.coordinates[1], Chengdu.loc.coordinates[0])

// console.log(testDis)


module.exports = processCity