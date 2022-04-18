const Joi = require("joi");

module.exports = {
    validateFields(request, response, next) {
        const schema = Joi.object().keys({
            title: Joi.string().required(),
            author: Joi.string().required(),
            language: Joi.string().required(),
            num_pages: Joi.number().required(),
            publication_date: Joi.date().required(),
            price: Joi.number().required(),
            publisher: Joi.string().required()
        })

        const { error, value } = schema.validate(request.body)

        if(error) {
            return response.status(400).json({error: "There are probably some missing fields or you are trying to update id"})
        } else {
            return next()
        }
    }
}