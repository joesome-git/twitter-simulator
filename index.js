const utils = require('./utils');

const run = async () => {
    const tweets = await utils.readTweetData('tweet.txt');
    const users = utils.sortDataByKey(await utils.readUsersData('user.txt'));

    for (const key in users) {
        console.log(`${users[key].getUsername()}`);
        tweets[users[key].getUsername()]?.tweets.map((tweet) => {
            console.log(`\t@${users[key].getUsername()}: ${tweet}`);
            users[key]?.getFollowing().map((followingUser) => {
                tweets[followingUser]?.tweets?.map((tweet) => {
                    console.log(`\t@${tweets[followingUser]?.username}: ${tweet}`);
                })
            })
        });
    }
}

run();