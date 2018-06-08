import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let messageStyle = {
        color: 'green'
      };

    class ContactForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                errorMessage: '',
                division : 'BOK',
                message : '',
                name: '',
                email : '',
                messageError : '',
                successMessage : ''
            }

            this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
            this.handleNameChange = this.handleNameChange.bind(this);
            this.handleDivisionChange = this.handleDivisionChange.bind(this);
            this.handleEmailChange = this.handleEmailChange.bind(this);
        }

        handleChangeTextArea(event) {
            this.setState({message: event.target.value})
        }
        handleNameChange(event) {
            this.setState({name: event.target.value})
        }
        handleDivisionChange(event) {
            this.setState({division: event.target.value})
        }
        handleEmailChange(event) {
            this.setState({email: event.target.value})
        }
        handleSubmit = (event) => {
            event.preventDefault();
            if(this.state.name == '' ? this.setState({errorMessage: this.state.errorMessage + 'Pole imię musi zostać uzupełnione '}) :  null);
            if(!this.state.email.includes("@") ? this.setState({errorMessage: this.state.errorMessage + 'Pole email musi zostać uzupełnione i zawierać znak @ '}) : null);  
            if(this.state.message == '' ? this.setState({messageError: this.state.errorMessage + 'Pole wiadomość musi zostać uzupełnione'}) :  null);
            if(this.state.errorMessage == '' && this.state.messageError =='') {
                this.setState({successMessage : 'Dziękujemy za wiadomość. Wysłano do wydziału: ' + this.state.division})
            }
        }

        render() {
            return(
                <div>
                    <h1>{this.state.errorMessage}</h1>
                    <h2 style={messageStyle}>{this.state.successMessage}</h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Imię:</label>
                    <input type="text"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        />
                    <div>
                        <select
                                value={this.state.division}
                                onChange={this.handleDivisionChange}>
                                <option value="BOK">BOK</option>
                                <option value="Dział Techniczny">Dział Techniczny</option>
                                <option value="Marketing">Marketing</option>
                        </select>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        />
                    </div>
                    <div>
                        <label>
                            message:
                            <textarea value={this.state.message} onChange={this.handleChangeTextArea} />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Wyślij" />
                    </div>
                </form>
                <p>{this.state.messageError}</p>
            </div>
            )
        }
    }
    
    class App extends React.Component {

        render() {

            return (
                <div>
                   <ContactForm />
                </div>
            )
        }
    }


    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});
