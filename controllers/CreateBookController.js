const createBookService = require("../services/book/CreateBookService");

module.exports = {
    async handle(request, response) {
        try {
            const { 
                title,
                author_id,
                language,
                num_pages,
                publication_date,
                publisher,
                price
            } = request.body;

            const book = await createBookService.execute(
                title,
                author_id,
                language,
                num_pages,
                publication_date,
                publisher,
                price
            )

            response.status(200).json(book)

        } catch (error) {
            response.status(400).json({error: error.message})
        }
    }
}