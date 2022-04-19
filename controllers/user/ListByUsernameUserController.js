const { searchUser } = require("../../services/user/ListUserService");

module.exports = {
    async handle(request, response) {
        try {
            const { username } = request.params;
            const searchUserByUsername = await searchUser(username)
            return response.status(200).json({
                message: "User found",
                user: searchUserByUsername
            })
        } catch (error) {
            response.status(400).json({
                message: `User not found: ${error.message}`
            })
        }
    }
}
