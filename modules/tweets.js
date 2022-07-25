const fs = require('fs');
const readline = require('readline');

/**
 * https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line
 * @param filename - name of file to open
 * @returns JSONObject containing all tweets data
 */

const readData = async (filename) => {

    const tweets = {};

    try {
        // read file contents
        const fileData = readline.createInterface({
            input: fs.createReadStream(`files/${filename}`),
            crlfDelay: Infinity
        });

        let tweetIndexPosition = 0;

        for await (const line of fileData) {
            let username = line.split('> ')[0];
            let tweet = line.split('> ')[1].substring(0, 139);
            // read each line and populate tweets object map for each user
            // ensure only 140 characters are stored in each tweet
            if (!tweets[username]) {
                tweets[username] = [{
                    key: tweetIndexPosition, username, tweet
                }];
            } else {
                tweets[username].push({
                    key: tweetIndexPosition, username, tweet
                });
            }
            tweetIndexPosition++;
        }

    } catch (error) {
        console.error(`Failed to read file: ${filename}`);
        throw error;
    } finally {
        return tweets;
    }
}

exports.readData = readData;