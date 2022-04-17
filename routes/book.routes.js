const { Router } = require("express");
const createBookController = require("../controllers/CreateBookController")

const router = Router();

router.post("/", createBookController.handle)

module.exports = router;