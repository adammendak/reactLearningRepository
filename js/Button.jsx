import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        console.log("lol");
        this.setState(state => ({
            counter: state.counter + 1
        }))
    }

    render() {
        return <div>
            random tekst
            <button onClick={this.handleClick}>klik {this.state.counter}</button>
            </div>
    }
}

class TestButton extends React.Component {
    handleTestClick = () => {
        console.log("testClick");
        console.log(this.props);
    }

    render() {
        return (
            <div className="user">
                <button onClick= {e=> this.handleTestClick()}> klik</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Button/>,
    // <TestButton />,
    document.getElementById('app')
)
