const prisma = require("../../database/prismaClient");

module.exports = {
    async execute() {
        const listAllBooks = await prisma.book.findMany()
        return listAllBooks
    }
}