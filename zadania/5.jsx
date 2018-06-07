import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function(){
    class FormExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: '',
                email: "",
                title: ""
            };
        }
        handleChangeName = (event) => {
            this.setState({
                name: event.target.value
            });
        }
        handleChangeEmail = (event) => {
            this.setState({
                email: event.target.value
            });
        }

        handleTitleChange = (event) => {
            this.setState({
                title: event.target.value
            });
        }
        handleSubmit = (event) => {
            event.preventDefault();
            console.log(this.state.name)
            console.log(this.state.email)
            console.log(this.state.title)
        }
        render(){
            return (
                <div>
                    <h1>{this.state.name}</h1>
                    <h1>{this.state.email}</h1>
                    <h1>{this.state.title}</h1>

                    <form onSubmit={this.handleSubmit} >
                        <label>
                            Name:
                            <input type="text"
                                   value={this.state.name}
                                   onChange={this.handleChangeName}/>

                            <input type="email"
                                   value={this.state.email}
                                   onChange={this.handleChangeEmail}/>

                            <select
                                value={this.state.title}
                                onChange={this.handleTitleChange}>
                                <option value="ms">Ms</option>
                                <option value="mrs">Mrs</option>
                                <option value="mr">Mr</option>
                            </select>

                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            );
        }
    }

    ReactDOM.render(
        <FormExample />,
        document.getElementById('app')
    );
});