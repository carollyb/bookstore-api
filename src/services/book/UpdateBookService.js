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
        newPrice,
        newUserId
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
                        publication_date: new Date(newPublication_date),
                        publisher: newPublisher,
                        price: newPrice,
                        userId: newUserId
                    }
                })
                return newBookData
            } catch (error) {
                throw new Error(`${error}`)
            }
            
        }
}