const ListBookService = require("../../services/book/ListBookService");

module.exports = {
    async handle(request, response) {
        
        const title = request.params.title;

        const listUniqueBook = await ListBookService.searchBook(title);
        
        if(listUniqueBook.length === 0) {
            return response.status(400).json({
                error: "Could not find book"
            })
        } else {
            return response.status(200).json({
                results: listUniqueBook
            })
        }
    }
}