import React from 'react';
import ReactDOM from 'react-dom';


class ChatMessage extends React.Component {
    render() {
        return <li> Wpis z chatu { this.props.number }</li>
    }
}
class ChatMessages extends React.Component {
    render() {
        let messages = []; //to musi byc tablia
        for( let i = 1; i <= this.props.numberOfMsg ; i++) {
            const elem = <ChatMessage number={i}/>
            messages.push( elem );
        }
        return <ul>
            {messages}
        </ul>
    }
}

class App extends React.Component {
    render() {
        return <ChatMessages numberOfMsg={30} />
    }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});