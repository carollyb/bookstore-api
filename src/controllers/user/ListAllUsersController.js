const { listAllUsers } = require("../../services/user/ListUserService");

module.exports = {
    async handle(request, response) {
        try {
            const allUsers = await listAllUsers()
            return response.status(200).json({
                results: allUsers
            })
        } catch (error) {
            response.status(400).json({
                error: `${error.message}`
            })
        }
    }
}