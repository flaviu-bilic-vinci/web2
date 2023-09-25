var express = require('express');
var router = express.Router();

let film1 = {
    id: 1,
    title: "placeholderTitle1",
    duration: 120,
    budget: 20,
    link: "https://www.imdb.com/title/tt13026902/" 
}

let film2 = {
    id: 2,
    title: "placeholderTitle2",
    duration: 120,
    budget: 40,
    link: "https://www.imdb.com/title/tt13026902/" 
}

let film3 = {
    id: 3,
    title: "placeholderTitle3",
    duration: 140,
    budget: 10,
    link: "https://www.imdb.com/title/tt13026902/" 
}

const MOVIES = [];
MOVIES.push(film1,film2,film3);


/* GET home page. */
router.get('/', function(req, res, next) {
    res.json(MOVIES);
});

module.exports = router;
