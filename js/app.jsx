import React from 'react';
import ReactDOM from 'react-dom';
import Extension from './Extension.jsx';

console.log("lol");

document.addEventListener('DOMContentLoaded', function(){
        ReactDOM.render(
            <Extension/>,
            document.getElementById('app')
        );
    });