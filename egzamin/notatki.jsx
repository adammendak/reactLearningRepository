//Zadanie 1
//1. Prosty komponent do wyrenderowania


import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {

    ReactDOM.render(
        <div>
            <h1>Hello World!</h1>
            <p>cośtam</p>
        </div>,

        document.getElementById('app')
    );
});


//
// ReactDOM.render(
//     <div>
//         <h1>Hello World!</h1>
//         <p>cośtam</p>
//     </div>,
//
//     document.getElementById('app')
// );
// ReactDOM.render( ) mówi co ma być wyświetlone na stronie


// WERSJA Z KOMPONENTEM

import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {

    class App extends React.Component {

        render() {

            return <div>
                <h1>Hello World!</h1>
                <p>cośtam</p>
            </div>
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});


// Zadanie 2 -> zmienić stan na ekranie
//     2. Wyswietlanie informacji z propsów i blokowanie wyświetlania komponentu, gdy nie będzie jakiegoś propsa


import React from 'react';
import ReactDOM from 'react-dom';

class Greetings extends React.Component {

    render() {

        if (this.props.name !== '' && this.props.surname !== '' && this.props.age !== '' && this.props.city !== '') {

            return (
                <div>
                    <h1>I am {this.props.name}</h1>
                    <h2>My surname is {this.props.surname}</h2>
                    <h3>My age is {this.props.age}</h3>
                    <h4>I live in {this.props.city}</h4>
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
                <Greetings name='Damian' surname='Rogulski' age='132' city='Warsaw'/>
                <Greetings name='Ola' surname='Wasilewska' age={18} city='Warsaw'/>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function () {

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});


// 3. Proste zadanie ze state - po kilku sekundach, ma się zmieniać tekst na stronie

import React from 'react';
import ReactDOM from 'react-dom';

class Suprise extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stan: 'zimna'
        }
    }

    componentDidMount() {
        //po wręczeniu, w tym miejscu odpalana jest funkcja, ze wódka jest ciepła

        setTimeout(() => {

            this.setState({
                stan: 'ciepła'
            });

        }, 5000);
    }

    render() {
        return (
            <h1>Wręczam {this.state.stan} {this.props.sup}</h1>
        );
    }
}


class Greetings extends React.Component {

    render() {

        if (this.props.name !== '' && this.props.surname !== '' && this.props.age !== '' && this.props.city !== '') {

            return (
                <div>
                    <h1>I am {this.props.name}</h1>
                    <h2>My surname is {this.props.surname}</h2>
                    <h3>My age is {this.props.age}</h3>
                    <h4>I live in {this.props.city}</h4>
                    <Suprise sup={this.props.suprise}/>
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
                <Greetings name='Damian' surname='Rogulski' age='132' city='Warsaw' suprise='Whisky'/>
                <Greetings name='Ola' surname='Wasilewska' age={18} city='Warsaw' suprise='Czysta'/>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function () {

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});

// 4. Lista zakupów (dwie listy, jeśli klikniemy na element z pierwszej listy - przeniesie sie do drugiej). W druga strone nie trzeba 😃


import React from 'react';
import ReactDOM from 'react-dom';


class ShoppingList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list2: []
        }
    }

    handleClick(product) {

        const newList = this.state.list2.concat(product);

        // jak usunąć z pierwszej listy (ale na egzaminie nie będzie)
        //
        // const filteredArray = this.state.list1.filter(item => { item !== product
        // });

        this.setState({
            list2: newList
        })
    }


    render() {

        const shoppingItems = [
            'szynka',
            'ser',
            'kabanosy',
            'kawa'
        ];

        return (

            <div>
                <div style={{
                    border: '1px solid black',
                    width: '500px',
                    display: 'inline-block',
                    marginRight: '20px'
                }}>
                    <h1>Lista zakupów</h1>

                    {
                        shoppingItems.map((item, index) => {

                            return (
                                <p key={index} onClick = {() => this.handleClick(item)}> {item} </p>
                            )
                        })
                    }

                </div>

                <div style={{
                    border: '1px solid black',
                    width: '500px',
                    display: 'inline-block',
                    marginRight: '20px'
                }}>
                    <h1>Koszyk</h1>

                    {this.state.list2.map((item, index) => {
                        return (

                            <p key={index}> {item} </p>
                        )

                    })}
                </div>
            </div>

        );
    }
}

class App extends React.Component {

    render() {

        return (
            <div>
                <ShoppingList/>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function () {

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});

// 5. Formularze i walidacja - pobranie wartosci z formularza, sprawdzenie kilku warunkow i w zalezosci od wyniku walidacji - ma wyswietlic ze czegos brakuje, albo "dziekujemy za przeslanie formularza".

import React from 'react';
import ReactDOM from 'react-dom';


class KartaBiedronkiForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    handleSubmit(event) {

        event.preventDefault();
        let errors = '';
        let isValid = true;

        if (this.name.value === '') {
            errors += 'Imię jest puste '
            isValid = false;

        }

        if (this.surname.value === '') {
            errors += 'Nazwisko jest puste '
            isValid = false;

        }

        if (!this.email.value.includes('@')) { //jesli nie zawiera znaku @
            errors += 'Email jest nieprawidłowy '
            isValid = false;

        }

        if (isValid === true) {

            this.setState({
                message: 'Sukces!'
            })

        } else {

            this.setState({
                message: errors
            })
        }


    }

    render() {

        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div>
                        <label>Imię</label>
                        <input ref={(value) => this.name = value} type="text" className="'el"/>
                    </div>
                    <div>
                        <label>Nazwisko</label>
                        <input ref={(value) => this.surname = value} type="text" className="'el2"/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input ref={(value) => this.email = value} type="text" className="'el3"/>
                    </div>
                    <button>Wyślij</button>
                </form>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

class App extends React.Component {

    render() {

        return (
            <div>
                <KartaBiedronkiForm/>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function () {

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});