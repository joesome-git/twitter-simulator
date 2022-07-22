class User {
    constructor(name) {
        this.name = name;
        this.followers = {};
        this.following = {};
        this.userTweets = [];
        this.twitterFeed = [];
    }

    addFollowers = (user) => {
        // Only add if not already added - collision
        if (!this.follower[user.getUsername()]) {
            this.follower[user.getUsername()] = user;
        }
    }

    addFollowing = (user) => {
        // Only add if not already added - collision
        if (!this.following[user.getUsername()]) {
            this.following[user.getUsername()] = user;
        }
    }

    addUserTweet = (tweet) => {
        this.userTweets.push(tweet);
        this.twitterFeed.push(tweet);
    }

    getUsername = () => {
        return this.name;
    }

    getFollowers = () => {
        return this.followers;
    }

    getUserTweets = () => {
        return this.userTweets;
    }

    getTwitterFeed = () => {
        return this.twitterFeed;
    }
}

module.exports = User;