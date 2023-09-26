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
    duration: 150,
    budget: 40,
    link: "https://www.imdb.com/title/tt13026902/" 
}

let film3 = {
    id: 3,
    title: "placeholderTitle3",
    duration: 100,
    budget: 10,
    link: "https://www.imdb.com/title/tt13026902/" 
}

const MOVIES = [];
MOVIES.push(film1,film2,film3);


/* GET home page. */
router.get('/', function(req, res, next) {

    if (req.query['minimum-duration'] != undefined){
        const FILTERED_MOVIES =[];
        let minDurationValue = req.query['minimum-duration'];

        for (any of MOVIES){
            if (any.duration >= minDurationValue) FILTERED_MOVIES.push(any);
        };
        res.json(FILTERED_MOVIES);
        return;
    };
    
    res.json(MOVIES);
});


//READ ONE
router.get('/:id', (req, res, next) => {

    let id = req.params.id;
    console.log("Verification de l'id: "+ id + "\n");

    if (id != undefined) {
        id = parseInt(id);
        if(id < 1 || id > MOVIES.length){
            return res.json("ID too big or too small, the ID starts from "+ 1 + " to "+MOVIES.length);
        }
        return res.json(MOVIES[id-1]);
    }
    return res.json("ID not found");

})

//CREATE ONE
router.post('/', (req, res, next) => {

    let title = req.body.title;
    let duration = req.body.duration;
    let budget = req.body.budget;
    let link = req.body.link;

    if (budget < 0 || duration < 0) return res.json("budget ou durée negative");

    if (!title || !duration || !budget || !link) return res.sendStatus(418); //bad request 400

    let lastItemIndex = MOVIES.length-1;

    const newFilm = {
        id: MOVIES[lastItemIndex].id+1,
        title: title,
        duration: duration,
        budget: budget,
        link: link
    };
    MOVIES.push(newFilm);

    return res.json(newFilm);
})

module.exports = router;
