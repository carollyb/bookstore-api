const { searchUser } = require("../../services/user/ListUserService")
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const authConfig = require("../../config/auth.json")

module.exports = {
    async execute(username, password) {
        try {
            const user = await searchUser(username)

            if(user.length === 0){
                throw new Error("User does not exist")
            }

            const passwordMatch = await compare(password, user[0].password);

            if(!passwordMatch) {
                throw new Error("Invalid password/username")
            }

            const token = sign({
                username: user[0].username
            }, authConfig.secret,{
                subject: user[0].username,
                expiresIn: "1d"
            })
            return token
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
}