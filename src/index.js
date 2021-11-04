let express = require('express')
let app = express()
let personRoute = require('./routes/person')
let customerRoute = require('./routes/customer')
let path = require('path')
let bodyParser = require('body-parser')
require('dotenv').config()

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    next()
})

app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))

app.use((req, res, next) => {
   res.status(404).send("Sorry, you may be lost")
});

app.use((err, req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/500.html'));
 });

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.info(`server has started on ${PORT}, Checking DB variables: user = ${process.env.DB_USER}, and password = ${process.env.DB_PASS}`));