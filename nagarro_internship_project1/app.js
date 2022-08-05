const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('./models/user');
const flash = require('connect-flash');
const app = express();

mongoose.connect('mongodb://localhost:27017/twitter')
.then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log(err);
})

app.set('view engine','ejs');
app.set('views' ,path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({extended:true}));
app.use(flash());

app.get('/',(req,res)=>{
    res.render('login');
});

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }));

app.use(passport.session()); // make use of session login/logout)
app.use(passport.initialize()); // initialsie pass
// authenticatin the user
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use(authRoutes);


app.listen(3000,()=>{
    console.log("Server connected");
});