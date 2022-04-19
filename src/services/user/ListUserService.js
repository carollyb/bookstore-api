const prisma = require("../../database/prismaClient");

module.exports = {
    async listAllUsers() {
        const allUsers = await prisma.user.findMany()
        return allUsers
    },
    async searchUser(username) {
        const searchUser = await prisma.user.findMany({
            where: {
                username: username
            }
        })
        return searchUser
    },
    async searchUserById(id) {
        const searchUserById = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        return searchUserById
    }
}