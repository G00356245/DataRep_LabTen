import React from 'react';
import { Movies } from './movies';
import axios from 'axios';//imported axios 

//Read class
export class Read extends React.Component {

    //method to call list of movies.
    state = {
        movies: []

    };

    //using a life cyclehook, this method will get called everytime our componeent is mounted.
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then((response) => {
                this.setState({ movies: response.data.Search })
            })    //this will use the fufill state.
            .catch(
                (error) => {
                    console.log(error)
                });  //if the .then function doesn't work then this line will run.
    }

    render() {
        return (
            <div>
                <h1>This is my Read component.</h1>
                {/* movies will display under the h1 tag */}
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}