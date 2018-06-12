import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class One extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                background: "green",
                width: "500px",
                height: "200px",
            }
        }
        handleStartEnter = () => {
            this.setState({
                background: this.state.background === "green" ? "blue" : "green",
                height: this.state.height === "200px" ? "400px" : "200px",
            })
        }
        render(){
            const object= {
                width: this.state.width,
                height: this.state.height,
                background: this.state.background,
            };
            return (

                <div style={object} onMouseEnter ={this.handleStartEnter}
                >

                </div>
            );
        }
    }
    ReactDOM.render(
        <One test ="jncjdnjc" />,
        document.getElementById('app')
    );
});
