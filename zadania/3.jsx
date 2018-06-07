import ReactDOM from "react-dom";
import React from 'react';

class Counter extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            seconds: 0
        };
    }
    componentDidMount(){
        this.intervalId = setInterval(() => {
            this.setState({
                seconds: this.state.seconds + 1
            });
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    render(){
        return <h1>Jesteś tu {this.state.seconds} s.</h1>;
    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));