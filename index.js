const _SORT = require('./modules/sort');
const _USERS = require('./modules/users');
const _TWEETS = require('./modules/tweets');

const run = async () => {

    try {

        const tweetsData = await _TWEETS.readData('tweet.txt');
        const usersData = _SORT.sortByKey(await _USERS.readData('user.txt'));

        for (const key in usersData) {

            const username = usersData[key].username;

            console.log(`${username}`);

            tweetsData[username]?.map((tweet) => {
                // print user tweets 
                console.log(`\t@${username}: ${tweet}`);
                // print tweets of user's following
                usersData[key]?.following.map((following) => {
                    tweetsData[following]?.map((tweet) => {
                        console.log(`\t@${following}: ${tweet}`);
                    });
                })
            });
        }
    } catch (error) {
        console.error(error);
    }
}

run();