import React from 'react';
import { MovieItem } from './movieItem';

//Movies class
export class Movies extends React.Component {

    render() {
        //Returning movieitem and reload data.
        return this.props.movies.map((movie) => {
            return <MovieItem movie={movie} ReloadData={this.props.ReloadData}></MovieItem>
        })
    }
}