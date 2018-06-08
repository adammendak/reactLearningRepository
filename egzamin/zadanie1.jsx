import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    class Address extends React.Component {

        render() {

            if (this.props.name !== '' && this.props.surname !== '' && this.props.street !== '' && this.props.housenumber !== '' && 
            (this.props.postcode.length == 5 ||this.props.postcode.length == 6 ) && this.props.city !== '') {

                return (
                    <div>
                        <h1>{this.props.name} {this.props.surname}</h1>
                        <p>{this.props.street} {this.props.housenumber}</p>
                        <p>{this.props.postcode} {this.props.city}</p>
                    </div>
                )
            } else {
                return null;
            }
        }
    }

    class App extends React.Component {

        render() {

            return (
                <div>
                    <Address name ="Renata" surname="JM" street="Hennela" housenumber={10} postcode="02-495" city="Warszawa"/>
                </div>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});

