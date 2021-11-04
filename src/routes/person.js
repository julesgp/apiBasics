let express = require('express');
let router = express.Router();

// Get Person
// router.get('/person', (req, res) => {
//     res.send("Here is the query values: " + req.query.name + " " + req.query.lastname);
// });

//GET Person by queryString 
//http://localhost:3000/person?name={nameValue}&lastname={lastNameValue}
router.get('/person', (req, res) => {
    res.json({ 
        "name": req.query.name ,
        "lastName": req.query.lastname
    });
});

//GET Person (Params property on the request object)
//http://localhost:3000/person/{nameValue}
router.get('/person/:name', (req, res) => {
    res.send("Welcome to the world of " + req.params.name);
});

router.get('/error', (req, res) => {
    throw new Error('There is an error');
});

module.exports = router