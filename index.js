const _SORT = require('./modules/sort');
const _USERS = require('./modules/users');
const _TWEETS = require('./modules/tweets');

const run = async () => {

    try {
        // read data from files
        const tweetsData = await _TWEETS.readData('tweet.txt');
        const usersData = _SORT.sortObjectByKey(await _USERS.readData('user.txt'));
        // console.log(tweetsData)
        for (const user in usersData) {

            const username = usersData[user]?.getUsername();

            console.log(username);
            // remove any users being followed that has no tweets to add to user twitter feed
            const followingUsers = usersData[user]?.getFollowing().filter((followingUser) => !!tweetsData[followingUser]);

            // get all tweets from users followed
            const followingUsersTweets = followingUsers.map((followingUser) => tweetsData[followingUser]);

            // if tweets by user exist, add to twitter feed along with tweets from users followed
            let twitterFeed = (tweetsData[username] || []).concat(followingUsersTweets).flat();

            // sort twitter feed according to tweets post order
            _SORT.sortArrayByKey(twitterFeed).map(({ username, tweet }) => {
                console.log(`\t@${username}: ${tweet}`);
            });
        }
    } catch (error) {
        console.error(error);
    }
}

run();