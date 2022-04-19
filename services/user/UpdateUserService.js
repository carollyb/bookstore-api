const prisma = require("../../database/prismaClient");

module.exports = {
    async execute(id, newFullName, newUsername, newPassword) {
        try {
            const newUserData = await prisma.user.update({
                where: {
                    id
                },
                data: {
                    fullName: newFullName,
                    username: newUsername,
                    password: newPassword
                }
            })
            return newUserData
        } catch (error) {
            throw new Error(`Could not update user`)
        }
    }
}