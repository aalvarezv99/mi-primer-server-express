const express = require('express');
const morgan = require('morgan');
const app = express();

//settings
app.set('appName', 'Server Express');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//middlewares
//app.use(morgan('combined'));

//routs
app.get('/', (req, res) => {
 res.render('index.ejs');
});

app.get('/login', (req,res) => {
 res.end('Aqui va el login');
});

app.get('*', (req,res) => {
    res.end('Page Not Found');
   });

app.listen(3000, ()=> {
 console.log("servidor funcionando");
 console.log("Nombre de la App: ", app.get('appName'));
});