const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const db = require('./configure/db')

const route = require('./routes/index.js');

//Connect db
db.connect();
//HTTP logger
var morgan = require('morgan');
//Template Engine
app.engine(
    'hbs',
    exphbs.engine({
        extname: '.hbs',
    }),
);

app.use(express.static(path.join(__dirname, 'public'))); //public folder
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.set('view engine', 'hbs'); //use handlesbars
app.use(morgan('combined')); //use morgan
app.set('views', path.join(__dirname, 'resources','views')); //set views path

//Route Init
route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
