const { Router } = require("express");
const createBookController = require("../controllers/book/CreateBookController");
const deleteBookController = require("../controllers/book/DeleteBookController");
const ListAllBooksController = require("../controllers/book/ListAllBooksController");
const ListByTitleBookController = require("../controllers/book/ListByTitleBookController");
const UpdateBookController = require("../controllers/book/UpdateBookController");
const { validateFields } = require("../middlewares/requiredFields");
const { checkDuplicates } = require("../middlewares/checkDuplicates");

const router = Router();

router.post("/", checkDuplicates, createBookController.handle)

router.get("/", ListAllBooksController.handle)
router.get("/:title", ListByTitleBookController.handle)

router.patch("/:id", UpdateBookController.handle)
router.put("/:id", validateFields, UpdateBookController.handle)


router.delete("/:id", deleteBookController.handle)

module.exports = router;