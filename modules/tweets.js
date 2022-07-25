const fs = require('fs');
const readline = require('readline');
const Feed = require('../classes/Feed');
const Tweet = require('../classes/Tweet');

/**
 * https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line
 * @param filename - name of file to open
 * @returns JSONObject containing all tweetFeed data
 */

const readData = async (filename) => {

    const tweetFeed = {};

    try {
        // read file contents
        const fileData = readline.createInterface({
            input: fs.createReadStream(`files/${filename}`),
            crlfDelay: Infinity
        });

        let tweetId = 0;

        for await (const line of fileData) {

            let username = line.split('> ')[0];
            let message = line.split('> ')[1].substring(0, 139);
            // ensure only 140 characters are stored in each message

            const newTweet = new Tweet({ tweetId, username, message });

            // read each line and populate tweetFeed object map for each user
            if (!tweetFeed[username]) {
                tweetFeed[username] = new Feed(newTweet)
            } else {
                tweetFeed[username].addTweet(newTweet);
            }

            tweetId++;
        }

    } catch (error) {
        console.error(`Failed to read file: ${filename}`);
        throw error;
    } finally {
        return tweetFeed;
    }
}

exports.readData = readData;