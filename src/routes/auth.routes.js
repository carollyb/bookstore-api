const { Router } = require("express");
const AuthController = require("../controllers/auth/AuthController");

const router = Router();

router.post("/", AuthController.handle)

module.exports = router