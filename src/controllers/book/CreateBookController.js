const createBookService = require("../../services/book/CreateBookService");

module.exports = {
    async handle(request, response) {
        try {
            const { 
                title,
                author,
                language,
                num_pages,
                publication_date,
                publisher,
                price
            } = request.body;

            const book = await createBookService.execute(
                title,
                author,
                language,
                num_pages,
                publication_date,
                publisher,
                price
            )

            return response.status(200).json(book)

        } catch (error) {
            response.status(400).json({error: error.message})
        }
    }
}