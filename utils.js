const fs = require('fs');
const readline = require('readline');
const User = require('./User');

/**
 * https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line
 */

const readUsersData = async (filename) => {
    const users = {};

    const fileData = readline.createInterface({
        input: fs.createReadStream(`input/${filename}`),
        crlfDelay: Infinity
    });

    for await (const line of fileData) {
        const username = line.split(' follows ')[0];
        const following = line.split(' follows ')[1].replace(/\s/g, '');

        // Only add if not already added - collision
        if (!users[username]) {
            users[username] = new User(username);
        }

        following.split(',').map((name) => {
            const newUser = new User(name);

            users[username].addFollowing(newUser);

            // Only add if not already added - collision
            if (!users[name]) {
                users[name] = newUser;
            }
        })
    }

    return users;
}

const readTweetData = async (users, filename) => {

    const fileData = readline.createInterface({
        input: fs.createReadStream(`input/${filename}`),
        crlfDelay: Infinity
    });

    for await (const line of fileData) {
        let username = line.split('> ')[0];
        let tweet = line.split('> ')[1];
        users[username].addUserTweet(tweet);
    }
}

exports.readUsersData = readUsersData;
exports.readTweetData = readTweetData;

