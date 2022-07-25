class Tweet {
    constructor(index, message, username) {
        this.index = index;
        this.message = message;
        this.username = username;
    }

    getIndex = () => {
        return this.index;
    }

    getMessage = () => {
        return this.message;
    }
    
    getUsername = () => {
        return this.username;
    }
}