const express = require("express");
const cors = require('cors')
const app = express();
const {MongoClient, ServerApiVersion} = require('mongodb')
const dotenv = require('dotenv').config();
const uri = process.env.MONGO_URI;
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:4000'
}));

app.get('/test', (req, res) => {
    res.json('test, ok')
});

mongoose.connect(uri);
console.log("Connection Successful...");

const User = require("./models/User");
const bcrypt = require('bcrypt');
const bcryptSalt = bcrypt.genSaltSync(10);

app.post('/register',  async (req, res) => {
    const{name, email, password} = req.body;
    // Encrypt the password
    const userDoc = await User.create({
      name,
      email,
      password:bcrypt.hashSync(password, bcryptSalt)
    });
    console.log("User creation...");
    res.json(userDoc);
})



app.listen(4000);