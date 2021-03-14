const ceasarChipher = require('../code/ceasarCipher');

test('Test 1 ', () => {
    expect(ceasarChipher('mega')).toBe('zrtn');
})

test('Test Punctuation', ()=> {
    expect(ceasarChipher('split, and run')).toBe('fcyvg, naq eha')
})

test('Test Keeping the Same Case', ()=> {
    expect(ceasarChipher('SaMe CaSe')).toBe('FnZr PnFr');
})

