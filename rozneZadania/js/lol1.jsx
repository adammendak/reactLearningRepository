import React from 'react';
import ReactDOM from 'react-dom';

const cars = [
    {
        name: "Jaguar",
        color: "red",
        isBroken: true
    },
    {
        name: "BMW",
        color: "black",
        isBroken: false
    },
    {
        name: "Skoda",
        color: "yellow",
        isBroken: true
    }
];

class CarElement extends React.Component {
    render() {
        const text = this.props.isBroken == true ? "Zepsuty" : "Działa"
        return <li>
        <h2>{this.props.carName}</h2>
        <h2>{this.props.carColor}</h2>
        <h3>{text}</h3>
    </li>
    }
}

class CarList extends React.Component {
    render() {
        const list = this.props.items.map( el => {
            return <CarElement carName={el.name} 
                carColor={el.color} 
                isBroken={el.isBroken}
                />
        })

        return <ul>
            {list}    
        </ul>
    }
}

class App extends React.Component {
    render() {
        return <div>
            <CarList items={this.props.cars}/> 

        </div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App cars={cars}/>,
        document.getElementById('app')
    );
});