const AuthService = require("../../services/auth/AuthService");
const { searchUser } = require("../../services/user/ListUserService")

module.exports = {
    async handle(request, response) {
        try {
            const { username, password } = request.body;
            const user = await searchUser(username);
            const user_id = user[0].id;
            const token = await AuthService.execute(username, password);

            return response.status(202).json({
                token: token,
                user_id: user_id})
                
        } catch (error) {
            response.status(400).json({
                error: `Could not generate token: ${error.message}`
            })
        }
    }
}