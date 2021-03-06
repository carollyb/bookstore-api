const CreateUserService = require("../../services/user/CreateUserService");

module.exports = {
    async handle(request, response) {
        try {
            const { username, fullName, password } = request.body
            const user = await CreateUserService.execute(username, fullName, password)
            response.status(201).json({
                "user_created": user
            })
        } catch (error) {
            response.status(400).json({
                error: error.message
            })
        }
    }
}