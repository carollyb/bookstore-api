const prisma = require("../../database/prismaClient");

module.exports = {
    async execute(title, author_id, language, num_pages, publication_date, publisher, price) {
        try {
            
            const book = await prisma.book.create({
                data: {
                    title,
                    author_id,
                    language,
                    num_pages,
                    publication_date: new Date(publication_date),
                    publisher,
                    price,
                    userId: 'e839d690-4423-4637-99e1-a990210e4a5f'
                }
            })
            return book
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
}