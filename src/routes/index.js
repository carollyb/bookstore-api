const { Router } = require("express");
const bookRoutes = require("./book.routes")
const userRoutes = require("./user.routes")
const authRoutes = require("./auth.routes")
const searchRoutes = require("./search.routes")

const router = Router();

router.use("/book", bookRoutes)
router.use("/books/search", searchRoutes)
router.use("/user", userRoutes)
router.use("/login", authRoutes)

module.exports = router