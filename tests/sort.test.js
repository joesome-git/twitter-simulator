// https://jestjs.io/

const _SORT = require('../modules/sort');

test('sort data by key', async () => {
    const testData = {
        'a': {
            'name': 'a'
        },
        'b': {
            'name': 'b'
        },
        'd': {
            'name': 'd'
        }
    };

    const sorted = _SORT.sortByKey({
        'd': {
            'name': 'd'
        },
        'b': {
            'name': 'b'
        },
        'a': {
            'name': 'a'
        }
    });

    expect(sorted).toEqual(testData);
});