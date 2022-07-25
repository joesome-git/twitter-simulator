class User {
    constructor(username) {
        this.setUsername(username);
        this.setFollowing([]);
    }

    addFollowing = (username) => {
        // Only add if not already added - prevent duplicates
        if (!this.following.includes(username)) {
            this.following.push(username);
        }
    }

    setUsername = (username) => {
        this.username = username;
    }

    setFollowing = (following) => {
        this.following = following;
    }

    getUsername = () => {
        return this.username;
    }

    getFollowing = () => {
        return this.following;
    }
}

module.exports = User;