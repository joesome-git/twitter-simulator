const _SORT = require('./modules/sort');
const _USERS = require('./modules/users');
const _TWEETS = require('./modules/tweets');

const run = async () => {

    try {
        // read data from files
        const feedData = await _TWEETS.readData('tweet.txt');
        const usersData = _SORT.sortObjectByKey(await _USERS.readData('user.txt'));

        for (const user in usersData) {

            const username = usersData[user]?.getUsername();

            console.log(username);
            // remove any users being followed that has no tweets to add to user twitter feed
            const followingUsers = usersData[user]?.getFollowing().filter((followingUser) => !!feedData[followingUser]);

            // get all tweets from users followed
            const followingUsersTweets = followingUsers.map((followingUser) => feedData[followingUser]);

            // if tweets by user exist, add to twitter feed along with tweets from users followed
            let twitterFeed = (feedData[user]?.getTweets() || []).concat(followingUsersTweets.map((feed) => feed?.getTweets()).flat());

            // sort twitter feed according to tweets post order
            _SORT.sortArrayByKey(twitterFeed, 'tweetId').map((tweet) => {
                console.log(`\t@${tweet.getUsername()}: ${tweet.getMessage()}`);
            });
        }
    } catch (error) {
        console.error(error);
    }
}

run();