import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    class Surprise extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                text: 'Wait for it...'
            }
        }

        componentDidMount() {

            setTimeout(() => {

                this.setState({
                    text: 'Surprise!'
                });

            }, 5000);
        }

        
        componentWillUnmount() {
            clerInerval(this.intervalId);
        }

        render() {
            return (
                <h1>{this.state.text}</h1>
            );
        }
    }

    ReactDOM.render(
        <Surprise/>,
        document.getElementById('app')
    );

});