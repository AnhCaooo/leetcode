var countAndSay = function(n) {
    let result = "1"

    if (n === 1) {
        return result
    }

    for (let i = 1; i <= n; i++ ) {
        if (i === 1) {
            continue 
        }
        let arrayOfArray = []
        // split `result` string into arr 
        let resultArr = result.split('')
        let appearance = 1
        for (let index = 0; index < resultArr.length; index++) {
            if (resultArr[index] === resultArr[index + 1 ] ) {
                appearance++ 
            } else {
                // key - appear
                arrayOfArray.push([resultArr[index], appearance])
                // set appearance back to default
                appearance = 1
            }
        }
        result = castArrayOfArrayToString(arrayOfArray)
    }
    return result
}

function castArrayOfArrayToString(arrayOfArray) {
    let result = ""
    for (let i = 0; i < arrayOfArray.length; i++) {
        let childArr = arrayOfArray[i]
        let key = childArr[0]
        let appearance = childArr[1]
        result += `${appearance}${key}`
    }
    return result
}
