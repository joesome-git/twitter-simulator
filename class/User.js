class User {
    constructor(username) {
        this.username = username;
        this.following = [];
    }

    addFollowing = (username) => {
        // Only add if not already added - collision
        if (!this.following.includes(username)) {
            this.following.push(username);
        }
    }

    setUsername = (username) => {
        this.username = username;
    }

    getUsername = () => {
        return this.username;
    }

    getFollowing = () => {
        return this.following;
    }
}

module.exports = User;