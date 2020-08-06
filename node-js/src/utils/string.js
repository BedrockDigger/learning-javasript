toFirstCaps = function(string){
    firstLetter = string.charAt(0).toUpperCase()
    string = string.toLowerCase()
    string = string.slice(1)
    string = firstLetter + string
    return string
}

// console.log(toFirstCaps('chENgDu'))

module.exports = toFirstCaps