const UpdateUserService = require("../../services/user/UpdateUserService");

module.exports = {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const {
                fullName,
                username,
                password
            } = request.body;
            const updatedUser = await UpdateUserService.execute(
                id,
                fullName,
                username,
                password
            )
            return response.status(202).json({
                message: "User data updated",
                updated: updatedUser
            })
        } catch (error) {
            response.status(400).json({
                message: error.message
            })
        }
    }
}