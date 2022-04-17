const ListBookService = require("../../services/book/ListBookService");

module.exports = {
    async handle(request, response) {
        try {
            const title = request.params.title;
            const listUniqueBook = await ListBookService.searchBook(title)
            response.status(200).json({
                results: listUniqueBook
            })
        } catch (error) {
            response.status(400).json({
                error: error.message
            })
        }
    }
}