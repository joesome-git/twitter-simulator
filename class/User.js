class User {
    constructor(username) {
        this.username = username;
        this.following = [];
    }

    addFollowing = (username) => {
        // Only add if not already added - collision
        // if (!this.following[newUsername]) {
        //     this.following[newUsername] = user;
        // }
        if (!this.following.includes(username)) { 
            this.following.push(username);
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