class user {
    constructor(userName , email , password) {
        this.userName = userName;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `this is my password ${this.password}`
    }
}

const user1 = new user("hello" , "hello@gmail.com" , "123456")
console.log(user1.encryptPassword())