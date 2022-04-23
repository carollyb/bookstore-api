const UpdateBookService = require("../../services/book/UpdateBookService");

module.exports = {
    async handle(request, response) {
        try {
            const id = request.params.id;
            const {
                title,
                author,
                language,
                num_pages,
                publication_date,
                publisher,
                price,
                userId} = request.body;

            const updatedBook = await UpdateBookService.execute(
                id,
                title,
                author,
                language,
                Number(num_pages),
                publication_date,
                publisher,
                Number(price),
                userId
            )
            return response.status(202).json({
                message: "Successfully updated",
                updated: updatedBook
            })
        } catch (error) {
            response.status(400).json({
                error: error.message
            })
        }
    }
}