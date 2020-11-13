const express = require('express')  //using express server.
const app = express()
const port = 4000   //local host port changed from 3000 to 4000 to not confuse the web.
const cors = require('cors');   //installed cors package, cross origin resource sharing. to be able to access javascript remotely.
const bodyParser = require("body-parser");  //using the bod-parser package for the post method.

app.use(cors()); 

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); //using cros. should be able to call from front end.

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//new root point for list of movies.
app.get('/api/movies', (req, res) => {
    const mymovies = [{
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
        "Title": "World War Z",
        "Year": "2013",
        "imdbID": "tt0816711",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }
        , {
        "Title": "War of the Worlds",
        "Year": "2005",
        "imdbID": "tt0407304",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
    }
    ];
    res.status(200).json({
        message: "Everything is ok",
        movies: mymovies
    }); //passing information to server, status code 200, message and movies, could pass more info if needed.
})

app.post('/api/movies', (req, res) => {
    console.log('Movie Recieved!');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);
})  //post request, using body parser. this will recieve data that is past up from the web.

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})