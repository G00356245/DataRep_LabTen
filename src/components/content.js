import React from 'react';
import '../App.css';

//footer class
export class Content extends React.Component {

    render() {
        return (
            <div className="App">
                <h1>HELLO WORLD</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2> {/* This line display the current time */}
            </div>
        );
    }
} 