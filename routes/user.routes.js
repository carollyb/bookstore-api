const { Router } = require("express");
const CreateUserController = require("../controllers/user/CreateUserController");
const ListAllUsersController = require("../controllers/user/ListAllUsersController");
const ListByUsernameUserController = require("../controllers/user/ListByUsernameUserController");

const router = Router();

router.post("/", CreateUserController.handle);

router.get("/", ListAllUsersController.handle)
router.get("/:username", ListByUsernameUserController.handle)

module.exports = router