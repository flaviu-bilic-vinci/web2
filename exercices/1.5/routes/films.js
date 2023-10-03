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

        minDurationValue = parseInt(minDurationValue);

        if(Number.isInteger(minDurationValue)){
            console.log("Number is an integer: "+minDurationValue);
        }else{
            console.log("Number is not an integer: "+minDurationValue);
            return res.sendStatus(400);
        }

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
            return res.sendStatus(418); //bad request 400
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

    for (any of MOVIES){
        if (any.title === title) return res.sendStatus(409);
    };

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

router.delete('/:id',(req, res, next) => {
    console.log(`DELETE /films/${req.params.id}`);
    let idToDelete = req.params.id;
    idToDelete = parseInt(req.params.id);

    console.log(idToDelete);


    if (Number.isInteger(idToDelete) && idToDelete >= 1){
        let idInTableValue = MOVIES.findIndex(movie => movie.id === idToDelete);

        if(idInTableValue !== undefined && idInTableValue != -1){
            MOVIES.splice(idInTableValue,1);
        }else{
            res.sendStatus(400);
        }
    }else{
        res.sendStatus(400);
    }

});

router.patch('/:id',(req,res,next) => {
    
    console.log("This is a patch, we went patching today")

    let idToPatch = req.params.id;
    idToPatch = parseInt(req.params.id);

    console.log(idToPatch);

    if(!Number.isInteger(idToPatch)) return res.sendStatus(400);
    if(idToPatch < 1) return res.sendStatus(400);

    let title = req.body.title;
    let duration = req.body.duration;
    let budget = req.body.budget;
    let link = req.body.link;

    if (title === undefined && duration === undefined && budget === undefined && link === undefined) res.sendStatus(400);
    
    console.log("Duration: "+duration);
    console.log("Budget: "+budget);
    
    let idInTableValue = MOVIES.findIndex(movie => movie.id === idToPatch);
    if(idInTableValue === -1) return res.sendStatus(400);

    movieToPatch = MOVIES[idInTableValue];

    if(title !== undefined) movieToPatch.title = title;
    if(duration !== undefined){
        if(isNaN(parseInt(duration))) return res.sendStatus(400);
        movieToPatch.duration = duration;
    } 
    if(budget !== undefined){
        if(isNaN(parseInt(budget))) return res.sendStatus(400);
        movieToPatch.budget = budget;
    } 
    if(link !== undefined) movieToPatch.link = link;
});

router.put('/:id',(req,res,next) => {
    
    console.log("This is a put, we went puting today");

    let idToPatch = req.params.id;
    idToPatch = parseInt(req.params.id);

    console.log(idToPatch);

    if(!Number.isInteger(idToPatch)) return res.sendStatus(400);
    if(idToPatch < 1) return res.sendStatus(400);

    let title = req.body.title;
    let duration = req.body.duration;
    let budget = req.body.budget;
    let link = req.body.link;

    if (title !== undefined && duration !== undefined && budget !== undefined && link !== undefined){
        console.log("Duration: "+duration);
        console.log("Budget: "+budget);
        
        let idInTableValue = MOVIES.findIndex(movie => movie.id === idToPatch);
        if(idInTableValue === -1) return res.sendStatus(400);

        movieToPatch = MOVIES[idInTableValue];

        if(title !== undefined) movieToPatch.title = title;
        if(duration !== undefined){
            if(isNaN(parseInt(duration))) return res.sendStatus(400);
            movieToPatch.duration = duration;
        } 
        if(budget !== undefined){
            if(isNaN(parseInt(budget))) return res.sendStatus(400);
            movieToPatch.budget = budget;
        } 
        if(link !== undefined) movieToPatch.link = link;
    };

    
});

module.exports = router;
