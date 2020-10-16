import React from 'react';
import '../App.css';

//header class
export class Header extends React.Component {

    render() {
        return (
            //added h1 for some text
            <div>
                <h1>My header in another component.</h1>
            </div>
        );
    }
}