const AuthService = require("../../services/auth/AuthService");

module.exports = {
    async handle(request, response) {
        try {
            const { username, password } = request.body;
            
            const token = await AuthService.execute(username, password);

            return response.status(202).json(token)
        } catch (error) {
            response.status(400).json({
                error: `Could not generate token: ${error.message}`
            })
        }
    }
}