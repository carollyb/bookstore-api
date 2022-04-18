const prisma = require("../../database/prismaClient");
const { hash } = require("bcryptjs")

module.exports = {
    async execute(username, fullName, password) {
        try {
            const passwordHash = await hash(password, 8)
            const user = prisma.user.create({
                data: {
                    username,
                    fullName,
                    password: passwordHash
                }
            })
            return user
        } catch (error) {
            throw new Error(`Could not create user`)
        }
    }
}