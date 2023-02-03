const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    const cookies = req.cookies;
    if(cookies.isLoggedIn){
        res.render('index.ejs');
    }else{
        res.render('login.ejs')
    }
})

app.get('/login', (req, res) => {
    res.cookie("isLoggedIn", "1");
    res.redirect('/')
})

app.get('/logout', (req, res) => {
    res.clearCookie("isLoggedIn");
    res.redirect('/')
})


app.listen(3000, () => {
    console.log('app is running on port 3000')
})