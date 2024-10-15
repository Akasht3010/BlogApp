const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = 'iojgiogvvhvihwkgjhv9weh9wpvh'

app.use(cors({credentials :true, origin:'http://localhost:5173'}));
app.use(express.json());
app.use(cookieParser())

mongoose.connect('mongodb+srv://akashthakkar931:RqqHxI9S7CCXUNw2@cluster0.wlpeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt)
        })
        res.json(userDoc);
    } catch (e) {
        res.status(400).json(e);
    }
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({username});
    const passOK = bcrypt.compareSync(password, userDoc.password);
    if(passOK){
        //logged in
        jwt.sign({username, id:userDoc._id}, secret, {}, (err, token)=>{
            if(err) throw err;
            res.cookie('token',token).json('ok');
        })
    }
    else {
        res.status(400).json('Wrong credentials')
    }
})

app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err,info) =>{
        if(err) throw err;
        res.json(info);
    })
})

app.post('/logout', (req,res) => {
    res.cookie('token','').json('ok');
})

app.listen(4000)

//akashthakkar931
//RqqHxI9S7CCXUNw2

// mongodb+srv://akashthakkar931:RqqHxI9S7CCXUNw2@cluster0.wlpeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0