let taches = [
    { id: 1, userId: 1, titre: "Faire mes devoirs", done: true },
    { id: 2, userId: 2, titre: "Manger u chocolat", done: false },
    { id: 3, userId: 2, titre: "Manger dkjed,:;sfsd", done: true },
    { id: 4, userId: 2, titre: "ecrire du java script", done: false },
];

exports.getAllTasks = (req, res) => {
    res.json(taches);
};

exports.getTaskById = (req, res) => {
    const id = req.params.id;

    const todo = taches.find((tacheToFind) => tacheToFind.id == id);

    if (todo) {
        res.json(todo);
    } else {
        res.status(404).send("Tache non trouvée");
    }
};

exports.getTaskByUser = (req, res) => {
    const userId = req.params.id;

    const listeDesTaches = taches.filter(
        (taskToFind) => taskToFind.userId == userId
    );

    if (listeDesTaches.length > 0) {
        res.json(listeDesTaches);
    } else {
        res
            .status(404)
            .json({ message: "Aucune tache n'a etait trouvée pour cet utilisateur" });
    }
};

exports.getTaskByUserNotDone = (req, res) => {
    const userId = req.params.id;

    const listeDesTachesNonTermine = taches.filter(
        (taskToFind) => (taskToFind.userId == userId) && (taskToFind.done == false)
    );

    if (listeDesTachesNonTermine.length > 0) {
        res.json(listeDesTachesNonTermine);
    } else {
        res
            .status(404)
            .json({ message: "Aucune tache n'a etait trouvée pour cet utilisateur" });
    }
};

exports.createTask = (req, res) => {
    const newTask = {
        id: taches.length + 1,
        userId: req.body.userId,
        titre: req.body.titre,
        done: req.body.done,
    };
    taches.push(newTask);
    res.status(201).json(newTask);
};

exports.toggleTask = (req, res) => {
    const id = req.params.id;

    const task = taches.find(tacheToFind => tacheToFind.id == id);

    if (!task) {
        res.status(404).send("Pas de tache trouvée")
    } else {
        if (task.done == true) {
            task.done = false
        } else {
            task.done = true
        }
        res.json(task)
    }
};

exports.deleteTask = (req, res) => {
    const id = req.params.id;

    const index = taches.findIndex(tacheToFind => tacheToFind.id == id)

    if (index !== -1) {
        taches.splice(index, 1)
        res.status(200).json({ message: "Tache supprimée" })
    } else {
        res.status(404).json({ message: `Pas de tache avec l'ID ${id}` })
    }
};



