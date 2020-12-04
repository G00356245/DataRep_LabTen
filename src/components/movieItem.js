import React from 'react';
import Card from 'react-bootstrap/Card'; //imported card from bootstrap
import Button from 'react-bootstrap/Button'; //using the react bootstrap button 
import axios from 'axios'; //importing axios to use our http client
import {Link} from 'react-router-dom';
//MoveItem class
export class MovieItem extends React.Component {

    //this constructor will bind to the delete button that will call the this.delete function.
    constructor() {
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    //delete method to log the movie to the console saying delete
    //using axios to call the delete method through localhost:400 link
    //prevent default will prevent the data being delete everytime the page is reloaded
    DeleteMovie(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.movie._id);

        axios.delete("http://localhost:4000/api/movies/" + this.props.movie._id)

            .then(()=>{
                this.props.ReloadData();
            })
            .catch();
    }

    render() {
        return (
            //added card from bootstrap, this allows the movie posters to have a card layout look on the website.
            //ract bootstrap button is added to perform a delete function.
            //Edit link is created using react-router-dom.
            <div>
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/"+ this.props.movie._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>
            </div>
        );
    }
}