
const calculator = {
    add: (num1, num2) => num1 + num2 ,
    sub: (num1, num2) => num1 - num2 ,
    multiply: (num1, num2) => num1 * num2 ,
    divide: (num1, num2) => {
        return (num2 === 0) ? null : num1 / num2 ;
    }
}

module.exports = calculator;