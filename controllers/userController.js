let users = [
  { id: 1, name: "Hamzi", age: 25 },
  { id: 2, name: "Imene", age: 35 },
];

exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  const user = users.find((userToFind) => userToFind.id == id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).send("Utilisateur non trouvé");
  }
};


exports.getAgeByUserId = (req, res) => {
    const id = req.params.id
    const user = users.find(userToFind => userToFind.id == id)
    
    if (user) {
        res.json(user.age)        
    }else {
        res.status(404).send("user not found")
    }
}

exports.createUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  users.push(newUser);

  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  const id = req.params.id;

  const user = users.find((us) => us.id == id);

  if (user) {
    user.name = req.body.name;
    user.age = req.body.age;

    res.json(user);
  } else {
    res.status(404).send("Utilisateur non trouvé");
  }
};

exports.deleteUser = (req, res) => {
  const index = users.findIndex((us) => us.id == req.params.id);

  if (index !== -1) {
    const deleted = users.splice(index, 1);
    res.json(deleted);
  } else {
    res.status(404).send("Utilisateur non trouvé");
  }
};
