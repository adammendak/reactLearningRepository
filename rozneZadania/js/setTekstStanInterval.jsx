import React from 'react';
import ReactDOM from 'react-dom';



class TextTyper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            counter : 0
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState(state => ({
                counter : state.counter + 1,
                text : this.props.name.substring(0, this.state.counter)
            }));
            console.log(this.state.counter);
            console.log(this.props.name.substring(0, this.state.counter));
            // console.log(this.state.text);
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render(){
        return <div>tekst : {this.state.text}</div>
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <TextTyper name = {"tekstPrzekazany"}/>,
        document.getElementById('app')
    );
});