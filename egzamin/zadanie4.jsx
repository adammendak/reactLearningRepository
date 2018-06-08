import React from 'react';
import ReactDOM from 'react-dom';

class PizzaTopings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list1: ["Sos pomidorowy", "Ananas", "Kukurydza", "Pomidor"],
            list2: []
        }
    }

    handleClick(item) {
        const newList = this.state.list2.concat(item);

        this.setState({
            list2: newList
        })
    }

    render() {
        return (
            <div>
            <ul>
                {this.state.list1.map((element,index) => {
                    return <li key={index} onClick = {() => this.handleClick(element)}> {element} </li>
                })}
            </ul>
            <ul>
                {this.state.list2.map((element,index) => {
                    return <li key={index}> {element} </li>
                })}
            </ul>
            </div>
        )
    }

}

class App extends React.Component {

    render() {

        return (
            <div>
                <PizzaTopings/>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function () {

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});