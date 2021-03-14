const arrayAnalysis = require('../code/arrayAnalysis')

test('Array Analysis 1', () => {
    expect(arrayAnalysis([3,5,7])).toEqual({
        average:5,
        min:3,
        max:7,
        length:3,
    })
})