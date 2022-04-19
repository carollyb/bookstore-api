const prisma = require("../database/prismaClient");
const { searchBook } = require("../services/book/ListBookService")

module.exports = {
    async checkDuplicates(request, response, next) {
        const { title } = request.body;

        const bookAlreadyExists = await searchBook(title);

        if (bookAlreadyExists.length === 0) {
            next()
        } else {
            return response.status(400).json({
                error: "This book already exists on our database"
            })
        }
    }
}