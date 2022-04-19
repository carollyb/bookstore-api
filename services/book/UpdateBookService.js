const prisma = require("../../database/prismaClient");

module.exports = {
    async execute(
        id,
        newTitle,
        newAuthor,
        newLanguage,
        newNum_pages,
        newPublication_date,
        newPublisher,
        newPrice
        ) {
            try {
                const newBookData = await prisma.book.update({
                    where: {
                        id: id
                    },
                    data: {
                        title: newTitle,
                        author: newAuthor,
                        language: newLanguage,
                        num_pages: newNum_pages,
                        publication_date: newPublication_date,
                        publisher: newPublisher,
                        price: newPrice,
                    }
                })
                return newBookData
            } catch (error) {
                throw new Error(`${error}`)
            }
            
        }
}