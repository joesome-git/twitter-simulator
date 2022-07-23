// https://jestjs.io/

const _USERS = require('../modules/users');
const _TWEETS = require('../modules/tweets');

test('read user file', async () => {
    const testUser = {
        username: 'Alan',
        following: ['Martin']
    }

    const users = await _USERS.readData('user.txt');

    expect(users['Alan']?.username).toBe(testUser?.username);
    expect(users['Alan']?.following).toEqual(testUser?.following);
});

test('read tweets file', async () => {
    const testData = [
        'If you have a procedure with 10 parameters, you probably missed some.',
        'Random numbers should not be generated with a method chosen at random.'
    ];

    const tweets = await _TWEETS.readData('tweet.txt');

    expect(tweets['Alan']).toEqual(testData);
});