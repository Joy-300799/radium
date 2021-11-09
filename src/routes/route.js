const express = require('express');

const router = express.Router();

// EXAMPLE

router.get('/test-me', function (req, res) {
    res.send('why to fear when Joy is here ! welcome everyone.')
});
// EXAMPLE

router.get('/colors', function (req, res) {
    res.send('This is the set of colors:- Red,Blue,Pink,Green,Yellow')
});

// PROBLEM 1

router.get('/movies', function (req, res) {
    let arrMovies = ["Dhoom", "Bang Bang", "URI", "The expandables", "squid games", "Shershaah"]
    res.send(arrMovies)
});

// PROBLEM 2

router.get('/movies/:movieIndex', function (req, res) {
    let movies = ["Dhoom", "Bang Bang", "URI", "The expandables", "squid games", "Shershaah"]
    let value = req.params.movieIndex
    let atMovie = movies[value]
    if (value >= movies.length) {
        res.send("Invalid index")
    } else {
        res.send(atMovie)
    }
})

// PROBLEM 3

router.get('/films', function (req, res) {
    const cinema = [{
        'id': 1, 'name': 'The Shining'
    }, {
        'id': 2, 'name': 'Incendies'
    }, {
        'id': 3, 'name': 'Rang de Basanti'
    }, {
        'id': 4, 'name': 'Finding Demo'
    }]
    res.send(cinema)
})

// PROBLEM 4

router.get('/films/:filmsId', function (req, res) {
    const cinema = [{
        'id': 1, 'name': 'The Shining'
    }, {
        'id': 2, 'name': 'Incendies'
    }, {
        'id': 3, 'name': 'Rang de Basanti'
    }, {
        'id': 4, 'name': 'Finding Demo'
    }]
    let data = req.params.filmsId
    let getData = cinema[data]
    if (data >= cinema.length) {
        res.send("No such film exists with this id.")
    }
    else {
        res.send(getData)
    }

})

module.exports = router;