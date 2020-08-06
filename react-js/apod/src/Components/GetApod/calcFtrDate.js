function calcFtrDate(interval) {

    var targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + interval)

    var dateString = targetDate.getFullYear() + '-'
        + ('0' + (targetDate.getMonth() + 1)).slice(-2) + '-'
        + ('0' + targetDate.getDate()).slice(-2)


    return dateString
}

// console.log(calcFtrDate(10))

module.exports = calcFtrDate