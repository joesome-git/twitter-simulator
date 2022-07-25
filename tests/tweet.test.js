// https://jestjs.io/

const Tweet = require('../class/Tweet');
const Feed = require('../class/Feed');
const _USERS = require('../modules/users');
const _TWEETS = require('../modules/tweets');

test('get users', async () => {
    const testUser = {
        username: 'Alan',
        following: ['Martin']
    }

    const users = await _USERS.readData('user.txt');

    expect(users['Martin']?.getFollowing()).toEqual([]);
    expect(users['Alan']?.getUsername()).toBe(testUser?.username);
    expect(users['Alan']?.getFollowing()).toEqual(testUser?.following);
});

test('add tweets to feed', async () => {
    const testData = [
        {
            tweetId: 0,
            username: 'Alan',
            message: 'Tweet 0'
        },
        {
            tweetId: 1,
            username: 'Ward',
            message: 'Tweet 1'
        }
    ];

    const newTweet1 = new Tweet(testData[0]);
    const tweetFeed = new Feed(newTweet1);

    expect(tweetFeed.getTweets().length).toBe(1);
    expect(tweetFeed.getTweets()[0].getUsername()).toBe('Alan');
    
    const newTweet2 = new Tweet(testData[0]);
    tweetFeed.addTweet(newTweet2);
    expect(tweetFeed.getTweets().length).toBe(2);
});

test('get tweets', async () => {
    const testData = {
        tweetId: 0,
        username: 'Alan',
        message: 'If you have a procedure with 10 parameters, you probably missed some.'
    };

    const feedData = await _TWEETS.readData('tweet.txt');

    expect(feedData['Martin']?.getTweets()).toBe(undefined);
    
    expect(feedData['Alan']?.getTweets().length).toBe(2);
    expect(feedData['Alan']?.getTweets()[0].getTweetId()).toEqual(testData?.tweetId);
    expect(feedData['Alan']?.getTweets()[0].getUsername()).toEqual(testData?.username);
    expect(feedData['Alan']?.getTweets()[0].getMessage()).toEqual(testData?.message);
});