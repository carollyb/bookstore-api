const { Router } = require("express");
const CreateUserController = require("../controllers/user/CreateUserController");

const router = Router();

router.post("/", CreateUserController.handle);

module.exports = router