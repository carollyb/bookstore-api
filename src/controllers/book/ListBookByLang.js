const ListBookService = require("../../services/book/ListBookService");

module.exports = {
    async handle(request, response) {
        
        const language = request.query.language
        
        const listUniqueBook = await ListBookService.searchBookByLanguage(language)
        
        if(listUniqueBook.length === 0) {
            return response.status(400).json({
                error: "query - Could not find book"
            })
        } else {
            return response.status(200).json({
                results: listUniqueBook
            })
        }
    }
}