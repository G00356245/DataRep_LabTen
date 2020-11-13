import React from 'react';
import '../App.css';
import axios from 'axios';  //using axios, http requests to fetch or save data.

//Create class
export class Create extends React.Component {
    //added constructor.
    constructor() {
        super();   //this line of code is needed to use the form.

        //binding the methods so that it can execute when called.
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        //stating the type of data that the users will input.
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    //method for calling the onchangeYear.
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    //method for calling the onchangePoster. 
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        });
    }

    //method for calling the onchangetitle. 
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    //method for onsubmit
    onSubmit(e) {
        e.preventDefault(); //stop the button from  being called multiple times.
        alert("Movie: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster);  //this line will alert whenever the submit button is clicked.

            //making an object with the three values that is recieved.
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        }
        axios.post('http://localhost:4000/api/movies',newMovie) //post request, send data to the server.
        .then((res)=>{
            console.log(res);
        })  //respond to console.

        .catch((error)=>{
            console.log(error);
        }); //if .then does not work then error will be passed to console.
    }

    render() {
        //adding forms for movie title. year and poster to the create page to be able to input data.
        //onSubmit allows for the submission of input data in the form.
        //added a submit button at the end so that the users is able to submit data by clicking the button.
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Movies Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>

                    <div className='form-group'>
                        <label>Add Movie Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.year}
                            onChange={this.onChangeYear}></input>
                    </div>

                    <div className='form-group'>
                        <label>Movies Poster: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangePoster}></textarea>
                    </div>

                    <div className='form-group'>
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
} 