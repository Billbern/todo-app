const express = require('express'),
         path = require('path');


let app = express();
app.use(express.static(path.join(__dirname, 'static')));
app.set("view engine", "ejs");



app.get('/', (req, res)=>{
    res.render('home');
})

const port = process.env.PORT || 5050;

app.listen(port, "127.0.0.1", ()=>{
    console.log(`server is starting......\nserver running on http://127.0.0.1:${port}`);
});