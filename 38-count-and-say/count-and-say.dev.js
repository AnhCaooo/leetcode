var countAndSay = function(n) {
    let result = "1"

    if (n === 1) {
        return result
    }

    for (let i = 1; i <= n; i++ ) {
        console.log(`=== [Round ${i}] ===`)
        if (i === 1) {
            console.log("result after first round is 1")
            continue 
        }
        let arrayOfArray = []
        // split `result` string into arr 
        let resultArr = result.split('')
        console.log('ResultArr - ', resultArr)
        let appearance = 1
        for (let index = 0; index < resultArr.length; index++) {
            // console.log("index", index, 'resultArr[index]', resultArr[index], 'resultArr[index + 1]', resultArr[index + 1])
            if (resultArr[index] === resultArr[index + 1 ] ) {
                // console.log('current and following value are same -> increase appearance')
                appearance++ 
            } else {
                // console.log('current and following value are not same -> push to arrayOfArray')
                // key - appear
                arrayOfArray.push([resultArr[index], appearance])
                // set appearance back to default
                appearance = 1
            }
        }
        result = castArrayOfArrayToString(arrayOfArray)
    }
    console.log("End result", result)
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

countAndSay(7)