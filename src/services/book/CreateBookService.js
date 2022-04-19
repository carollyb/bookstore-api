const prisma = require("../../database/prismaClient");

module.exports = {
    async execute(title,
        author,
        language,
        num_pages,
        publication_date,
        publisher,
        price,
        userId) {
        try {
            const book = await prisma.book.create({
                data: {
                    title,
                    author,
                    language,
                    num_pages,
                    publication_date: new Date(publication_date),
                    publisher,
                    price,
                    userId
                }
            })
            return book
        } catch (error) {
            throw new Error(`erro ${error}`)
        }
    }
}