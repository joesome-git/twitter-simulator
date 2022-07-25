class Tweet {
    constructor({ tweetId, username, message }) {
        this.setId(tweetId);
        this.setUsername(username);
        this.setMessage(message);
    }

    setId = (tweetId) => {
        this.tweetId = tweetId;
    }

    setUsername = (username) => {
        this.username = username;
    }

    setMessage = (message) => {
        this.message = message;
    }

    getTweetId = () => {
        return this.tweetId;
    }

    getUsername = () => {
        return this.username;
    }

    getMessage = () => {
        return this.message;
    }
}

module.exports = Tweet;