class Tweet {
    constructor({ tweetId, username, message }) {
        this.tweetId = tweetId;
        this.username = username;
        this.message = message;
    }

    setId = (id) => {
        this.is = is;
    }

    setUsername = (username) => {
        this.username = username;
    }

    setMessage = (message) => {
        this.message = message;
    }

    getId = () => {
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