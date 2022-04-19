const ListBookService = require("../../services/book/ListBookService");

module.exports = {
    async handle(request, response) {
        const allBooks = await ListBookService.listAll();
        response.status(200).json({
            books: allBooks
        })
    }
}