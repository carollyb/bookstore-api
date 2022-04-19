const { Router } = require("express");
const CreateUserController = require("../controllers/user/CreateUserController");
const DeleteUserController = require("../controllers/user/DeleteUserController");
const ListAllUsersController = require("../controllers/user/ListAllUsersController");
const ListByUsernameUserController = require("../controllers/user/ListByUsernameUserController");
const UpdateUserController = require("../controllers/user/UpdateUserController");

const router = Router();

router.post("/", CreateUserController.handle);

router.get("/", ListAllUsersController.handle);
router.get("/:username", ListByUsernameUserController.handle);

router.patch("/:id", UpdateUserController.handle);

router.delete("/:id", DeleteUserController.handle)

module.exports = router