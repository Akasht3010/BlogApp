const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://akashthakkar931:RqqHxI9S7CCXUNw2@cluster0.wlpeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try{
        const userDoc = await User.create({ 
            username, 
            password: bcrypt.hashSync(password, salt) 
        })
        res.json(userDoc);
    } catch(e){
        res.status(400).json(e );
    }
})

app.listen(4000)

//akashthakkar931
//RqqHxI9S7CCXUNw2

// mongodb+srv://akashthakkar931:RqqHxI9S7CCXUNw2@cluster0.wlpeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0