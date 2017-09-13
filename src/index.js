import React from 'react'
import {render} from 'react-dom'

function HelloWorld() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

render(<HelloWorld/>, document.getElementById('root'))

/*
"use strict";

function HelloWorld() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Hello World"
        )
    );
}*/
