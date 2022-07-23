class User {
    constructor(username) {
        this.following = [];
        this.username = username;
    }

    addFollowing = (username) => {
        // Only add if not already added
        if (!this.following.includes(username)) {
            this.following.push(username)
        }
    }

    getUsername = () => {
        return this.username;
    }

    getFollowing = () => {
        return this.following;
    }
}

module.exports = User;