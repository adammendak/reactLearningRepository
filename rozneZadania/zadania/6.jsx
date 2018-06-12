import ReactDOM from "react-dom";
import React from 'react';
class FormExample extends React.Component {
    constructor(props) {
        super(props);
        //Początkowa wartość inputa ustawiona na '':
        this.state = {name: ''};
    }
    handleNameChange = (event) => {
        this.setState({name: event.target.name});
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Your name is '
            + this.state.name);
    };
    render(){
        return <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text"
                       value={this.state.name}
                       onChange={this.handleNameChange}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>;
    }
}

ReactDOM.render(
    <FormExample />,
    document.getElementById('app')
);