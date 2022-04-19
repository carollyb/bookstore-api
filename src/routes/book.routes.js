const { Router } = require("express");
const createBookController = require("../controllers/book/CreateBookController");
const deleteBookController = require("../controllers/book/DeleteBookController");
const ListAllBooksController = require("../controllers/book/ListAllBooksController");
const ListByTitleBookController = require("../controllers/book/ListByTitleBookController");
const UpdateBookController = require("../controllers/book/UpdateBookController");
const { validateFields } = require("../middlewares/requiredFields");
const { checkDuplicates } = require("../middlewares/checkDuplicates");
const { ensureAuth } = require("../middlewares/ensureAuth")

const router = Router();

router.post("/", checkDuplicates, ensureAuth, createBookController.handle)

router.get("/", ListAllBooksController.handle)
router.get("/:title", ListByTitleBookController.handle)

router.patch("/:id", ensureAuth, UpdateBookController.handle)
router.put("/:id", validateFields, ensureAuth, UpdateBookController.handle)


router.delete("/:id", ensureAuth, deleteBookController.handle)

module.exports = router;