import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function(){

    class SecretStuff extends React.Component {
        render() {
            if( this.props.pwd === this.props.correctPwd ) {
                return <div>
                    {this.props.secret}
                </div>
            }
            return null
        }
    }

    class App extends React.Component {
        render() {
            return <SecretStuff pwd="admin1223"
                                correctPwd="admin123"
                                secret="SUper tajna wiadomość"
            />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});