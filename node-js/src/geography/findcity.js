const citiesDB = require('all-the-cities')
// const toFirstCaps = require('../utils/string')

findCity = function (name) {
    const city = citiesDB.find(function (it) {
        return it.name.toLowerCase() === name.toLowerCase()
    })
    return city
}

// console.log(findCity('Chengdu'))
// console.log(findCity('Seattle'))


module.exports = findCity