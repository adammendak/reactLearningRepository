import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {

    handleClick = () => {
        this.props.onClickFunction(this.props.incrementValue);
    }

    render() {
        return (
        <button onClick= {this.handleClick}>
        +{this.props.incrementValue}
        </button>
        )
    }
}

const Result = (props) => {
    // console.log(props);
    return (
        <div>{props.counter}</div>
    )
}

class App extends React.Component {
    state = { counter : 0,
                dupa : 'asda'}

    incrementCounter = (incrementValue) => {
        this.setState((prevstate) => ({
            counter: prevstate.counter + incrementValue
        }))
    }

    render() {
        return(
            <div>
                <Button incrementValue={1} onClickFunction ={this.incrementCounter}/>
                <Button incrementValue={5} onClickFunction ={this.incrementCounter}/>
                <Button incrementValue={10} onClickFunction ={this.incrementCounter}/>
                <Result counter = {this.state.counter}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))