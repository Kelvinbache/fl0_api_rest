const express = require("express");
const users = require("./user.json");

const app = express();

app.get("/users", (req, res) => {
  res.status(200).json(users);
});


PORT = process.env.PORT ?? 3000 


app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}/users`);
})
