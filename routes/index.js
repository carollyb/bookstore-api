const { Router } = require("express");
const bookRoutes = require("./book.routes")

const router = Router();

router.use("/book", bookRoutes)

module.exports = router