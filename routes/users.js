const express = require("express");
const router = express.Router();

let users = [
    { id: 1, name: "Trump", age: 2503 },
    { id: 2, name: "Abdulfattah Sisi", age: 13 },
    { id: 3, name: "Ibn Kharyan", age: 2258 },
];

router.get("/getAllUsers", (_, res) => {
    res.json(users);
});

router.get("/getUserById/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find(us => us.id == id);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json("Utilisateur non trouvé");
    }
});

router.post("/createUser", (req, res) => {
    const newUser = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

router.put("/updateUser/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find(us => us.id == id);

    if (!user) {
        res.status(404).send(`Utilisateur avec id "${id}" introuvable.`);
    } else {
        user.name = req.body.name;
        user.age = req.body.age;
        res.status(202).send("Utilisateur mis à jour.");
    }

});

router.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id;
    users = users.filter(user => user.id != id);
    res.sendStatus(200);
});

module.exports = router;
