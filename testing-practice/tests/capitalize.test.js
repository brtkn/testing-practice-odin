const { TestScheduler } = require('jest');
const capitalize = require('../code/capitalize');

test('returns a string the FIRST CHARACTER CAPITALIZED ', () => {
    expect(capitalize('megaa')).toBe('Megaa');
});