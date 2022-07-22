// https://jestjs.io/

const utils = require('../utils');

test('readUserData', async () => {
    const user = {
        username: 'Alan',
        following: {},
    }

    const users = await utils.readUsersData('user.txt');

    expect(users['Alan'].getUsername()).toBe(user.username);
    // expect(users['Alan'].getFollowing()).toEqual(user.following);
    // expect(users['Alan'].getTwitterFeed()).toEqual(user.twitterFeed);
});

test('readTweetData', async () => {
    const userTweets = [
        'If you have a procedure with 10 parameters, you probably missed some.',
        'Random numbers should not be generated with a method chosen at random.'
    ];

    const tweets = await utils.readTweetData('tweet.txt');

    expect(tweets['Alan']?.tweets).toEqual(userTweets);
});