class Feed {
    constructor(tweet) {
        this.tweets = [tweet];
    }

    addTweet = (tweet) => {
        this.tweets.push(tweet);
    }

    getTweets = () => {
        return this.tweets;
    }
}

module.exports = Feed;