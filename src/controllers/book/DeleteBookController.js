const deleteBookService = require("../../services/book/DeleteBookService");

module.exports = {
    async handle(request, response) {
        try {
            const id = request.params.id;
            const book = await deleteBookService.execute(id);
            return response.status(202).json({
                "message": "Accepted",
                "deleted_book": book
            })
            
        } catch (error) {
            response.status(400).json({
                error: error.message
            })
        }
    }
}