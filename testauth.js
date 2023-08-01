/*
 * @Author: AJ Javadi 
 * @Email: amirjavadi25@gmail.com
 * @Date: 2023-07-31 10:07:57 
 * @Last Modified by: Someone
 * @Last Modified time: 2023-07-31 10:08:24
 * @Description: loginfeature
 */

const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

app = express();


app.get('/', (req, res) => {
    res.send("hello")
});
// app.get()

users = [
    {
        username: 'testuser1',
        password: '123456'
    },
    {
        username: 'testuser2',
        password: '123456'
    }
]


// create a function that tests if the user is valid

const authenticateUser = (req, res, next) => {
    const username = req.body.username;
    const user = { name: username };
    // create a token
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken });
    next();
}


// app.post('/login', (req, res) => {
//     // Authenticate User
//     const username = req.body.username;
//     const user = { name: username };
// }






// test listen
app.listen(3000, () => {
    console.log("hello")
}
)   // end of app.listen
