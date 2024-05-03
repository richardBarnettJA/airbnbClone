const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User.js');
const UserModel = require('./models/User');
const CookieParser = require('cookie-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'gkggjhgsdf767sugjwfegw8ghjbfhefw8ewd';

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));


mongoose.connect(process.env.MONGO_URL)

app.get('/test', (req,res) => {
    res.json("test ok");
});
//lb39qDda3F6DgNPl
app.post('/register', async (req, res) => {
    const {name, email, password} = req.body;
    try{
        const userDoc = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password, bcryptSalt),
        });

        res.json(userDoc);
    } catch (e){
        res.status(422).json(e);
    }
    
});

app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const userDoc = await User.findOne({email});
    if (userDoc){
        const passOK = bcrypt.compareSync(password, userDoc.password);
        if (passOK){
            jwt.sign({
                email:userDoc.email, 
                id:userDoc._id, 
            }, jwtSecret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(userDoc);
            });
        } else {
            res.status(422).json('pass not found');
        }
    } else {
        res.status(422).json('not found');
    }
})

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    if (token){
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
                const {name, email, _id} = await User.findById(userData.id)
            res.json({name, email, _id});
        });
    } else{
        res.json(null)
    }
})

app.listen(4000); //App listening on port 4000