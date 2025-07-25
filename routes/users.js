const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/getAllUsers", userController.getAllUsers);

router.get("/getUserById/:id", userController.getUserById);

router.get("/getAgeByUserId", userController.getAgeByUserId);

router.post("/createUser", userController.createUser);

router.put("/updateUser/:id", userController.updateUser);

router.delete("/deleteUser/:id", userController.deleteUser);

module.exports = router;
