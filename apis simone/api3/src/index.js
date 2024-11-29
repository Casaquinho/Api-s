const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
mongoose.connect('mongodb://user:user@cluster0-shard-00-00.7wv9p.mongodb.net:27017,cluster0-shard-00-01.7wv9p.mongodb.net:27017,cluster0-shard-00-02.7wv9p.mongodb.net:27017/?ssl=true&replicaSet=atlas-vhx7xq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('Conectado');
}
).catch((err)=>{
    console.log(err);
});


const app = express();
app.use(express.json());
app.use(cors());
const port = 3003;

const usuarioSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const userModel = mongoose.model('user', usuarioSchema); 

app.put('/putUser/:id', async (req, res) => {
    const {id} = req.params;
    const user = {
        username: req.body.username,
        password: req.body.password
    }

  console.log(user)
    try{
        await userModel.findByIdAndUpdate(id, user);
        res.send("Usuario atualizado");
    }catch(err){
        console.log(err);
        res.send('Error');
    }
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
