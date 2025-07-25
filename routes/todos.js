const express = require("express");
const taskController = require("../controllers/todoControler");

const router = express.Router();

router.get("/getAllTasks", taskController.getAllTasks);

router.get("/getTaskById/:id", taskController.getTaskById);

router.get("/getTaskByUserId/:id", taskController.getTaskByUser);

router.get("/getNotDoneTaskByUser/:id", taskController.getTaskByUserNotDone);

router.post("/createTask", taskController.createTask);

router.put("/toggleTask/:id", taskController.toggleTask);

router.delete("/deleteTask/:id", taskController.deleteTask);

module.exports = router;