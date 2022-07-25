class Feed {
    constructor(tweet) {
        this.setTweets([tweet]);
    }

    setTweets = (tweets) => {
        this.tweets = tweets;
    }

    addTweet = (tweet) => {
        this.tweets.push(tweet);
    }

    getTweets = () => {
        return this.tweets;
    }
}

module.exports = Feed;