const fs = require('fs');
const readline = require('readline');
const User = require('./src/User');

/**
 * https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line
 */

const readUsersData = async (filename) => {

    const users = {};

    const fileData = readline.createInterface({
        input: fs.createReadStream(`src/input/${filename}`),
        crlfDelay: Infinity
    });

    for await (const line of fileData) {

        const username = line.split(' follows ')[0];
        const following = line.split(' follows ')[1].replace(/\s/g, '');

        // Only add if not already added - collision
        if (!users[username]) {
            users[username] = new User(username);
        }

        following.split(',').map((followsUsername) => {
            const newUser = new User(followsUsername);

            users[username].addFollowing(newUser);

            // Only add if not already added - collision
            if (!users[followsUsername]) {
                users[followsUsername] = newUser;
            }
        })
    }

    return users;
}

const readTweetData = async (filename) => {

    const tweets = {};

    const fileData = readline.createInterface({
        input: fs.createReadStream(`src/input/${filename}`),
        crlfDelay: Infinity
    });

    for await (const line of fileData) {
        let username = line.split('> ')[0];
        let tweet = line.split('> ')[1];


        if (!tweets[username]) {
            tweets[username] = {
                username,
                tweets: [tweet]
            };
        } else {
            tweets[username].tweets.push(tweet);
        }
    }

    return tweets;
}

const sortDataByKey = (data) => {
    
    return Object.keys(data).sort().reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
    }, {});
}

exports.readUsersData = readUsersData;
exports.readTweetData = readTweetData;
exports.sortDataByKey = sortDataByKey;

