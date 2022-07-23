const _SORT = require('./modules/sort');
const _USERS = require('./modules/users');
const _TWEETS = require('./modules/tweets');

const run = async () => {
    const tweetsData = await _TWEETS.readData('tweet.txt');
    const usersData = _SORT.sortByKey(await _USERS.readData('user.txt'));

    for (const key in usersData) {
        
        const username = usersData[key].username;

        console.log(`${username}`);

        tweetsData[username]?.map((tweet) => {

            console.log(`\t@${username}: ${tweet}`);

            usersData[key]?.following.map((following) => {
                tweetsData[following]?.map((tweet) => {
                    console.log(`\t@${following}: ${tweet}`);
                });
            })
        });
    }
}

run();