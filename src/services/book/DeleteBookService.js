const prisma = require("../../database/prismaClient");

module.exports = {
    async execute(id) {
        try {
            const deleteBookById = await prisma.book.delete({
                where: {
                    id: id
                }
            })
            return deleteBookById
        } catch (error) {
            throw new Error("This book was not found on our database and could not be deleted")
        }
    }
}