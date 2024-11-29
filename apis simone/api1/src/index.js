const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose
  .connect(
    "mongodb://user:user@cluster0-shard-00-00.7wv9p.mongodb.net:27017,cluster0-shard-00-01.7wv9p.mongodb.net:27017,cluster0-shard-00-02.7wv9p.mongodb.net:27017/?ssl=true&replicaSet=atlas-vhx7xq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Conectado");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use(cors());
const port = 3001;


const usuarioSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: String,
});

const userModel = mongoose.model("user", usuarioSchema);

app.post("/addUser", async (req, res) => {

  const user = {
    username: req.body.username,
    password: req.body.password
  };

  if (!user.username || !user.password){
    res.status(404).send("Faltam credênciais.")
    return;
    
  }

  try {
    const userToCreate = new userModel({
      username: user.username,
      password: user.password,
    });
    await userToCreate.save();
    res.send(userToCreate);
  } catch (err) {
    res.send("Error Post ", err);
  }



});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
