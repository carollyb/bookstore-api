const { verify } = require("jsonwebtoken");
const auth = require("../config/auth.json")

module.exports = {
    ensureAuth(request, response, next) {
        const authToken = request.headers.authorization;

        if(!authToken) {
            return response.status(400).end()
        }

        const [ , token] = authToken.split(" ");

        try {
            const sub = verify(token, auth.secret)
            request.user_id = sub;
            return next()
        } catch (error) {
            return response.status(400).end()
        }
    }
}