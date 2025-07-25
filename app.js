const express = require("express");
const userRoutes = require("./routes/users");
const todoRoutes = require("./routes/todos");

const app = express();
const port = 3001;

app.use(express.json());
app.use("/user", userRoutes);
app.use("/task", todoRoutes);

app.get("/", (_, res) => {
    res.send("Server running correctly.\n");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});