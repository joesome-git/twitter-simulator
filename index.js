const utils = require('./utils');

const run = async () => {
    const users = await utils.readUsersData('user.txt');
    await utils.readTweetData(users, 'tweet.txt');

    // for (const username in users) {
    //     console.log(users[username].getUsername() + '\n')
    // }

    console.log(users)
}

run();

