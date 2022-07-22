// https://jestjs.io/

const utils = require('../utils');

test('readUserData', async () => {
    const user = {
        username: 'Alan',
        followers: {},
        userTweets: [],
        twitterFeed: []
    }

    const users = await utils.readUsersData('user.txt');

    expect(users['Alan'].getUsername()).toBe(user.username);
    expect(users['Alan'].getFollowers()).toEqual(user.followers);
    expect(users['Alan'].getUserTweets()).toEqual(user.userTweets);
    expect(users['Alan'].getTwitterFeed()).toEqual(user.twitterFeed);
});

test('readTweetData', async () => {
    const userTweets = [
        'If you have a procedure with 10 parameters, you probably missed some.',
        'Random numbers should not be generated with a method chosen at random.'
    ];

    const users = await utils.readUsersData('user.txt');
    await utils.readTweetData(users, 'tweet.txt');

    expect(users['Alan'].getUserTweets()).toEqual(userTweets);
});