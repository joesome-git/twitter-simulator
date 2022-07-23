const utils = require('./utils');

const run = async () => {
    const tweetsData = await utils.readTweetData('tweet.txt');
    const usersData = utils.sortDataByKey(await utils.readUsersData('user.txt'));

    for (const key in usersData) {
        const username = usersData[key].getUsername();

        console.log(`${username}`);

        tweetsData[username]?.tweets.map((tweet) => {

            console.log(`\t@${username}: ${tweet}`);

            usersData[key]?.getFollowing().map((following) => {
                tweetsData[following]?.tweets?.map((tweet) => {
                    console.log(`\t@${following}: ${tweet}`);
                })
            })
        });
    }
}

run();