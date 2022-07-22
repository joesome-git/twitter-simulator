class User {
    constructor(username) {
        this.username = username;
        this.following = {};
    }

    addFollowing = (user) => {
        // Only add if not already added - collision
        if (!this.following[user.getUsername()]) {
            this.following[user.getUsername()] = user;
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