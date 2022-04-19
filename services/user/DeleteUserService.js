const prisma = require("../../database/prismaClient");

module.exports = {
    async execute(id) {
        try {
            const deleteUser = await prisma.user.delete({
                where: {
                    id
                }
            })
            return deleteUser
        } catch (error) {
            throw new Error(`Could not delete user`)
        }
    }
}