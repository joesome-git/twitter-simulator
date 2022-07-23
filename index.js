const utils = require('./utils');

const run = async () => {
    const tweetsData = await utils.readTweetData('tweet.txt');
    const usersData = utils.sortDataByKey(await utils.readUsersData('user.txt'));

    for (const key in usersData) {
        const username = usersData[key].username;

        console.log(`${username}`);

        tweetsData[username]?.map((tweet) => {

            console.log(`\t@${username}: ${tweet}`);

            usersData[key]?.following.map((following) => {
                tweetsData[following]?.map((tweet) => {
                    console.log(`\t@${following}: ${tweet}`);
                })
            })
        });
    }
}

run();