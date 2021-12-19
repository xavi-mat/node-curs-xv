const express = require('express');
const app = express();
const port = 3000;

app.set('views', __dirname + '/views'); // set files folder
app.engine('html', require('ejs').renderFile); // render the html


app.get('/', function (req, res){
    res.render('index.html'); // show the render file
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

