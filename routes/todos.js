const express = require("express");

const router = express.Router();

let tasks = [
    { id: 1, userId: 1, tache: "Detruire le monde", done: false },
    { id: 3, userId: 2, tache: "Embrasser la maître Trumpstein", done: true }
]

router.get("/getAllTasks", (_, res) => {
    res.json(taches);
});

router.get("/getTaskById/:id", (req, res) => {
    const id = req.params.id;
    const task = tasks.find(us => us.id == id);

    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json("Tâche introuvable.");
    }
});


module.exports = router;