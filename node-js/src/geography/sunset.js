const { getSunset } = require('sunrise-sunset-js')
const findCity = require('./findcity')
// const toFirstCaps = require('../utils/string')

findCitySunset = function (name) {
    targetObj = findCity(name)
    tLat = targetObj.loc.coordinates[1]
    tLong = targetObj.loc.coordinates[0]
    const sunsetTime = getSunset(tLat, tLong)
    return sunsetTime
}

// console.log(findCitySunset('Chengdu'))

module.exports = findCitySunset