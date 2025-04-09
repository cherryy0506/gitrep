const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const user = {
    name: "charitha",
    age: "18"
};

app.get('/user', (req, res) => {
    res.render('user', { userInfo: user }); // 'user' refers to views/user.ejs
});

app.listen(4200, () => console.log("Listening on port 3600"));
