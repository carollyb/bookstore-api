const { Router } = require("express");
const ListBookByLang = require("../controllers/book/ListBookByLang");

const router = Router();

router.get("/", ListBookByLang.handle)

module.exports = router;