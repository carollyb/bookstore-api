const { Router } = require("express");
const bookRoutes = require("./book.routes")
const userRoutes = require("./user.routes")

const router = Router();

router.use("/book", bookRoutes)
router.use("/user", userRoutes)

module.exports = router