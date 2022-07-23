const fs = require('fs');
const readline = require('readline');

/**
 * https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line
 * @param filename - name of file to open
 * @returns JSONObject containing all user data
 */

const readUsersData = async (filename) => {

    const users = {};

    const fileData = readline.createInterface({
        input: fs.createReadStream(`files/${filename}`),
        crlfDelay: Infinity
    });

    for await (const line of fileData) {

        const username = line.split(' follows ')[0];
        const following = line.split(' follows ')[1].replace(/\s/g, '');

        // Only add if not already added to prevent overwride
        if (!users[username]) {
            users[username] = {
                username, following: []
            };
        }

        following.split(',').map((followsUsername) => {
            // Only add if not already added to prevent overwride
            if (!users[followsUsername]) {
                users[followsUsername] = {
                    username: followsUsername, following: []
                };
            }

            if (!users[username]?.following.includes(followsUsername)) {
                users[username]?.following.push(followsUsername);
            }
        });
    }

    return users;
}

/**
 * https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line
 * @param filename - name of file to open
 * @returns JSONObject containing all tweets data
 */

const readTweetData = async (filename) => {

    const tweets = {};

    const fileData = readline.createInterface({
        input: fs.createReadStream(`files/${filename}`),
        crlfDelay: Infinity
    });

    for await (const line of fileData) {
        let username = line.split('> ')[0];
        let tweet = line.split('> ')[1];

        if (!tweets[username]) {
            tweets[username] = [tweet];
        } else {
            tweets[username].push(tweet);
        }
    }

    return tweets;
}

/**
 * @param data - JSONObject containing the data to sort
 * @returns JSONObject containing the sorted data
 */

const sortDataByKey = (data) => {
    return Object.keys(data).sort().reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
    }, {});
}

exports.readUsersData = readUsersData;
exports.readTweetData = readTweetData;
exports.sortDataByKey = sortDataByKey;

