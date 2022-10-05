
const steps = (num) => {
    let count = 0
    if(num == 0) return 0
    while (num > 0) {
        if (num % 2 == 1) {
            num--
        } else num /= 2
        count++
    }
    return count;
}



const fizzBuzz = (n) => {
    var arr = []
    for (var i = 0; i < n; i++) {
        if (i % 15 == 0) arr.push('fizzBuzz');
        else if (i % 3 == 0) arr.push('Fizz');
        else if (i % 5 == 0) arr.push("Buzz");
        else arr.push(i)

    }
    return arr
}



const max = (accounts) => {
    let result = 0
    accounts.forEach((account) => {
        let temp = 0;
        for (let i = 0; i < account.length; i++) {
            temp += account[i]
        }
        result = Math.max(temp, result)
    });
    return result
}

