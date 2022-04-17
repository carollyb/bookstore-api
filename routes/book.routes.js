const { Router } = require("express");
const createBookController = require("../controllers/book/CreateBookController");
const deleteBookController = require("../controllers/book/DeleteBookController");
const ListAllBooksController = require("../controllers/book/ListAllBooksController");

const router = Router();

router.post("/", createBookController.handle)

router.get("/", ListAllBooksController.handle)

router.delete("/:id", deleteBookController.handle)

module.exports = router;