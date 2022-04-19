const DeleteUserService = require("../../services/user/DeleteUserService");

module.exports = {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const deleteUser = await DeleteUserService.execute(id);
            return response.status(202).json({
                messsage: "Accepted",
                deleted: deleteUser
            })
        } catch (error) {
            response.status(401).json({
                message: error.message
            })
        }
    }
}