import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text : "lol"
        }

    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                text : "zmieniony teskst"
            })
        }, 5000);
    }

    componentWillUnmount() {
        clerInerval(this.intervalId);
    }
    render() { return <div>
        <h1>{this.state.text}</h1>
    </div>

    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <HelloWorld/>,
        document.getElementById('app')
    );
});