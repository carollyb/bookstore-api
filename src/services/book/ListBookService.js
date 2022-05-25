const prisma = require("../../database/prismaClient");

module.exports = {
    async listAll() {
        const listAllBooks = await prisma.book.findMany()
        return listAllBooks
    },

    async searchBook(title) {
        const searchBook = await prisma.book.findMany({
            where: {
                title: title
            }
        })
        return searchBook
    },

    async searchBookById(id) {
        const searchBookById = await prisma.book.findUnique({
            where: {
                id: id
            }
        })
        return searchBookById
    },

    async searchBookByLanguage(language) {
        console.log(language);
        const searchBookByLanguage = await prisma.book.findMany({
            where: {
                language: language
            }
        })
        return searchBookByLanguage
    }
}