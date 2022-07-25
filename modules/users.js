const fs = require('fs');
const readline = require('readline');
const User = require('../classes/User');

/**
 * https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line
 * @param filename - name of file to open
 * @returns JSONObject containing all user data
 */

const readData = async (filename) => {

    const users = {};

    try {
        // read file contents
        const fileData = readline.createInterface({
            input: fs.createReadStream(`files/${filename}`),
            crlfDelay: Infinity
        });

        for await (const line of fileData) {

            const username = line.split(' follows ')[0];
            const following = line.split(' follows ')[1].replace(/\s/g, '');

            // read each line and populate users object map
            if (!users[username]) {
                users[username] = new User(username);
            }


            following.split(',').map((followsUsername) => {
                // read each line and populate users object
                if (!users[followsUsername]) { // if user (following) does not already exists, add to users object map
                    users[followsUsername] = new User(followsUsername);
                }
                // add user as follower to `followsUsername`
                users[username]?.addFollowing(followsUsername);
            });
        }
    } catch (error) {
        console.error(`Failed to read file: ${filename}`);
        throw error;
    } finally {
        return users;
    }
}

exports.readData = readData;