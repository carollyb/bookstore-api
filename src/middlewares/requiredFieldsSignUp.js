const Joi = require("joi");

module.exports = {
    validateFields(request, response, next) {
        const schema = Joi.object().keys({
            fullName: Joi.string().required(),
            username: Joi.string().required(),
            password: Joi.string().required()
        })

        const { error, value } = schema.validate(request.body)

        if(error) {
            return response.status(400).json({error: "There are probably some missing fields"})
        } else {
            return next()
        }
    }
}