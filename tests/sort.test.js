// https://jestjs.io/

const _SORT = require('../modules/sort');

test('sort object by key', async () => {
    const testData = {
        'a': {
            'key': 'a'
        },
        'b': {
            'key': 'b'
        },
        'd': {
            'key': 'd'
        }
    };

    const sorted = _SORT.sortObjectByKey({
        'd': {
            'key': 'd'
        },
        'b': {
            'key': 'b'
        },
        'a': {
            'key': 'a'
        }
    });

    expect(sorted).toEqual(testData);
});

test('sort array by key', async () => {
    const testData = [
        {
            'key': 'a'
        },
        {
            'key': 'b'
        },
        {
            'key': 'd'
        }
    ];

    const sorted = _SORT.sortArrayByKey([
        {
            'key': 'd'
        },
        {
            'key': 'b'
        },
        {
            'key': 'a'
        }
    ]);

    expect(sorted).toEqual(testData);
});